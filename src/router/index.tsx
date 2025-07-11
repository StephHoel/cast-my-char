import { createBrowserRouter } from "react-router-dom"
import { Home } from "@/pages/Home"
import { NotFound } from "@/pages/NotFound"
import { Request } from "@/pages/Request"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/form",
    element: <Request />
  },
  {
    path: "/*",
    element: <NotFound />
  }
])
