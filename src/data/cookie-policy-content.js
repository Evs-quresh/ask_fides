export const COOKIE_LAST_UPDATED = 'November 13, 2025'

export const COOKIE_LEAD =
  'The Green Team Consulting Limited (d/b/a "ASK FIDES," "we," "us," or "our") uses cookies and similar technologies to enhance your browsing experience, analyze site traffic and support our legal AI platform.'

export const COOKIE_LEGAL_EMAIL = 'legal@askfides.com'

export const cookiePolicyTocItems = [
  { id: 'toc-1', badge: '1', label: 'What Are Cookies?', sectionId: 'what-are-cookies' },
  { id: 'toc-2', badge: '2', label: 'Types of Cookies', sectionId: 'types' },
  { id: 'toc-3', badge: '3', label: 'Manage Cookies', sectionId: 'manage' },
  { id: 'toc-4', badge: '4', label: 'Policy Updates', sectionId: 'updates' },
  { id: 'toc-5', badge: '5', label: 'Contact Us', sectionId: 'contact' },
]

export const cookiePolicySections = [
  {
    id: 'what-are-cookies',
    number: '01.',
    title: 'What Are Cookies?',
    paragraphs: [
      {
        text: 'Cookies are small text files placed on your device when you visit a website. They help us recognize your device, remember your preferences, and improve your experience.',
        tone: 'lead',
      },
      {
        text: 'These files allow us to optimize the functionality of the Ask Fides platform, ensuring that sessions remain secure and user settings persist across visits.',
        tone: 'muted',
      },
    ],
  },
  {
    id: 'types',
    number: '02.',
    title: 'Types of Cookies',
    cards: [
      {
        title: 'Essential Cookies',
        body: 'Necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services.',
      },
      {
        title: 'Performance Cookies',
        body: 'Allow us to count visits and traffic sources so we can measure and improve the performance of our site. All information these cookies collect is aggregated and therefore anonymous.',
      },
    ],
  },
  {
    id: 'manage',
    number: '03.',
    title: 'How to Manage Cookies',
    paragraphs: [
      {
        text: 'Most web browsers allow you to manage your cookie preferences. You can set your browser to refuse cookies, or delete certain cookies. Generally, you should also be able to manage similar technologies in the same way that you manage cookies.',
        tone: 'body',
      },
    ],
  },
  {
    id: 'updates',
    number: '04.',
    title: 'Updates to This Cookie Policy',
    paragraphs: [
      {
        text: 'We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.',
        tone: 'body',
      },
    ],
  },
  {
    id: 'contact',
    number: '05.',
    title: 'Contact Us',
    paragraphs: [
      {
        text: 'If you have any questions about our use of cookies or other technologies, please email us at privacy@askfides.com.',
        tone: 'body',
      },
    ],
  },
]
