import express from 'express';
import OpenAI from 'openai';
import { loadPrivatePolicy } from './private-policy.js';

const app = express();
const port = Number(process.env.PORT ?? 8787);

app.use(express.json({ limit: '100kb' }));

app.get('/health', async (_request, response) => {
  try {
    const { policy } = await loadPrivatePolicy();
    response.json({ status: 'ready', policy: policy.name, version: policy.version });
  } catch (error) {
    response.status(503).json({ status: 'not-ready', message: error.message });
  }
});

app.post('/v1/review', async (request, response) => {
  const { question, conditions, answer, validationMethod } = request.body ?? {};
  if (![question, conditions, answer].every((value) => typeof value === 'string' && value.trim())) {
    return response.status(400).json({ error: 'question, conditions, and answer are required non-empty strings.' });
  }

  let privatePolicy;
  try {
    privatePolicy = await loadPrivatePolicy();
  } catch (error) {
    return response.status(503).json({ error: error.message });
  }

  if (!process.env.OPENAI_API_KEY) {
    return response.status(503).json({ error: 'OPENAI_API_KEY is not configured on this server.' });
  }

  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const reviewSchema = {
    type: 'object',
    additionalProperties: false,
    properties: {
      classification: { type: 'string', enum: ['bounded-response', 'partially-validated', 'validated-limited-resolution', 'unresolved', 'escalate'] },
      claims: { type: 'array', items: { type: 'string' } },
      assumptions: { type: 'array', items: { type: 'string' } },
      contradictions: { type: 'array', items: { type: 'string' } },
      evidenceGaps: { type: 'array', items: { type: 'string' } },
      validationCoverage: { type: 'string', enum: ['none', 'partial', 'full'] },
      narrowedAnswer: { type: 'string' },
      escalationReason: { type: 'string' }
    },
    required: ['classification', 'claims', 'assumptions', 'contradictions', 'evidenceGaps', 'validationCoverage', 'narrowedAnswer', 'escalationReason']
  };

  try {
    const completion = await client.chat.completions.create({
      model: 'gpt-4.1-mini',
      response_format: { type: 'json_schema', json_schema: { name: 'review_result', strict: true, schema: reviewSchema } },
      messages: [
        { role: 'system', content: `${privatePolicy.systemPrompt}\n\nPrivate policy:\n${JSON.stringify(privatePolicy.policy)}` },
        {
          role: 'user',
          content: JSON.stringify({ question, conditions, answer, validationMethod: validationMethod ?? '' })
        }
      ]
    });

    response.json(JSON.parse(completion.choices[0].message.content));
  } catch (error) {
    response.status(502).json({ error: 'Review provider request failed.', detail: error.message });
  }
});

app.listen(port, '127.0.0.1', () => {
  console.log(`Resolution Desk service listening at http://127.0.0.1:${port}`);
});
