import { Link } from 'react-router-dom'

export function MarketingBreadcrumb({ segment }) {
  return (
    <p className="text-sm font-medium text-[#5b8def]">
      <Link to="/" className="transition-colors hover:text-[#93c5fd]">
        Home
      </Link>
      <span className="mx-2 text-[#4a5f85]">/</span>
      <span className="text-[#9fb6db]">{segment}</span>
    </p>
  )
}
