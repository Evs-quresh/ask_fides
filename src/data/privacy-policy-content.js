export const PRIVACY_LAST_UPDATED = 'November 13, 2025'

export const PRIVACY_LEAD =
  'Your privacy is paramount. This Privacy Policy outlines how Ask Fides ("we," "us," or "our") collects, uses, and safeguards your information when you interact with our legal AI platform and services.'

export const privacyTocItems = [
  { id: 'toc-1', label: '1. Scope of this Policy', sectionId: 'scope' },
  { id: 'toc-2', label: '2. Types of Personal Data We Collect', sectionId: 'types' },
  { id: 'toc-3', label: '3. How We Use Personal Data', sectionId: 'use' },
  { id: 'toc-4', label: '4. Disclosure of Personal Data', sectionId: 'disclosure' },
]

export const privacyPolicySections = [
  {
    id: 'scope',
    number: '01.',
    title: 'Scope of this Policy',
    intro:
      'This Privacy Policy outlines how Ask Fides handles your personal data when you: visit or use our website, www.askfides.com; use our AI-driven legal intelligence services or platform; or interact with us directly, such as through customer support, sales inquiries, or events.',
  },
  {
    id: 'types',
    number: '02.',
    title: 'Types of Personal Data We Collect',
    intro:
      'We collect information that identifies, relates to, or could reasonably be linked with you or your organization, including: account and contact details; professional and firm information; matter metadata you choose to upload; usage, device, and log data; and communications you send to us. Sensitive categories are handled only where permitted by law and with appropriate safeguards.',
  },
  {
    id: 'use',
    number: '03.',
    title: 'How We Use Personal Data',
    bullets: [
      'To deliver our products and services, including verifying your identity and managing your account.',
      'To respond to your inquiries, support requests, or comments.',
      'To enhance your experience by analyzing platform usage and improving functionality.',
      'To maintain the security and integrity of our systems.',
      'To comply with legal obligations and regulatory requirements.',
      'To inform you about updates, new features, or related services (subject to your marketing preferences).',
    ],
  },
  {
    id: 'disclosure',
    number: '04.',
    title: 'Disclosure of Personal Data',
    intro: 'We may share your information with:',
    bullets: [
      'Affiliated Entities: Companies within our corporate family for operational purposes.',
      'Service Providers: Third-party vendors who assist with hosting, data analysis, payment processing, and customer support.',
      'Professional Advisors: Lawyers, auditors, and insurers when necessary for our business operations.',
      'Integrations: Third-party platforms you choose to integrate with Ask Fides.',
      'Successor Entities: In the event of a merger, acquisition, or sale of assets.',
    ],
  },
]
