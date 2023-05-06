import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./index.css";
import { HomeWithEffect, HomeWithEffect2, HomeWithSuspense, HomeWithSuspense2 } from "./components/Home";

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
  },
  {
    path: "/suspense2",
    Component() {
      return <HomeWithSuspense2 />
    }
  },
  {
    path: "/effect2",
    Component() {
      return <HomeWithEffect2 />
    }
  },
]);

export default function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}