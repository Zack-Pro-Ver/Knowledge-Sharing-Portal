import { createBrowserRouter } from "react-router-dom";
import Overview from "./pages/Overview";

export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <Overview />,
      },
      {
        path: "overview",
        element: <Overview />,
      },
      
    ],
  },
]);
