import { Outlet } from 'react-router-dom'

import { Navbar } from '@/components/ask-fides/navbar'
import { SiteFooter } from '@/components/shared/site-footer'
import { ScrollToTop } from '@/layouts/ScrollToTop'

export function SiteLayout() {
  return (
    <div className="min-h-screen bg-[#0a192f] font-sans antialiased">
      <ScrollToTop />
      <Navbar />
      <main id="main-content">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}
