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
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import AuthProviders from "./Providers/AuthProviders/AuthProviders";

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
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <Signup></Signup>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>
);
