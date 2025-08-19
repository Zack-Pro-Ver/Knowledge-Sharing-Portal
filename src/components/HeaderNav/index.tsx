import { useState } from "react";
import { IconButton, IconDropdown, Dropdown, Avatar } from "../../elements";
import "remixicon/fonts/remixicon.css";
import type { DropdownOption } from "../../elements/Dropdown/Dropdown.types";
import { HeaderConstants } from "./Header.constant";
import { useNavigate } from "react-router-dom";


export interface HeaderProps {
  // Add props as needed
}

export const Header: React.FC<HeaderProps> = () => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [userMenuValue, setUserMenuValue] = useState(null);

  const notifications = HeaderConstants.notifications;
  const userMenuOptions = HeaderConstants.userMenuOptions;

  

  // For rendering icon+label in the user Dropdown
  const renderUserOption = (option : DropdownOption) => (
    <span className="flex items-center">{option.icon}{option.label}</span>
  );

  const navigate = useNavigate();

const onUserMenuChange = (value: string | null) => {
  setUserMenuValue(null);
  if (value === "profile") {
    navigate("/profile");
  } else if (value === "settings") {
    navigate("/settings");
  } else if (value === "logout") {
    navigate("/Overview");
  }
};

  return (
    <nav className="fixed top-0 z-50 w-full dark:bg-gray-800 border-gray-200 bg-white border-b-1">
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
              <span className="self-center text-xl font-semibold sm:text-2xl dark:text-white">
                Dashboard
              </span>
            </a>
          </div>
          {/* Right Section */}
          <div className="flex items-center gap-2">
            {/* Notification bell + IconDropdown */}
            <div className="relative">
              <IconButton onClick={() => setIsNotificationOpen(!isNotificationOpen)}>
                <i className="ri-notification-3-line text-xl text-gray-900"></i>
                {/* Notification badge count */}
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-600 text-white text-xs font-semibold flex items-center justify-center">
                  2
                </span>
              </IconButton>
              <IconDropdown
                isOpen={isNotificationOpen}
                title=""
                items={}
              />
            </div>
            {/* // User Avatar + Name as Dropdown // */}
            <div className="relative min-w-[150px]">
              <Dropdown
                options={userMenuOptions}
                disableElevation
                placeholder={
                  <span className="flex items-center gap-2">
                    <Avatar
                      size="small"
                      variant="circular"
                      backgroundColor="#8E6EF4"
                      textColor="#fff"
                    >
                      JD
                    </Avatar>
                    <span className="text-base font-medium text-gray-900">
                      John Doe
                    </span>
                  </span>
                }
                value={userMenuValue}
                onChange={onUserMenuChange}
                renderOption={renderUserOption}
                className="!border-0 focus:outline-none"
                variant="text"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
