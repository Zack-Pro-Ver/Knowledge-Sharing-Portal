import React, { forwardRef, useEffect, useRef } from "react";
import type { MenuProps } from "./Menu.types";
import MenuItem from "../MenuItem";

const Menu = forwardRef<HTMLDivElement, MenuProps>((props, ref) => {
  const {
    open,
    anchorEl,
    onClose,
    variant = "contained",
    size = "medium",
    color = "primary",
    disabled = false,
    position = "bottom-left",
    children,
    className = "",
    ...otherProps
  } = props;

  const menuRef = useRef<HTMLDivElement>(null);

  // Import styles dynamically based on the MenuItem component
  const getMenuStyles = (
    variant: string,
    size: string,
    color: string,
    disabled: boolean,
    position: string
  ) => {
    const baseStyles = "absolute z-50 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none";
    
    const positionStyles = {
      "bottom-left": "left-0 origin-top-left",
      "bottom-right": "right-0 origin-top-right",
      "top-left": "left-0 bottom-full mb-2 origin-bottom-left",
      "top-right": "right-0 bottom-full mb-2 origin-bottom-right",
    };

    return `${baseStyles} ${positionStyles[position as keyof typeof positionStyles] || positionStyles["bottom-left"]}`;
  };

  useEffect(() => {
    if (!open || !anchorEl || !menuRef.current) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        anchorEl &&
        !anchorEl.contains(event.target as Node)
      ) {
        onClose?.();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open, anchorEl, onClose]);

  if (!open) return null;

  return (
    <div
      ref={menuRef}
      className={`${getMenuStyles(variant, size, color, disabled, position)} ${className}`}
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
