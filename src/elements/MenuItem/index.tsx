import React, { forwardRef } from "react";
import type { MenuItemProps } from "./MenuItem.types";
import {
  getMenuItemStyles,
  getMenuItemIconStyles,
  getMenuItemDividerStyles,
  getMenuItemContentStyles,
} from "./MenuItem.styles";

const MenuItem = forwardRef<HTMLDivElement, MenuItemProps>((props, ref) => {
  const {
    children,
    disabled = false,
    onClick,
    divider = false,
    startIcon,
    endIcon,
    variant = "text",
    size = "medium",
    color = "inherit",
    className = "",
    ...otherProps
  } = props;

  const menuItemStyles = getMenuItemStyles(variant, size, color, disabled);
  const iconStyles = getMenuItemIconStyles(size);
  const contentStyles = getMenuItemContentStyles();

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  if (divider) {
    return <div className={getMenuItemDividerStyles()} />;
  }

  return (
    <div
      ref={ref}
      className={`${menuItemStyles} ${className}`}
      role="menuitem"
      onClick={handleClick}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      {...otherProps}
    >
      <div className={contentStyles}>
        {startIcon && <span className={iconStyles}>{startIcon}</span>}
        <span className="flex-1">{children}</span>
        {endIcon && <span className={iconStyles}>{endIcon}</span>}
      </div>
    </div>
  );
});

MenuItem.displayName = "MenuItem";

export default MenuItem;
