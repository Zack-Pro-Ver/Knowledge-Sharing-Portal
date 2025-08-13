import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Overview from "./pages/Overview";
import Dashboard from "./pages/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Overview />,
      },
      {
        path: "overview",
        element: <Overview />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);
