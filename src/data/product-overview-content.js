/** Design reference: Product Overview marketing page */

export const productOverviewHero = {
  titlePrefix: 'Maximize your',
  titleGradient: 'practice efficiency.',
  subtitle: 'Achieve more with ASK FIDES.',
  lead:
    'Operate at your highest potential with precision legal intelligence. ASK FIDES delivers real-time insights through a grounded, verifiable and trusted workflow designed to enhance accuracy, speed, and control.',
  cta: { label: 'Get Started', to: '/contact' },
}

export const productOverviewMission = {
  lead:
    'ASK FIDES is designed to simplify your workload, allowing you to focus on what truly matters:',
  emphasis: 'achieving the best outcomes for your clients.',
}

export const productOverviewSecondaryCards = [
  {
    id: 'voice',
    icon: 'Mic',
    title: 'Voice-Activated Commands',
    description:
      'Hands-free operation. Schedule meetings or retrieve case data simply by speaking.',
    glow: 'blue',
  },
  {
    id: 'documents',
    icon: 'FileText',
    title: 'Smart Documents',
    description:
      'Intelligent categorization ensures zero-friction retrieval based on case relevance.',
    glow: 'violet',
    footer: 'progress',
  },
  {
    id: 'scheduling',
    icon: 'Calendar',
    title: 'Integrated Scheduling',
    description:
      'Seamlessly track appointments with a calendar that syncs across all your devices.',
    glow: 'emerald',
    badge: 'NEW',
  },
]

export const productOverviewFeatures = [
  {
    id: 'research',
    icon: 'Search',
    accent: 'blue',
    panelFirst: true,
    bulletStyle: 'check',
    titleLines: ['AI-Powered', 'Legal Research'],
    body:
      'Instant access to a vast database of global case precedents, enabling you to craft stronger arguments and stay ahead of the competition. Our algorithms filter noise to surface only the most relevant jurisprudence.',
    bullets: [
      'Comprehensive search results',
      'Multi-format data analysis',
      'Customized folder system',
    ],
    panel: 'search',
  },
  {
    id: 'case',
    icon: 'LayoutDashboard',
    accent: 'purple',
    panelFirst: false,
    titleLines: ['Case', 'Management'],
    body:
      'Organize and manage all aspects of your cases from a single platform, including deadlines, documents, and communications. Never miss a critical filing date again with intelligent alerts.',
    panel: 'deadlines',
  },
  {
    id: 'client',
    icon: 'Users',
    accent: 'emerald',
    panelFirst: true,
    titleLines: ['Client', 'Management'],
    body:
      'Keep track of client interactions, schedule meetings and manage communications efficiently. A centralized hub for maintaining strong attorney-client relationships.',
    stats: [
      { value: '98%', label: 'Client Satisfaction' },
      { value: '24/7', label: 'Support Access' },
    ],
    panel: 'portal',
  },
]

export const productSearchPanel = {
  urlBar: 'search.askfides.ai',
  query: 'Intellectual Property dispute...',
  rows: [
    {
      caseNo: 'CASE-2024-001',
      summary: 'Dispute over property boundaries between two neighboring landowners.',
      action: 'VIEW DETAILS',
    },
    {
      caseNo: 'CASE-2024-002',
      summary: 'Ownership dispute involving a commercial property downtown.',
      action: 'VIEW DETAILS',
    },
    {
      caseNo: 'CASE-2024-003',
      summary: 'Landlord-tenant dispute regarding unpaid rent and eviction.',
      action: 'VIEW DETAILS',
    },
  ],
}

export const productDeadlinesPanel = {
  title: 'Upcoming Deadlines',
  items: [
    {
      title: 'Case 1: Contract Dispute',
      subtitle: 'File Motion for Summary Judgment',
      date: 'Nov 18',
      status: 'In Progress',
      statusTone: 'amber',
    },
    {
      title: 'Case 2: Intellectual Property',
      subtitle: 'Respond to Discovery Requests',
      date: 'Nov 20',
      status: 'Completed',
      statusTone: 'emerald',
    },
    {
      title: 'Case 3: Employment Discrim...',
      subtitle: 'Mediation Session',
      date: 'Nov 22',
      status: 'In Progress',
      statusTone: 'amber',
    },
  ],
}

export const productClientPortalPanel = {
  title: 'Client Portal',
  columns: ['CLIENT NAME', 'STATUS', 'LAST ACTIVITY', 'ACTION'],
  rows: [
    {
      name: 'Ethan Harper',
      status: 'Active',
      statusTone: 'emerald',
      lastActivity: '2 hours ago',
      action: 'View',
    },
    {
      name: 'Olivia Bennett',
      status: 'Pending',
      statusTone: 'amber',
      lastActivity: 'Yesterday',
      action: 'View',
    },
    {
      name: 'Noah Carter',
      status: 'Active',
      statusTone: 'emerald',
      lastActivity: '3 days ago',
      action: 'View',
    },
    {
      name: 'Ava Morgan',
      status: 'Active',
      statusTone: 'emerald',
      lastActivity: '1 week ago',
      action: 'View',
    },
  ],
}
