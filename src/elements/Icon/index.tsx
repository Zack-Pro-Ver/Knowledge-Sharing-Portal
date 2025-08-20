import React, { forwardRef } from "react";
import type { IconProps } from "./Icon.types";
import { getIconStyles, getBackgroundStyles } from "./Icon.styles";

const Icon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const {
    size = "medium",
    color = "inherit",
    bgColor,
    children,
    className = "",
    ...otherProps
  } = props;

  const iconStyles = getIconStyles(size, color);
  const backgroundStyles = getBackgroundStyles(bgColor);

  if (bgColor) {
    return (
      <div
        className={`${backgroundStyles} ${className}`}
        style={{ backgroundColor: bgColor }}
      >
        <svg
          ref={ref}
          className={`${iconStyles}`}
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          {...otherProps}
        >
          {children}
        </svg>
      </div>
    );
  }

  return (
    <svg
      ref={ref}
      className={`${iconStyles} ${className}`}
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      {children}
    </svg>
  );
});

Icon.displayName = "Icon";

export default Icon;
