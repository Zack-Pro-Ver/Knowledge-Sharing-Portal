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
        path:"padges",
        element: <Badges />,
      },
      {
        path:"myanswers",
        element: <MyAnswers />,
      },
      {
        path:"myquestions",
        element: <MyQuestions />,
      },
      {
        path:"myprofile",
        element: <MyProfile />,
      },
      { 
        path:"notifications",
        element: <Notification />,
      },
      {
        path:"admincontrol/contentmanagement",
        element: <ContentManagement />,
      },
      {
        path:"admincontrol/moderationqueue",
        element: <ModerationQueue />,
      
      },
      {
        path:"admincontrol/usermanagement",
        element: <UserManagement />,
      },
      

      
    ],
  },
]);
