const form = document.querySelector('#review-form');
const resultEmpty = document.querySelector('#result-empty');
const resultContent = document.querySelector('#result-content');
const classification = document.querySelector('#classification');
const summary = document.querySelector('#result-summary');
const boundedResult = document.querySelector('#bounded-result');
const validatedResult = document.querySelector('#validated-result');
const conditionResult = document.querySelector('#condition-result');
const requestPreview = document.querySelector('#request-preview');
const pilotForm = document.querySelector('#pilot-form');
const pilotPreview = document.querySelector('#pilot-preview');

function hasText(value) {
  return value.trim().length > 0;
}

function classifyReview({ question, conditions, response, validation, validationCoverage }) {
  const bounded = hasText(response);
  const validated = bounded && hasText(validation) && validationCoverage === 'full';
  const partiallyValidated = bounded && hasText(validation) && validationCoverage === 'partial';
  const hasConditions = hasText(conditions);

  if (!bounded) {
    return {
      label: 'No response supplied',
      bounded: 'No',
      validated: 'No',
      condition: hasConditions ? 'C declared' : 'C incomplete',
      summary: 'A classification needs a finite response to review.'
    };
  }

  if (validated) {
    return {
      label: 'Validated limited resolution',
      bounded: 'Yes',
      validated: 'Yes, if method is checkable',
      condition: hasConditions ? 'C declared' : 'C incomplete',
      summary: 'The response is bounded and includes a stated validation method. Its conclusion applies only to the question and conditions supplied.'
    };
  }

  if (partiallyValidated) {
    return {
      label: 'Partially validated response',
      bounded: 'Yes',
      validated: 'Only the stated component',
      condition: hasConditions ? 'C declared; scope the conclusion' : 'C incomplete',
      summary: 'A stated method supports part of the response, not every conclusion in it. Separate the validated component from the unresolved or assumption-dependent component.'
    };
  }

  return {
    label: 'Bounded response only',
    bounded: 'Yes',
    validated: 'No method declared',
    condition: hasConditions ? 'C declared; review assumptions' : 'C incomplete',
    summary: 'The response is finite, but no validation method was supplied. Treat it as analysis or advice rather than a validated resolution.'
  };
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const review = {
    question: document.querySelector('#question').value,
    conditions: document.querySelector('#conditions').value,
    response: document.querySelector('#response').value,
    validation: document.querySelector('#validation').value,
    validationCoverage: document.querySelector('#validation-coverage').value
  };
  const outcome = classifyReview(review);

  classification.textContent = outcome.label;
  summary.textContent = outcome.summary;
  boundedResult.textContent = outcome.bounded;
  validatedResult.textContent = outcome.validated;
  conditionResult.textContent = outcome.condition;
  resultEmpty.hidden = true;
  resultContent.hidden = false;
  resultContent.dataset.review = JSON.stringify({ review, outcome }, null, 2);
});

document.querySelector('#copy-result').addEventListener('click', async () => {
  const text = resultContent.dataset.review;
  if (text) {
    await navigator.clipboard.writeText(text);
  }
});

document.querySelector('#prepare-request').addEventListener('click', () => {
  const endpoint = document.querySelector('#endpoint').value.trim();
  const review = resultContent.dataset.review ? JSON.parse(resultContent.dataset.review).review : null;

  if (!endpoint || !review) {
    requestPreview.hidden = false;
    requestPreview.textContent = 'Classify a response and provide an endpoint before preparing a review request.';
    return;
  }

  requestPreview.hidden = false;
  requestPreview.textContent = JSON.stringify({
    endpoint,
    method: 'POST',
    purpose: 'Request an independent, user-controlled review. Sending this request remains manual.',
    body: review
  }, null, 2);
});

pilotForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const brief = {
    roleOrTeam: document.querySelector('#pilot-role').value.trim(),
    workflow: document.querySelector('#pilot-workflow').value.trim(),
    riskOrCost: document.querySelector('#pilot-cost').value.trim(),
    proposedScope: 'Audit 20 to 50 AI outputs from one workflow.',
    deliverables: [
      'Finding log: evidence, assumptions, and validation gaps',
      'Corrected prompt or response examples',
      'Before-and-after summary with measurable findings'
    ],
    nextStep: 'Review the brief with the prospective client and agree on data handling, success criteria, price, and timeline before accepting material.'
  };

  pilotPreview.hidden = false;
  pilotPreview.textContent = JSON.stringify(brief, null, 2);
});
