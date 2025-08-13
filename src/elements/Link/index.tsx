import React, { forwardRef } from "react";
import type { LinkProps } from "./Link.types";
import { getLinkStyles, getIconStyles } from "./Link.styles";

const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const {
    variant = "default",
    size = "medium",
    underline = "hover",
    disabled = false,
    children,
    className = "",
    href,
    target,
    rel,
    onClick,
    ...otherProps
  } = props;

  const linkStyles = getLinkStyles(variant, size, underline, disabled);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (disabled) {
      event.preventDefault();
      return;
    }
    onClick?.(event);
  };

  return (
    <a
      ref={ref}
      href={disabled ? undefined : href}
      className={`${linkStyles} ${className}`}
      target={target}
      rel={rel || (target === "_blank" ? "noopener noreferrer" : undefined)}
      onClick={handleClick}
      aria-disabled={disabled}
      {...otherProps}
    >
      {children}
    </a>
  );
});

Link.displayName = "Link";

export default Link;
