import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./index.css";
import { HomeWithEffect, HomeWithSuspense } from "./components/Home";

let router = createBrowserRouter([
  {
    path: "/",
    Component() {
      return <HomeWithSuspense />
    },
  },
  {
    path: "/effect",
    Component() {
      return <HomeWithEffect />
    }
  }
]);

export default function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}