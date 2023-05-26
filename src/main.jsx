import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/Error/ErrorPage";
import MainLayout from "./pages/Layout/MainLayout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Booking from "./pages/Booking/Booking";
import Contact from "./pages/Contact/Contact";
import Services from "./pages/Services/Services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "booking",
        element: <Booking></Booking>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "services",
        element: <Services></Services>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
