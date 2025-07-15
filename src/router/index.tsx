import { createBrowserRouter, Navigate } from 'react-router-dom'
import { Layout } from '@/components/layout/LayoutWrapper'
import { url } from '@/constants/routes'
import { Famous } from '@/pages/Famous/[id]'
import { Home } from '@/pages/Home'
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
          path: url.famous,
          element: <Famous />,
        },
        {
          path: url.notFound,
          element: <Navigate to={'/'} replace={true} />,
        },
      ],
    },
  ],
  {
    basename: url.base,
  },
)
