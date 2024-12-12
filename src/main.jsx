import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Docs from "./Docs.jsx";
import ToDo from "./ToDo.jsx";
import About from "./About.jsx";
import Help from "./Help.jsx";
import SignUp from "./SignUp.jsx";

const connector = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "docs",
    element: <Docs />,
  },
  {
    path: "todo",
    element: <ToDo />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "help",
    element: <Help />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={connector} />
  </StrictMode>
);
