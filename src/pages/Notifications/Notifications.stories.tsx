import { Notification } from "./index";
import { NotificationHeader } from "./NotificationHeader";
import { NotificationCard } from "./NotificationCard";

export default {
  title: "Pages/Notifications",
  component: Notification,
};

export const Default = () => (
  <div style={{ padding: "10px" }}>
    <NotificationHeader />
    <NotificationCard />
  </div>
);



