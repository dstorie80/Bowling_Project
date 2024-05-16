import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";

import Home from "./pages/Home";
import Tournaments from "./pages/Tournaments";
import YouthBowling from "./pages/YouthBowling";
import LeagueBowling from "./pages/LeagueBowling";
import Recognition from "./pages/Recognition";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/tournaments",
        element: <Tournaments />,
      },
      {
        path: "/youth-bowling",
        element: <YouthBowling />,
      },
      {
        path: "/league-bowling",
        element: <LeagueBowling />,
      },
      {
        path: "/recognition",
        element: <Recognition />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
