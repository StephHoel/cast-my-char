import { Layout } from "@/components/layout/LayoutWrapper"
import { Home } from "@/pages/Home"
import { NotFound } from "@/pages/NotFound"
import { Request } from "@/pages/Request"
import { createBrowserRouter } from "react-router-dom"

export const router = createBrowserRouter(
  [
    {
      element: <Layout />, // aplica o layout a todas as rotas filhas
      children: [
        {
          path: "",
          element: <Home />
        },
        {
          path: "form",
          element: <Request />
        },
        {
          path: "*",
          element: <NotFound />
        }
      ],
    }
  ],
  {
    basename: '/cast-my-char', // IMPORTANTE para GitHub Pages
  }
)
