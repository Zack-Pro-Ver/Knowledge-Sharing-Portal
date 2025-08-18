import { useState } from "react";
import { BellIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import { IconButton, IconDropdown } from "../../elements";

function Header() {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const notifications = [
    { label: "Your question received a new answer", action: () => console.log("Notification clicked") },
    { label: "Your answer was accepted", action: () => console.log("Notification clicked") },
    { label: "New badge earned: Helpful Contributor", action: () => console.log("Notification clicked") },
    { label: "Someone commented on your answer", action: () => console.log("Notification clicked") },
  ];

  const userOptions = [
    { label: "View Profile", action: () => console.log("View Profile") },
    { label: "Settings", action: () => console.log("Settings") },
    { label: "Logout", action: () => console.log("Logout") },
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
          <div className="flex items-center">
            <IconButton onClick={() => setIsNotificationOpen(!isNotificationOpen)}>
              <BellIcon className="h-6 w-5 text-gray-900" />
            </IconButton>
            <IconDropdown
              isOpen={isNotificationOpen}
              onClose={() => setIsNotificationOpen(false)}
              title="Notifications"
              items={notifications}
            />
            <IconButton onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}>
              <UserCircleIcon className="h-6 w-5 text-gray-900" />
            </IconButton>
            <IconDropdown
              isOpen={isUserMenuOpen}
              onClose={() => setIsUserMenuOpen(false)}
              title="User Menu"
              items={userOptions}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
