import { css, Text } from "@realtair/ui";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import { SLIDES } from "./slides/slides";

document.body.className = css({ color: "$gray8", bg: "$gray12" })();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      ...SLIDES.map((route) => ({
        path: route.path,
        element: <Text variant="h1">{route.title}</Text>,
      })),
    ],
  },
]);

const htmlDocument = document.getElementById("root");
if (htmlDocument) {
  ReactDOM.createRoot(htmlDocument).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
