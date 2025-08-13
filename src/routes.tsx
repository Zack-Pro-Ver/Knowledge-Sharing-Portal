import { createBrowserRouter } from "react-router-dom";
import Overview from "./pages/Overview/Overview";
import Badges from "./pages/Badges";
import MyAnswers from "./pages/MyAnswers";
import MyQuestions from "./pages/MyQuestions";
import MyProfile from "./pages/MyProfile";
import Notification from "./pages/Notifications";
import ContentManagement from "./pages/AdminControl/ContentManagement";
import ModerationQueue from "./pages/AdminControl/ModerationQueue";
import UserManagement from "./pages/AdminControl/UserManagement";
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
        path:"Badges",
        element: <Badges />,
      },
      {
        path:"MyAnswers",
        element: <MyAnswers />,
      },
      {
        path:"MyQuestions",
        element: <MyQuestions />,
      },
      {
        path:"MyProfile",
        element: <MyProfile />,
      },
      { 
        path:"Notifications",
        element: <Notification />,
      },
      {
        path:"AdminControl/ContentManagement",
        element: <ContentManagement />,
      },
      {
        path:"AdminControl/ModerationQueue",
        element: <ModerationQueue />,
      
      },
      {
        path:"AdminControl/UserManagement",
        element: <UserManagement />,
      },
      

      
    ],
  },
]);
