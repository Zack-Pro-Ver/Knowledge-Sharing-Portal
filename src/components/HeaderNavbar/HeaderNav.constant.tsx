// headernav/header.constants.ts
import type { DropdownOption } from "../../elements/Dropdown/Dropdown.types";

export const HeaderConstants = {
  // Logo
  logo: {
    src: "https://navadhiti.com/static/logo-3cdf1dd56e7f958a1df40935db67c424.svg",
    alt: "Navadhiti Logo",
    title: "Dashboard",
    href: "/overview",
  },

  // Notifications
  notifications: [
    { label: "Your question received a new answer", action: "notification" },
    { label: "Your answer was accepted", action: "notification" },
    { label: "New badge earned: Helpful Contributor", action: "notification" },
    { label: "Someone commented on your answer", action: "notification" },
  ],

  // User Menu Options
  userMenuOptions: [
    { label: "View Profile", value: "profile", icon: "ri-user-line" },
    { label: "Settings", value: "settings", icon: "ri-settings-3-line" },
    { label: "Logout", value: "logout", icon: "ri-logout-box-r-line" },
  ] as DropdownOption[],

  // Avatar
  avatar: {
    initials: "JD",
    name: "John Doe",
    backgroundColor: "#8E6EF4",
    textColor: "#FFFFFF",
  },
};
