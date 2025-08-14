import { createBrowserRouter } from "react-router-dom";
import { Overview } from "./pages/Overview";
import { Badges } from "./pages/Badges";
import { MyAnswers } from "./pages/MyAnswers";
import { MyQuestions } from "./pages/MyQuestions";
import { MyProfile } from "./pages/MyProfile";
import { Notification } from "./pages/Notifications";
import { ContentManagement } from "./pages/AdminControl/ContentManagement";
import { ModerationQueue } from "./pages/AdminControl/ModerationQueue";
import { UserManagement } from "./pages/AdminControl/UserManagement";
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
        path: "admin-control/content-management",
        element: <ContentManagement />,
      },
      {
        path: "admin-control/moderation-queue",
        element: <ModerationQueue />,
      },
      {
        path: "admin-control/user-management",
        element: <UserManagement />,
      },
    ],
  },
]);
