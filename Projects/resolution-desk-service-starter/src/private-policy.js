import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const privateDirectory = path.join(projectRoot, 'private');

export async function loadPrivatePolicy() {
  try {
    const [policyText, systemPrompt] = await Promise.all([
      readFile(path.join(privateDirectory, 'policy.json'), 'utf8'),
      readFile(path.join(privateDirectory, 'system-prompt.md'), 'utf8')
    ]);

    const policy = JSON.parse(policyText);
    if (!Array.isArray(policy.reviewInstructions) || !Array.isArray(policy.escalationRules)) {
      throw new Error('policy.json must contain reviewInstructions and escalationRules arrays.');
    }

    return { policy, systemPrompt };
  } catch (error) {
    const message = error.code === 'ENOENT'
      ? 'Private policy pack is missing. Copy private.example to private and customize it locally.'
      : `Private policy pack is invalid: ${error.message}`;
    throw new Error(message);
  }
}
