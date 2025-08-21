import React, { forwardRef } from "react";
import type { MenuProps } from "./Menu.types";

const Menu = forwardRef<HTMLDivElement, MenuProps>((props, ref) => {
  const {
    open,
    position = "bottom-left",
    children,
    className = "",
    ...otherProps
  } = props;

  // Simplified styles - removed unused parameters
  const getMenuStyles = (position: string) => {
    const baseStyles = "absolute z-50 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none";
    
    const positionStyles = {
      "bottom-left": "left-0 origin-top-left",
      "bottom-right": "right-0 origin-top-right",
      "top-left": "left-0 bottom-full mb-2 origin-bottom-left",
      "top-right": "right-0 bottom-full mb-2 origin-bottom-right",
    };

    return `${baseStyles} ${positionStyles[position as keyof typeof positionStyles] || positionStyles["bottom-left"]}`;
  };

  if (!open) return null;

  return (
    <div
      ref={ref}
      className={`${getMenuStyles(position)} ${className}`}
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      {...otherProps}
    >
      <div className="py-1" role="none">
        {children}
      </div>
    </div>
  );
});

Menu.displayName = "Menu";

export default Menu;
