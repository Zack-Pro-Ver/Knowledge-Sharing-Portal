import { useState } from "react";
import { IconButton, IconDropdown, Avatar } from "../../elements";
import "remixicon/fonts/remixicon.css";

function Header() {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  // Notification items (no icons needed, just text)
  const notifications = [
    { label: "Your question received a new answer", action: () => console.log("Notification clicked") },
    { label: "Your answer was accepted", action: () => console.log("Notification clicked") },
    { label: "New badge earned: Helpful Contributor", action: () => console.log("Notification clicked") },
    { label: "Someone commented on your answer", action: () => console.log("Notification clicked") },
  ];

  // User menu options, now with icons (Remixicon)
  const userOptions = [
    { label: "View Profile", icon: <i className="ri-user-line mr-2" />, action: () => console.log("View Profile") },
    { label: "Settings", icon: <i className="ri-settings-3-line mr-2" />, action: () => console.log("Settings") },
    { label: "Logout", icon: <i className="ri-logout-box-r-line mr-2" />, action: () => console.log("Logout") },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full bg-white dark:bg-gray-800 dark:border-gray-700">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          {/* Left Section */}
          <div className="flex items-center">
            <a href="/overview" className="flex ms-2 md:me-24">
              <img
                src="https://navadhiti.com/static/logo-3cdf1dd56e7f958a1df40935db67c424.svg"
                className="h-8 me-3"
                alt="Navadhiti Logo"
              />
              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                Dashboard
              </span>
            </a>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2">
            {/* Notification Icon + Dropdown */}
            <div className="relative">
              <IconButton onClick={() => setIsNotificationOpen(!isNotificationOpen)}>
                <i className="ri-notification-3-line text-xl text-gray-900"></i>
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-600 text-white text-xs font-semibold flex items-center justify-center">
                  2
                </span>
              </IconButton>
              <IconDropdown
                isOpen={isNotificationOpen}
                onClose={() => setIsNotificationOpen(false)}
                title="Notifications"
                items={notifications}
                variant="notification"
              />
            </div>
            {/* User Avatar + Name as button + Dropdown */}
            <div className="relative">
              <button
                className="flex items-center gap-2 px-2 py-1 rounded-md hover:bg-gray-100 transition"
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              >
                <Avatar
                  size="small"
                  variant="circular"
                  backgroundColor="#8E6EF4"
                  textColor="#fff"
                >
                  JD
                </Avatar>
                <span className="font-medium text-gray-900">John Doe</span>
                <i className="ri-arrow-down-s-line text-lg text-gray-500"></i>
              </button>
              <IconDropdown
                isOpen={isUserMenuOpen}
                onClose={() => setIsUserMenuOpen(false)}
                title=""
                items={userOptions}
                // Ensure IconDropdown renders the icon! See note below.
                variant="iconWithName"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
