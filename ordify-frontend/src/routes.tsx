import { useRoutes } from "react-router-dom";
import App from "./app/App";
import DemoPage from "./demo/DemoPage";

export default function AppRoutes() {
  return useRoutes([
    { path: "/", element: <App/> },
    { path: "/home", element: <App /> },
    { path: "/demo", element: <DemoPage /> },
  ]);
}
