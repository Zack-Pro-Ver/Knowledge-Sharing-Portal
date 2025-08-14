import { createBrowserRouter, Navigate } from "react-router-dom";
import { Overview } from "./pages/Overview";
import { Badges } from "./pages/Badges";
import { MyAnswers } from "./pages/MyAnswers";
import { MyQuestions } from "./pages/MyQuestions";
import { MyProfile } from "./pages/MyProfile";
import { Notification } from "./pages/Notifications";
import { ContentManagement } from "./pages/AdminControl/ContentManagement";
import { ModerationQueue } from "./pages/AdminControl/ModerationQueue";
import { UserManagement } from "./pages/AdminControl/UserManagement";
import Sidebar from "./components/Sidebar";
import MainLayout from "./layouts/MainLayout";
import { useNavigate } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="overview" />,
      },
      {
        path: "overview",
        element: <Overview />,
      },
      {
        path: "badges",
        element: <Badges />,
      },
      {
        path: "my-answers",
        element: <MyAnswers />,
      },
      {
        path: "my-questions",
        element: <MyQuestions />,
      },
      {
        path: "my-profile",
        element: <MyProfile />,
      },
      {
        path: "notifications",
        element: <Notification />,
      },
      {
        path: "admin-control",
        children: [
          {
            index: true,
            element: <Navigate to="content-management" />,
          },
          {
            path: "content-management",
            element: <ContentManagement />,
          },
          {
            path: "moderation-queue",
            element: <ModerationQueue />,
          },
          {
            path: "user-management",
            element: <UserManagement />,
          },
        ],
      },
    ],
  },
]);
