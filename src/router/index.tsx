import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '@/components/layout/LayoutWrapper'
import { url } from '@/constants/routes'
import { Home } from '@/pages/Home'
import { NotFound } from '@/pages/NotFound'
import { Request } from '@/pages/Request'

export const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        {
          path: url.index,
          element: <Home />,
        },
        {
          path: url.form,
          element: <Request />,
        },
        {
          path: url.notFound,
          element: <NotFound />,
        },
      ],
    },
  ],
  {
    basename: url.base,
  },
)
