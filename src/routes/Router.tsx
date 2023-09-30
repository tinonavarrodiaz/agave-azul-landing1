import { createBrowserRouter } from "react-router-dom";
import Home from "../components/pages/Home";
import PublicTemplate from "../components/templates/public/publicTemplate";
// import PublicTemplate from "../components/templates/public/PublicTemplate";
export const Router = createBrowserRouter([
  {
    path: '/',
    element: <PublicTemplate />,
    children: [
      {
        index: true,
        element: <Home />
      },
    ]
  }
])
