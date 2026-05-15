/** Design: https://www.figma.com/design/iMgNJAuP5kjvSMTshbehpA/Untitled?node-id=1-2&t=Pr248M9Q3Ary51mX-4 */
export const practitionersHero = {
  badge: 'New: Semantic Case Analysis v2.0',
  titleBefore: 'Reclaim',
  titleHighlight: '60% - 80%',
  titleAfter: 'of your time',
  lead:
    'The modern legal command center. Ask Fides transforms hours of precedent research into seconds of certainty with lawyer-grade AI precision.',
  primaryCta: { label: 'Start Free Trial', to: '/contact' },
  secondaryCta: { label: 'View Demo', to: '/contact' },
  trust: [{ label: 'SOC2 Certified' }, { label: 'No training on data' }],
}

export const practitionersComparison = {
  title: 'Traditional vs Innovational',
  subtitle: 'Stop billing hours for tasks a machine can do in seconds.',
  columns: ['FEATURE', 'Legacy Search', 'Ask Fides AI'],
  rows: [
    {
      feature: 'Contextual Understanding',
      legacy: { kind: 'icon', value: 'x' },
      fides: { kind: 'icon', value: 'check' },
    },
    {
      feature: 'Predictive Outcome Analysis',
      legacy: { kind: 'icon', value: 'x' },
      fides: { kind: 'icon', value: 'check' },
    },
    {
      feature: 'Drafting Speed',
      legacy: { kind: 'text', value: 'Hours' },
      fides: { kind: 'text', value: 'Seconds', highlight: true },
    },
    {
      feature: 'Hallucination Guardrails',
      legacy: { kind: 'text', value: 'N/A' },
      fides: { kind: 'icon', value: 'shield' },
    },
  ],
}

export const practitionersAudience = {
  overline: 'FOR EVERY PRACTITIONER',
  title: 'Built for the Modern Bar',
  cards: [
    {
      icon: 'Upload',
      title: 'Solo Practice',
      body: 'Run a full caseload with research and drafting support that scales like an associate—without the overhead.',
    },
    {
      icon: 'FolderOpen',
      title: 'Mid-Size Firms',
      body: 'Standardize quality across teams with citation-backed outputs, shared matter context, and faster turnaround.',
    },
    {
      icon: 'Building2',
      title: 'In-House Counsel',
      body: 'Cut outside spend and accelerate reviews with defensible summaries, timelines, and risk flags tied to source text.',
    },
    {
      icon: 'Gavel',
      title: 'Judiciary',
      body: 'Review materials faster with structured chronologies and clear provenance for every extracted fact.',
    },
  ],
}

export const practitionersCta = {
  title: "Certainty isn't optional.\nIt's everything.",
  description: 'Join the 2,000+ legal professionals already using Ask Fides to dominate their docket.',
  primaryLabel: 'Request Early Access',
  secondaryLabel: 'Contact Sales',
  primaryTo: '/contact',
  secondaryTo: '/contact',
  footnote: 'No credit card required for pilot program.',
}
