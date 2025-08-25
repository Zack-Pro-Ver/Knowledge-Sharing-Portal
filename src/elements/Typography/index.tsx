import { forwardRef } from "react";
import type { TypographyProps } from "./Typography.types";
import { getTypographyStyles } from "./Typography.styles";

const Typography = forwardRef<HTMLElement, TypographyProps>((props, ref) => {
  const {
    variant = "body1",
    color = "textPrimary",
    align = "inherit",
    display = "initial",
    gutterBottom = false,
    noWrap = false,
    paragraph = false,
    component,
    children,
    fontWeight,
    fontStyle,
    lineHeight,
    letterSpacing,
    className = "",
    ...otherProps
  } = props;

  // Determine the component to render
  const Component =
    component || (paragraph ? "p" : getDefaultComponent(variant));

  // Get the combined styles
  const typographyStyles = getTypographyStyles(
    variant,
    color,
    align,
    display,
    gutterBottom,
    noWrap,
    paragraph,
    fontWeight,
    fontStyle,
    lineHeight,
    letterSpacing
  );

  return (
    <Component
      ref={ref}
      className={`${typographyStyles} ${className}`}
      {...otherProps}
    >
      {children}
    </Component>
  );
});

Typography.displayName = "Typography";

// Helper function to determine default component based on variant
function getDefaultComponent(variant: TypographyProps["variant"]): string {
  switch (variant) {
    case "h1":
    case "h2":
    case "h3":
    case "h4":
    case "h5":
    case "h6":
      return variant;
    case "subtitle1":
    case "subtitle2":
      return "h6";
    case "body1":
    case "body2":
      return "p";
    case "caption":
    case "overline":
      return "span";
    case "button":
      return "span";
    default:
      return "span";
  }
}

export default Typography;
