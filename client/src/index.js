import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Specifications from "./Pages/Specifications";
import NewPhone from "./Pages/NewPhone";
import Discover from "./Pages/Discover";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import App from "./App"; 
import Admin from "./Pages/Admin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/specs/:id", element: <Specifications /> },
      { path: "/newphone", element: <NewPhone /> },
      { path: "/discover", element: <Discover /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/admin", element: <Admin />}
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
