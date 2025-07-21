import { createBrowserRouter, Navigate } from 'react-router-dom'
import { Layout } from '@/components/layout/LayoutWrapper'
import { URL_BASE, url } from '@/constants/routes'
import { Famous } from '@/pages/Famous/[id]'
import { Home } from '@/pages/Home'
import { Request } from '@/pages/Request'

export const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        {
          path: url.index.replace(URL_BASE, ''),
          element: <Home />,
        },
        {
          path: url.form.replace(URL_BASE, ''),
          element: <Request />,
        },
        {
          path: url.famous.replace(URL_BASE, ''),
          element: <Famous />,
        },
        {
          path: url.notFound.replace(URL_BASE, ''),
          element: <Navigate to={'/'} replace={true} />,
        },
      ],
    },
  ],
  {
    basename: URL_BASE,
  },
)
