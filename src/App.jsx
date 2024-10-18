import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./screens/home/HomeScreen"
import Error from "./screens/error/ErrorScreen"
import "./assets/sass/style.scss"
import ReactGA from "react-ga4";

ReactGA.initialize("G-R73JP724JQ"); // Replace with your GA4 tracking ID

ReactGA.send("pageview"); // Send a pageview for the first load

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "*",
        element: <Error />
      }
    ]
  }
])

export default function App() {

  return (
    <RouterProvider router={router} />
  )
}

