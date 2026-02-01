// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// // import { AppRoutes } from "./index";
// import "bootstrap/dist/css/bootstrap.min.css";


// import { BrowserRouter } from 'react-router-dom'

// createRoot(document.getElementById('root') as HTMLElement).render(
//   <StrictMode>
//     RouterProvider router={router} />
//   </StrictMode>,
// )

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { router } from "./app/routes";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
