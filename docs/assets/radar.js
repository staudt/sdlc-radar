(() => {
  const items = {
    playwright: {
      maturity: 'Production now',
      title: 'Playwright CLI for agents',
      summary: 'Browser automation is becoming a native capability for coding and testing agents. Playwright CLI gives agents a compact, deterministic interface for inspection, test generation, execution, diagnosis, and repair without forcing every interaction through a large MCP tool surface.',
      why: 'This is a practical bridge between coding agents and mature browser automation. It also reinforces a broader pattern: use deterministic tools underneath the agent and reserve model reasoning for interpretation and decision making.',
      link: 'topics/qa-and-testing.html'
    },
    'policy-ci': {
      maturity: 'Production now',
      title: 'Policy separated CI agents',
      summary: 'The strongest agentic CI pattern separates read and reasoning privileges from write and execution privileges. Agents investigate, propose, and explain while a controlled deterministic layer validates and performs privileged actions.',
      why: 'This reduces the blast radius of autonomous tooling and gives enterprises a clearer audit boundary. It is increasingly relevant to CI modernization, security review, and AI readiness assessments.',
      link: 'topics/evaluation-and-governance.html'
    },
    'quality-gates': {
      maturity: 'Experiment now',
      title: 'Independent agent quality gates',
      summary: 'A green test run is no longer enough evidence for agent generated work. Newer approaches add independent graders, constraint checks, trajectory review, mutation style validation, and other forms of second order verification.',
      why: 'The same agent that wrote code or tests can share the same blind spots. Independent evaluation creates a more credible acceptance layer and is becoming one of the most important QA architecture questions for AI driven teams.',
      link: 'topics/evaluation-and-governance.html'
    },
    'spec-enrichment': {
      maturity: 'Experiment now',
      title: 'Spec to test enrichment',
      summary: 'QA reasoning is moving earlier in the lifecycle. Agents and test architects can enrich requirements, expose ambiguity, derive acceptance constraints, and turn business intent into more machine verifiable specifications before implementation starts.',
      why: 'Agent quality is bounded by input quality. Teams with vague requirements and undocumented rules will get less reliable autonomous development than teams that deliberately improve specification quality.',
      link: 'topics/qa-and-testing.html'
    },
    adversarial: {
      maturity: 'Experiment now',
      title: 'Adversarial test validation',
      summary: 'Generated tests can pass while still being weak. Mutation testing, adversarial examples, alternate implementations, and independent test generation are emerging as ways to verify that a test suite can actually distinguish correct behavior from plausible mistakes.',
      why: 'This addresses a core AI testing bias: code and tests can agree with each other while both being wrong. Strong validation asks whether the tests would fail against believable incorrect implementations.',
      link: 'topics/qa-and-testing.html'
    },
    'mcp-qa': {
      maturity: 'Watch closely',
      title: 'MCP as a QA surface',
      summary: 'MCP servers are becoming APIs for agents. As adoption grows, they need the same engineering discipline applied to other integration surfaces: contracts, compatibility checks, access control, observability, and regression testing.',
      why: 'A broken or over privileged MCP tool can make an otherwise capable agent unreliable or unsafe. This creates a new testing and governance surface that many teams have not yet incorporated into their QA strategy.',
      link: 'topics/mcp-and-tooling.html'
    },
    'multi-agent': {
      maturity: 'Watch closely',
      title: 'Multi agent coding workflows',
      summary: 'Multiple coding agents can provide useful drafting, critique, specialization, and escalation, but simply adding more agents does not reliably improve outcomes. Coordination, isolation, and explicit acceptance rules matter more than agent count.',
      why: 'This is promising for complex work, but architecture and orchestration are still evolving quickly. It is better treated as a controlled experiment than a default delivery model today.',
      link: 'topics/agentic-sdlc.html'
    }
  };

  const title = document.getElementById('detail-title');
  const maturity = document.getElementById('detail-maturity');
  const summary = document.getElementById('detail-summary');
  const why = document.getElementById('detail-why');
  const link = document.getElementById('detail-link');
  const radarItems = Array.from(document.querySelectorAll('.radar-item'));

  if (!title || !maturity || !summary || !why || !link || !radarItems.length) return;

  function selectItem(element) {
    const data = items[element.dataset.key];
    if (!data) return;

    radarItems.forEach(item => item.classList.remove('selected'));
    element.classList.add('selected');

    maturity.textContent = data.maturity;
    title.textContent = data.title;
    summary.textContent = data.summary;
    why.textContent = data.why;
    link.href = data.link;
  }

  radarItems.forEach(item => {
    item.addEventListener('click', () => selectItem(item));
    item.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        selectItem(item);
      }
    });
  });
})();
