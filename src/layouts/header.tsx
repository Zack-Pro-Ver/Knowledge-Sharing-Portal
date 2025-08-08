import React from "react";
import Button from "../components/Button";
import Dropdown from "../components/Dropdown";

const HeaderLayout: React.FC = () => {
  return (
    <div className="flex items">
      <nav className="fixed top-0 z-50 w-full bg-white dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <Button
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600"
                aria-label="Open sidebar"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                />
              </Button>
              <a href="/profile" className="flex ms-2 md:me-24">
                <img
                  src="https://navadhiti.com/static/logo-3cdf1dd56e7f958a1df40935db67c424.svg"
                  className="h-8 me-3"
                  alt="navadhiti Logo"
                />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  Dashboard
                </span>
              </a>
            </div>
            <div className="flex ms-3 space-x-4 items-center">
              <a
                href="/notifications"
                className="flex text-sm bg-white-200 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-600"
              >
                <span className="sr-only">Notifications</span>
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://cdn-icons-png.flaticon.com/128/2529/2529521.png"
                  alt="Notification"
                />
              </a>
              <Dropdown
                toggle={
                  <Button className="flex text-sm bg-white-200 rounded-full p-0">
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://cdn-icons-png.flaticon.com/128/64/64572.png"
                      alt="user photo"
                    />
                  </Button>
                }
              >
                <div className="py-1">
                  <a
                    href="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    My Profile
                  </a>
                  <a
                    href="/answers"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    My Answers
                  </a>
                  <a
                    href="/login"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Login
                  </a>
                </div>
              </Dropdown>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HeaderLayout;
