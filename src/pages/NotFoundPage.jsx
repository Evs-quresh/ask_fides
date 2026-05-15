import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <section className="border-b border-[rgba(27,56,104,0.45)] bg-[#071a34] px-4 py-24 text-center sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5b8def]">404</p>
        <h1 className="mt-3 text-3xl font-semibold text-[#f3f7ff] sm:text-4xl">Page not found</h1>
        <p className="mt-4 text-[17px] leading-relaxed text-[#b2bfd9]">
          That URL does not match any page on this site. Check the address or return to the homepage.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex h-11 items-center justify-center rounded-md bg-[#3b82f6] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#2563eb]"
        >
          Go home
        </Link>
      </div>
    </section>
  )
}
