import { NotificationHeader } from "./index";
import { Header } from "../../../components/Header"; 
import { RiCheckDoubleLine } from "@remixicon/react";

export default {
  title: "Pages/Notifications/NotificationHeader",
  component: NotificationHeader,
};

export const Default = () => (
  <Header
    title="Notification"
    description="Stay updated with your Q&A activity"
    showButton={true}
    buttonText="Mark All as Read"
    icon={<RiCheckDoubleLine className="absolute left-4 text-white w-5 h-5" />}
  />
);

export const WithoutButton = () => (
  <Header
    title="Notification"
    description="Stay updated with your Q&A activity"
    showButton={false}
  />
);


