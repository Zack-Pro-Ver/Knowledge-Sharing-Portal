import React from "react";
import Dropdown from "../elements/IconDropdown";
import { BellIcon, ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";

const IconDropdownRef = () => {
  const iconWithNameItems = [
    {
      label: "Logout",
      icon: <ArrowRightOnRectangleIcon className="w-5 h-5" />,
      onClick: () => alert("Logout clicked"),
    },
    {
      label: "Settings",
      icon: <BellIcon className="w-5 h-5" />,
      onClick: () => alert("Settings clicked"),
    },
  ];

  const notificationItems = [
    {
      label: "Notifications",
      icon: <BellIcon className="w-6 h-6 text-gray-400" />,
      description: "Your question received a new answer",
      timestamp: "2 minutes ago",
      onClick: () => alert("Notification clicked"),
    },
    {
      label: "Badge Earned",
      icon: <BellIcon className="w-6 h-6 text-gray-400" />,
      description: "New badge earned: Helpful Contributor",
      timestamp: "3 hours ago",
      onClick: () => alert("Badge clicked"),
    },
  ];

  return (
    <>
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Icon With Name Dropdown</h2>
        <Dropdown
          buttonIcon={<BellIcon className="w-5 h-5" />}
          items={iconWithNameItems}
          variant="iconWithName"
          buttonLabel="User Menu"
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Notification Dropdown</h2>
        <Dropdown
          buttonIcon={<BellIcon className="w-5 h-5" />}
          items={notificationItems}
          variant="notification"
        />
      </section>
    </>
  );
};

export default IconDropdownRef;
