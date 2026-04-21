import { ArrowRight, ExternalLink } from 'lucide-react'

import { latestIntelligenceArticles } from '@/components/ask-fides/constants'

function ArticleThumbnail({ variant }) {
  if (variant === 'future') {
    return (
      <div className="relative h-[142px] rounded-[6px] border border-[rgba(34,71,126,0.75)] bg-[radial-gradient(circle_at_60%_10%,rgba(168,187,224,0.45),transparent_35%),linear-gradient(120deg,#0a1b34,#0f2a52_55%,#0a1b34)]">
        <div className="absolute inset-y-0 left-1/2 w-px bg-[rgba(129,156,204,0.35)]" />
        <div className="absolute right-3 top-3 inline-flex h-5 w-5 items-center justify-center rounded border border-[rgba(112,143,196,0.55)] bg-[rgba(8,23,46,0.75)] text-[#c2d4f6]">
          <ExternalLink size={11} />
        </div>
      </div>
    )
  }

  if (variant === 'cyber') {
    return (
      <div className="relative h-[142px] rounded-[6px] border border-[rgba(34,71,126,0.75)] bg-[linear-gradient(140deg,#5f6876,#7b838f_50%,#646d79)]">
        <div className="absolute right-3 top-3 inline-flex h-5 w-5 items-center justify-center rounded border border-[rgba(112,143,196,0.55)] bg-[rgba(8,23,46,0.75)] text-[#c2d4f6]">
          <ExternalLink size={11} />
        </div>
      </div>
    )
  }

  return (
    <div className="relative h-[142px] rounded-[6px] border border-[rgba(34,71,126,0.75)] bg-[radial-gradient(circle_at_45%_35%,rgba(255,255,255,0.16),transparent_55%),linear-gradient(125deg,#4e5562,#606873_60%,#4e5562)]">
      <div className="absolute right-3 top-3 inline-flex h-5 w-5 items-center justify-center rounded border border-[rgba(112,143,196,0.55)] bg-[rgba(8,23,46,0.75)] text-[#c2d4f6]">
        <ExternalLink size={11} />
      </div>
    </div>
  )
}

function ArticleCard({ article }) {
  return (
    <article className="group flex h-full flex-col">
      <ArticleThumbnail variant={article.imageStyle} />
      <div className="mt-4 flex items-center gap-2 text-[11px]">
        <span className="font-semibold tracking-[0.35px] text-[#2f88ff]">{article.category}</span>
        <span className="text-[#5f75a0]">•</span>
        <span className="text-[#7e92b8]">{article.date}</span>
      </div>
      <h3 className="mt-2 text-2xl font-semibold leading-[1.24] text-[#ebf2ff] transition-colors duration-200 group-hover:text-[#f5f9ff] sm:text-3xl">
        {article.title}
      </h3>
      <p className="mt-3 text-[16px] leading-[1.5] text-[#96abcf]">
        {article.description}
      </p>
    </article>
  )
}

export function LatestIntelligenceSection() {
  return (
    <section className="border-b border-[rgba(27,56,104,0.45)] bg-[#071a34] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-[100px]">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col items-start justify-between gap-4 sm:gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="text-[36px] font-semibold tracking-[-0.35px] text-[#f3f7ff] sm:text-[44px] lg:text-[54px]">Latest Intelligence</h2>
            <p className="mt-4 text-[17px] leading-[1.5] text-[#b2bfd9]">
              Insights from the intersection of law and AI.
            </p>
          </div>

          <a
            href="#"
            className="inline-flex items-center gap-2 text-[18px] text-[#3894ff] transition-colors hover:text-[#66adff]"
          >
            <span>View all articles</span>
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="mt-9 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {latestIntelligenceArticles.map((article) => (
            <ArticleCard key={article.title} article={article} />
          ))}
        </div>
      </div>
    </section>
  )
}
