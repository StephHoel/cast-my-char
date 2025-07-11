import { Layout } from '@/components/layout/LayoutWrapper'
import { router } from '@/router'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StrictMode>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </StrictMode>
  </StrictMode>
)
