// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Specifications from "./Pages/Specifications";
import NewPhone from "./Pages/NewPhone";
import About from "./Pages/About";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import App from "./App"; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/specs/:id", element: <Specifications /> },
      { path: "/newphone", element: <NewPhone /> },
      { path: "/about", element: <About /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <SignUp /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
