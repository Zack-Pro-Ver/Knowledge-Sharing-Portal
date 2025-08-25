import React, { useState, useRef, useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import type { ReactNode } from "react";
import {
  getDropdownButtonStyles,
  getDropdownMenuStyles,
  getDropdownItemStyles,
} from "./IconDropdown.styles";
import type { DropdownProps } from "./IconDropdown.types";

const Dropdown: React.FC<DropdownProps> = ({
  buttonLabel,
  buttonIcon,
  items,
  variant,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`relative inline-block text-left ${className}`}
      ref={dropdownRef}
    >
      <div className={getDropdownButtonStyles()}>
        {buttonIcon && (
          <span className="mr-2 flex items-center">{buttonIcon}</span>
        )}
        {buttonLabel && <span>{buttonLabel}</span>}
        <button
          type="button"
          onClick={toggleDropdown}
          aria-haspopup="true"
          aria-expanded={isOpen}
          className="ml-2 focus:outline-none"
        >
          <ChevronDownIcon className="h-5 w-5" />
        </button>
      </div>

      {isOpen && (
        <div
          className={getDropdownMenuStyles()}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          {variant === "iconWithName" &&
            items.map((item: any, index: any) => (
              <button
                key={index}
                className={getDropdownItemStyles()}
                onClick={() => {
                  item.onClick();
                  setIsOpen(false);
                }}
                role="menuitem"
                type="button"
              >
                <span className="mr-3 flex items-center">{item.icon}</span>
                {item.label}
              </button>
            ))}

          {variant === "notification" &&
            items.map((item: any, index: any) => (
              <button
                key={index}
                className="w-full px-4 py-3 text-left hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                onClick={() => {
                  item.onClick();
                  setIsOpen(false);
                }}
                role="menuitem"
                type="button"
              >
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-900">
                    {item.label}
                  </span>
                  {item.description && (
                    <span className="text-xs text-gray-500">
                      {item.description}
                    </span>
                  )}
                  {item.timestamp && (
                    <span className="text-xs text-gray-400">
                      {item.timestamp}
                    </span>
                  )}
                </div>
              </button>
            ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
