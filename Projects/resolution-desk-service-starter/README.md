# Resolution Desk Service Starter

A server-side starter for reviewing an AI answer against a locally held policy pack. This project contains no AI model and no secret. It calls an AI provider only after you configure a provider key on a private machine or secure server.

## What Is Public and What Is Private

The public starter provides a reusable HTTP interface and a basic review schema. It is not the unique part of the service.

Keep these items private:

- `private/policy.json`: your review rules and escalation criteria;
- `private/system-prompt.md`: your private review instructions and references;
- `.env`: provider API key and local configuration;
- customer inputs, review logs, experimental data, hardware details, and pricing.

The local `.gitignore` excludes `private/` and `.env`. Confirm the private repository is actually private before adding those files.

## Transfer to a Private Computer

1. Copy this folder to the private Linux computer, or clone it into a new private repository.
2. Install Node.js 20 or later from your Linux distribution or https://nodejs.org/.
3. In the project folder, run `npm install`.
4. Copy `private.example` to `private`.
5. Copy `.env.example` to `.env`.
6. Edit `private/policy.json` and `private/system-prompt.md` only on the private machine.
7. Add your provider key to `.env` locally. Never commit, email, paste, or share the key.
8. Start the service with `npm start`.

The service listens only at `http://127.0.0.1:8787`. This keeps it reachable from the private computer only.

## Local Check

After completing the private setup, open:

```text
http://127.0.0.1:8787/health
```

A ready response confirms that the private policy pack is present. Without it, the server deliberately returns a not-ready status.

## Review Request

Send a `POST` request to `/v1/review` with this shape:

```json
{
  "question": "What is the fastest route to the station?",
  "conditions": "There is no live traffic data.",
  "answer": "Take Ridge Road.",
  "validationMethod": "The schedule math can be checked, but route speed cannot."
}
```

The response separates claims, assumptions, contradictions, evidence gaps, validation coverage, a narrowed answer, and a reason to escalate. The AI review is advisory; it is not a proof of truth and must not make high-impact decisions without appropriate human review.

## Public Deployment Warning

Do not expose this starter directly to the internet. Before allowing external users, add authentication, authorization, rate limiting, input logging and deletion controls, monitoring, spending limits, a privacy policy, and a secure HTTPS deployment. Keep the provider key on the server, never in browser JavaScript.

## Provider and Model

The implementation currently uses the OpenAI API and `gpt-4.1-mini`. Replace the provider adapter deliberately if you choose another provider. The private policy pack remains the local source of your review criteria.
