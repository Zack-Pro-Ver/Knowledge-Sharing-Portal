// Header constants and configuration
export const HeaderConstants = {
  // Logo configuration
  logo: {
    src: "https://navadhiti.com/static/logo-3cdf1dd56e7f958a1df40935db67c424.svg",
    alt: "Navadhiti Logo",
    height: 8,
    width: 8,
  },
  
  // Dashboard title
  title: "Dashboard",
  
  // Notification settings
  notifications: [
    { label: "Your question received a new answer", action: "notification" },
    { label: "Your answer was accepted", action: "notification" },
    { label: "New badge earned: Helpful Contributor", action: "notification" },
    { label: "Someone commented on your answer", action: "notification" },
  ],
  
  // User menu options
  userMenuOptions: [
    {
      label: "View Profile",
      value: "profile",
      icon: "ri-user-line",
    },
    {
      label: "Settings",
      value: "settings",
      icon: "ri-settings-3-line",
    },
    {
      label: "Logout",
      value: "logout",
      icon: "ri-logout-box-r-line",
    },
  ],
  
  // Avatar configuration
  avatar: {
    backgroundColor: "#8E6EF4",
    textColor: "#fff",
    size: "small",
    variant: "circular",
  },
};
