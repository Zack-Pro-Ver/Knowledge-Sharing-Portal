import React, { forwardRef } from "react";
import type { IconProps } from "./Icon.types";
import { getIconStyles } from "./Icon.styles";

const Icon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const {
    size = "medium",
    color = "inherit",
    children,
    className = "",
    ...otherProps
  } = props;

  const iconStyles = getIconStyles(size, color);

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
