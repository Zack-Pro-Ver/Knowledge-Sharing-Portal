import React, { forwardRef } from "react";
import type { StackProps } from "./Stack.types";
import { getStackStyles } from "./Stack.styles";

const Stack = forwardRef<HTMLDivElement, StackProps>((props, ref) => {
  const {
    direction = "column",
    spacing = 2,
    alignItems,
    justifyContent,
    wrap = "nowrap",
    divider,
    children,
    component,
    className = "",
    sx,
    ...otherProps
  } = props;

  const Component = component || "div";

  const stackStyles = getStackStyles(
    direction,
    spacing,
    alignItems,
    justifyContent,
    wrap
  );

  const combinedStyles = {
    ...sx,
  };

  return (
    <Component
      ref={ref}
      className={`${stackStyles} ${className}`}
      style={combinedStyles}
      {...otherProps}
    >
      {children}
    </Component>
  );
});

Stack.displayName = "Stack";

export default Stack;
