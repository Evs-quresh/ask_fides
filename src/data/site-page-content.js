/**
 * Copy for marketing / legal inner pages. Keys must match `marketingRoutes` in `src/routes/marketing-routes.js`.
 */
export const sitePageContent = {
  'for-academia': {
    title: 'For Academia',
    lead: 'Support scholarship, clinics, and policy research with structured legal intelligence and transparent provenance.',
    body: [
      'Faculty and researchers can explore large corpora of case law and filings with natural-language queries while retaining clear links to primary materials.',
      'Clinic teams can accelerate intake memos and factual chronologies with guardrails that emphasize verification over speculation.',
    ],
    bullets: [
      'Ideal for seminar research, empirical legal studies, and comparative jurisdiction work',
      'Exports that preserve citations for footnotes and peer review',
    ],
  },
  company: {
    title: 'Company',
    lead: 'Ask Fides exists to raise the standard of legal software: precision, accountability, and respect for the profession.',
    body: [
      'We partner with practitioners and institutions to build tools that reflect how high-stakes legal work actually gets done—under time pressure, with reputational risk, and with a duty to clients and courts.',
      'Our roadmap is driven by customer research, security review, and a commitment to outputs that professionals can defend in practice.',
    ],
  },
  news: {
    title: 'News & Insights',
    lead: 'Analysis at the intersection of law, technology, and professional ethics.',
    body: [
      'Here we publish longer-form notes on product direction, security posture, and the evolving landscape of AI in legal practice.',
      'Subscribe from the footer or contact us if you would like to contribute or request a briefing for your firm.',
    ],
  },
  security: {
    title: 'Security & Trust',
    lead: 'Client matters deserve more than generic SaaS defaults. Ask Fides is architected with legal confidentiality in mind.',
    body: [
      'We implement strong encryption in transit and at rest, strict access controls, and logging designed for security reviews and procurement questionnaires.',
      'Our roadmap includes formal SOC 2 attestation; controls and documentation are maintained on a continuous basis.',
    ],
    bullets: [
      'Role-based access and least-privilege engineering practices',
      'Data handling policies aligned with professional responsibility obligations',
      'Incident response runbooks and customer notification commitments',
    ],
  },
  docs: {
    title: 'API Documentation',
    lead: 'Integrate Ask Fides with matter systems, DMS, and internal dashboards.',
    body: [
      'The API exposes search, document ingestion, and export endpoints with stable versioning and clear rate limits.',
      'Enterprise customers receive sandbox keys, dedicated support channels, and optional VPC-style deployment options as they mature.',
    ],
    bullets: ['REST + JSON', 'Webhook notifications for long-running jobs', 'Detailed error codes for production debugging'],
  },
  status: {
    title: 'System Status',
    lead: 'Transparency for uptime, incidents, and scheduled maintenance.',
    body: [
      'We publish current operational status and historical incident summaries so your IT and risk teams can plan around our platform with confidence.',
      'Subscribe to status notifications from this page once your organization is onboarded.',
    ],
  },
  enterprise: {
    title: 'Enterprise',
    lead: 'Dedicated onboarding, security review packs, and deployment options for large firms and legal departments.',
    body: [
      'Enterprise programs include prioritized support, custom integrations, and alignment with your information governance policies.',
      'We work with procurement, IT, and innovation teams to roll out Ask Fides without disrupting existing DMS or KM investments.',
    ],
    bullets: ['Volume pricing and master agreements', 'SSO / SCIM roadmap coordination', 'Custom SLAs where appropriate'],
  },
  'case-intelligence': {
    title: 'Case Intelligence',
    lead: 'A single pane for chronology, contradictions, and narrative strength across your matter.',
    body: [
      'Case Intelligence layers Ask Fides outputs into views that partners and associates can scan in minutes: what changed, what conflicts, and what needs human judgment.',
      'It is designed for complex litigation and investigations where the volume of documents exceeds what traditional manual review can sustain.',
    ],
  },
  about: {
    title: 'About',
    lead: 'Ask Fides is a legal intelligence company focused on verifiable outcomes.',
    body: [
      'We are a multidisciplinary team of engineers, designers, and legal-domain experts working on tools that respect the craft of practice.',
      'If you believe software should shorten drudgery without shortening accountability, we would like to hear from you.',
    ],
  },
  careers: {
    title: 'Careers',
    lead: 'Build the next generation of responsible legal technology.',
    body: [
      'We hire engineers, product designers, and customer-facing roles who care about detail, security, and the realities of professional services.',
      'We offer competitive compensation, remote-friendly teams, and direct exposure to how the product is used in live matters.',
    ],
    bullets: ['Open roles are listed as they become available—check back or reach out speculatively via Contact'],
  },
  contact: {
    title: 'Contact',
    lead: 'Talk to our team about demos, pilots, security questionnaires, or partnerships.',
    body: [
      'For sales and product questions, email hello@askfides.ai (placeholder—replace with your production address).',
      'For security and compliance reviews, include your firm name, approximate seat count, and preferred timeline. We typically respond within two business days.',
    ],
    bullets: ['Schedule a demo from the home page CTA', 'Enterprise RFPs welcome'],
  },
  login: {
    title: 'Sign in',
    lead: 'Firm and enterprise access is provided through your organization’s identity provider.',
    body: [
      'If your firm already uses Ask Fides, open the invitation link from your administrator or sign in through your SSO portal.',
      'If you are evaluating the product, use Contact or Schedule a Demo from the homepage and we will provision a sandbox workspace.',
    ],
    bullets: ['SSO / SAML available for enterprise accounts', 'MFA enforced for all production tenants'],
  },
}
