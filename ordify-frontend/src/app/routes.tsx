import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import DemoPage from "../demo/DemoPage";
import { darkstoreRoutes } from "../features/darkstore/darkstore.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <DemoPage /> },
      ...darkstoreRoutes,
    ],
  },
]);

export default router;
