import {
  RiUserLine,
  RiDashboardLine,
  RiQuestionLine,
  RiChat1Line,
  RiMedalLine,
  RiNotificationLine,
  RiSettingsLine,
  type RemixiconComponentType,
  RiShieldCheckLine,
  RiFileTextLine,
  RiUserSettingsLine,
} from "@remixicon/react";
import type { DropdownOption } from "../../elements/Dropdown/Dropdown.types";

export const SideBarContents: {
  title: string;
  icon: RemixiconComponentType;
  length?: number;
  path: string;
  variant: "link" | "dropdown";
  options?: DropdownOption[];
}[] = [
  {
    title: "Overview",
    icon: RiDashboardLine,
    path: "overview",
    variant: "link",
  },
  {
    title: "My Profile",
    icon: RiUserLine,
    path: "my-profile",
    variant: "link",
  },
  {
    title: "My Questions",
    icon: RiQuestionLine,
    length: 8,
    path: "my-questions",
    variant: "link",
  },
  {
    title: "My Answers",
    icon: RiChat1Line,
    length: 7,
    path: "my-answers",
    variant: "link",
  },
  {
    title: "Badges",
    icon: RiMedalLine,
    length: 9,
    path: "badges",
    variant: "link",
  },
  {
    title: "Notifications",
    icon: RiNotificationLine,
    length: 0,
    path: "notifications",
    variant: "link",
  },
  {
    title: "Admin Control",
    icon: RiSettingsLine,
    path: "admin-control",
    variant: "dropdown",
  },
];

export const sidebarOptions: DropdownOption[] = [
  {
    label: "Content Management",
    Icon: RiFileTextLine,
    value: "content-management",
  },
  {
    label: "Moderation Queue",
    Icon: RiShieldCheckLine,
    value: "moderation-queue",
  },
  {
    label: "User Management",
    Icon: RiUserSettingsLine,
    value: "user-management",
  },
];
