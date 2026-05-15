import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { SiteLayout } from '@/layouts/SiteLayout'
import { CookiePolicyPage } from '@/pages/CookiePolicyPage'
import { ForPractitionersPage } from '@/pages/ForPractitionersPage'
import { HomePage } from '@/pages/HomePage'
import { MarketingPage } from '@/pages/MarketingPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { PrivacyPolicyPage } from '@/pages/PrivacyPolicyPage'
import { ProductOverviewPage } from '@/pages/ProductOverviewPage'
import { SecurityTrustFigmaPage } from '@/pages/SecurityTrustFigmaPage'
import { marketingRoutes } from '@/routes/marketing-routes'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="security" element={<SecurityTrustFigmaPage />} />
          <Route path="security-trust" element={<Navigate to="/security" replace />} />
          <Route path="privacy" element={<PrivacyPolicyPage />} />
          <Route path="cookies" element={<CookiePolicyPage />} />
          <Route path="for-practitioners" element={<ForPractitionersPage />} />
          <Route path="product" element={<ProductOverviewPage />} />
          {marketingRoutes.map(({ path, pageId }) => (
            <Route key={path} path={path} element={<MarketingPage pageId={pageId} />} />
          ))}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
