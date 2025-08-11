import { useState } from "react";
import { Link } from "react-router-dom"; // New import
import { BellIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import IconButton from "../elements/IconButton";
import DropdownMenu, { menuItemClass } from "../elements/DropdownMenu";

function Navbar() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-white dark:bg-gray-800 dark:border-gray-700">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          {/* Left Section */}
          <div className="flex items-center">
            <Link to="/my-profile" className="flex ms-2 md:me-24">
              <img
                src="https://navadhiti.com/static/logo-3cdf1dd56e7f958a1df40935db67c424.svg"
                className="h-8 me-3"
                alt="Navadhiti Logo"
              />
              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                Dashboard
              </span>
            </Link>
          </div>

          {/* Right Section */}
          <div className="flex ms-3 space-x-4 items-center">
            <Link to="/notification">
              <IconButton
                ariaLabel="Notifications"
                className="bg-white-200 focus:ring-lime-600"
              >
                <BellIcon className="w-8 h-8 p-1 text-shadow-gray-700 text-gray-700" />
              </IconButton>
            </Link>

            <div className="relative">
              <IconButton
                ariaLabel="User menu"
                className="bg-white-200"
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              >
                <UserCircleIcon className="w-8 h-8 text-shadow-gray-700 text-gray-700" />
              </IconButton>

              <DropdownMenu isOpen={isUserMenuOpen}>
                <Link to="/my-profile" className={menuItemClass}>
                  My Profile
                </Link>
                <Link to="/my-answers" className={menuItemClass}>
                  My Answers
                </Link>
                <Link to="/login" className={menuItemClass}>
                  Login
                </Link>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
