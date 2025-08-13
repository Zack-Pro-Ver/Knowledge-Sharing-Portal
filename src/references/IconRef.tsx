import { useState } from "react";
import Icon from "../elements/Icon";

const IconRef = () => {
  const [selectedIcon, setSelectedIcon] = useState<string>("home");

  const handleIconClick = (iconName: string) => {
    setSelectedIcon(iconName);
    console.log(`Clicked icon: ${iconName}`);
  };

  return (
    <>
      {/* Icon Sizes */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Icon Sizes</h2>
        <div className="flex items-center gap-4">
          <Icon size="small">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </Icon>
          <Icon size="medium">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </Icon>
          <Icon size="large">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </Icon>
        </div>
      </section>

      {/* Icon Colors */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Icon Colors
        </h2>
        <div className="flex items-center gap-4">
          <Icon color="primary">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </Icon>
          <Icon color="secondary">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </Icon>
          <Icon color="error">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </Icon>
          <Icon color="warning">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </Icon>
          <Icon color="success">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </Icon>
          <Icon color="disabled">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </Icon>
        </div>
      </section>

      {/* Common Icons */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Common Icons
        </h2>
        <div className="grid grid-cols-6 gap-4">
          {/* Home Icon */}
          <div className="flex flex-col items-center gap-2">
            <Icon onClick={() => handleIconClick("home")}>
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </Icon>
            <span className="text-xs text-gray-600">Home</span>
          </div>

          {/* Settings Icon */}
          <div className="flex flex-col items-center gap-2">
            <Icon onClick={() => handleIconClick("settings")}>
              <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" />
            </Icon>
            <span className="text-xs text-gray-600">Settings</span>
          </div>

          {/* Search Icon */}
          <div className="flex flex-col items-center gap-2">
            <Icon onClick={() => handleIconClick("search")}>
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </Icon>
            <span className="text-xs text-gray-600">Search</span>
          </div>

          {/* User Icon */}
          <div className="flex flex-col items-center gap-2">
            <Icon onClick={() => handleIconClick("user")}>
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </Icon>
            <span className="text-xs text-gray-600">User</span>
          </div>

          {/* Heart Icon */}
          <div className="flex flex-col items-center gap-2">
            <Icon onClick={() => handleIconClick("heart")}>
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </Icon>
            <span className="text-xs text-gray-600">Heart</span>
          </div>

          {/* Delete Icon */}
          <div className="flex flex-col items-center gap-2">
            <Icon onClick={() => handleIconClick("delete")}>
              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
            </Icon>
            <span className="text-xs text-gray-600">Delete</span>
          </div>

          {/* Edit Icon */}
          <div className="flex flex-col items-center gap-2">
            <Icon onClick={() => handleIconClick("edit")}>
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
            </Icon>
            <span className="text-xs text-gray-600">Edit</span>
          </div>
        </div>
      </section>

      {/* Interactive Icons */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Interactive Icons
        </h2>
        <div className="flex items-center gap-4">
          <Icon
            color="primary"
            className="cursor-pointer hover:scale-110"
            onClick={() => handleIconClick("interactive")}
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
          </Icon>
          <span className="text-sm text-gray-600">
            Selected: {selectedIcon}
          </span>
        </div>
      </section>
    </>
  );
};

export default IconRef;
