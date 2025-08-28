import { NotificationCard } from "../NotificationCard";

export default {
  title: "Pages/Notifications/NotificationCard",
  component: NotificationCard,
};

export const Default = () => <NotificationCard />;

export const EmptyCard = () => (
  <div className="p-6 bg-gray-50 rounded-lg">
    <p className="text-gray-500 text-sm text-center">No notifications</p>
  </div>
);
