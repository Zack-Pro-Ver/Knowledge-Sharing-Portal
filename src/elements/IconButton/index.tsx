import React, { forwardRef } from "react";
import type { IconButtonProps } from "./IconButton.types";
import { getIconButtonStyles, getIconStyles } from "./IconButton.styles";

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => {
  const {
    size = "medium",
    color = "default",
    disabled = false,
    disableFocusRipple = false,
    disableRipple = false,
    edge = false,
    children,
    variant = "text",
    className = "",
    onClick,
    ...otherProps
  } = props;

  const iconButtonStyles = getIconButtonStyles(
    variant,
    size,
    color,
    disabled,
    edge
  );

  const iconStyles = getIconStyles(size);

  return (
    <button
      ref={ref}
      className={`${iconButtonStyles} ${className}`}
      disabled={disabled}
      onClick={onClick}
      {...otherProps}
    >
      <span className={iconStyles}>
        {children}
      </span>
    </button>
  );
});

IconButton.displayName = "IconButton";

export default IconButton;
