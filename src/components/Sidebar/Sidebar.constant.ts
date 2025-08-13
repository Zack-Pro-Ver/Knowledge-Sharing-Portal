import {
  RiUserLine,
  RiDashboardLine,
  RiQuestionLine,
  RiChat1Line,
  RiMedalLine,
  RiNotificationLine,
  RiSettingsLine,
} from "@remixicon/react";

export const SideBarContents = [
  {
    title: "Overview",
    icon: RiDashboardLine,
  },
  {
    title: "My Profile",
    icon: RiUserLine,
  },
  {
    title: "My Questions",
    icon: RiQuestionLine,
    length: 8,
  },
  {
    title: "My Answers",
    icon: RiChat1Line,
    length: 7,
  },
  {
    title: "Badges",
    icon: RiMedalLine,
    length: 9,
  },
  {
    title: "Notifications",
    icon: RiNotificationLine,
    length: 0,
  },
  {
    title: "Settings",
    icon: RiSettingsLine,
  },
];
