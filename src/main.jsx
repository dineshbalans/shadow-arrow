import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/LandingPage/Landing.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage/Landing.jsx";
import RootLayout from "./pages/layouts/RootLayout.jsx";
import { Provider } from "react-redux";
import store from "./store/store.jsx";
import AboutPage from "./pages/About/About.jsx";
import ServicePage from "./pages/Service/Service.jsx";
import PortfolioPage from "./pages/Portfolio/Portfolio.jsx";
import BlogPage from "./pages/Blog/Blog.jsx";
import TeamPage from "./pages/Team/Team.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "services",
        element: <ServicePage />,
      },
      {
        path: "portfolio",
        element: <PortfolioPage />,
      },
      {
        path: "blog",
        element: <BlogPage />,
      },
      {
        path: "team",
        element: <TeamPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </React.StrictMode>
);
