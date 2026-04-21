import dashboardInterface from '@/assets/figma/dashboard-interface.png'
import arrowRight from '@/assets/figma/arrow-right.svg'
import arrowUpRight from '@/assets/figma/arrow-up-right.svg'
import shield from '@/assets/figma/shield.svg'
import lock from '@/assets/figma/lock.svg'
import externalLink from '@/assets/figma/external-link.svg'
import statusIcon from '@/assets/figma/status-icon.svg'

export const askFidesAssets = {
  dashboardInterface,
  arrowRight,
  arrowUpRight,
  shield,
  lock,
  externalLink,
  statusIcon,
}

export const trustItems = [
  { icon: 'shield', label: 'SOC2 Compliant' },
  { icon: 'lock', label: 'E2E Encrypted' },
]

export const navItems = [
  'For Practitioners',
  'For Academia',
  'Company',
  'Product Overview',
  'News & Insights',
]

export const workflowSteps = [
  {
    icon: 'upload',
    title: '1. Upload Precedents',
    description:
      'Securely upload case files, discovery documents, and precedents. Our system encrypts and indexes instantly.',
  },
  {
    icon: 'contradictions',
    title: '2. Identify Contradictions',
    description:
      'AI agents map semantic relationships across documents, flagging contradictions and key evidence.',
  },
  {
    icon: 'export',
    title: '3. Export Court-Ready Memos',
    description:
      'Generate citation-backed memos, timelines, and cross-examination questions ready for court.',
  },
]

export const capabilityCards = [
  {
    icon: 'search',
    title: 'Semantic Search',
    description:
      'Natural language queries mapped to specific jurisdictional case law.',
    footer: 'NLP Query Engine',
  },
  {
    icon: 'timeline',
    title: 'Case Timeline',
    description:
      'Visual chronology generation from unstructured case files.',
    footer: 'Auto-Chronology',
  },
  {
    icon: 'facts',
    title: 'Facts Extraction',
    description:
      'Isolate disputable and indisputable facts from deposition transcripts.',
    footer: 'Entity Recognition',
  },
  {
    icon: 'strategy',
    title: 'Strategy Engine',
    description:
      'Simulate opposing counsel arguments and identify logical weaknesses.',
    footer: 'Adversarial AI',
  },
]

export const timelineItems = [
  {
    date: 'NOV 12, 2023',
    title: 'Initial Deposition Record',
    summary: 'Defendant claims no knowledge of transaction #8932, but bank records indicate sign-off.',
    badge: 'CONTRADICTION DETECTED',
  },
  {
    date: 'DEC 04, 2023',
    title: 'Internal Email Thread',
    summary: 'Subject: "We transferred 850K to ARPAQX". Sender: J. Doe.',
    badge: 'EVIDENCE #2',
  },
  {
    date: 'JAN 15, 2024',
    title: 'Deposition Transcript',
    summary: 'Page 41, Line 12: "I never saw that email."',
    badge: '',
  },
]

export const architecturePoints = [
  {
    title: 'Unmatched Speed & Insight',
    description:
      "Query processing under 100ms. Ask Fides delivers insight that's not only fast but grounded, verifiable and trusted by top firms.",
  },
  {
    title: 'Rigorous Reasoning',
    description:
      'Every result is rooted in rigorous reasoning and refined for real-world decision-making. We show the work, not just the answer.',
  },
]

export const mobileAlerts = [
  {
    label: 'ALERT: HIGH PRIORITY',
    time: '2m ago',
    title: 'New ruling in Smith v. Jones impacts your active case #492 argument strategy.',
    variant: 'alert',
  },
  {
    label: 'ANALYSIS COMPLETE',
    time: '15m ago',
    title: 'Deposition summary for Witness A ready for review.',
    variant: 'success',
  },
  {
    label: 'WATCHLIST UPDATE',
    time: '1h ago',
    title: '3 new citations found matching "constructive dismissal" in NY jurisdiction.',
    variant: 'info',
  },
]

export const mobileFeatureBullets = [
  'Global Case Database',
  'Real-time Watchlist Alerts',
]

export const reclaimCards = [
  {
    icon: 'solo',
    type: 'TYPE_01',
    title: 'Solo Practitioners',
    description: 'Scale practice operations instantly without scaling overhead costs.',
  },
  {
    icon: 'firm',
    type: 'TYPE_02',
    title: 'Law Firms',
    description: 'Enhance associate productivity and standardize output quality.',
  },
  {
    icon: 'inhouse',
    type: 'TYPE_03',
    title: 'In-House Legal',
    description: 'Reduce external spend and improve internal turnaround times.',
  },
  {
    icon: 'judge',
    type: 'TYPE_04',
    title: 'Judges & Clerks',
    description: 'Accelerate case review processes and streamline opinion drafting.',
  },
]

export const latestIntelligenceArticles = [
  {
    category: 'ANALYSIS',
    date: 'Oct 12, 2025',
    title: 'Digital Shifts in Family Law: 5 Trends Defining Justice',
    description: 'Exploring the impact of digital transformation on family court proceedings.',
    imageStyle: 'shifts',
  },
  {
    category: 'SECURITY',
    date: 'Sep 28, 2025',
    title: 'Cybersecurity and Data Privacy in Legal AI',
    description: 'Protecting client privilege while leveraging large language models effectively.',
    imageStyle: 'cyber',
  },
  {
    category: 'FUTURE',
    date: 'Sep 15, 2025',
    title: 'The Future of AI in 2025: 8 Trends That Will Shape Intelligence',
    description: 'Predictive analytics and the next generation of legal tech software.',
    imageStyle: 'future',
  },
]
