import React, { forwardRef } from "react";
import type { AvatarProps } from "./Avatar.types";
import {
  getAvatarStyles,
  getImageStyles,
  getFallbackStyles,
} from "./Avatar.styles";

const Avatar = forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  const {
    src,
    alt,
    size = "medium",
    variant = "circular",
    children,
    className = "",
    onClick,
    backgroundColor,
    textColor,
    ...otherProps
  } = props;

  const avatarStyles = getAvatarStyles(
    size,
    variant,
    !!src,
    backgroundColor,
    textColor
  );
  const imageStyles = getImageStyles();
  const fallbackStyles = getFallbackStyles();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  // Create inline styles for custom colors
  const inlineStyles: React.CSSProperties = {};
  if (backgroundColor && !backgroundColor.startsWith("bg-")) {
    inlineStyles.backgroundColor = backgroundColor;
  }
  if (textColor && !textColor.startsWith("text-")) {
    inlineStyles.color = textColor;
  }

  return (
    <div
      ref={ref}
      className={`${avatarStyles} ${className}`}
      onClick={handleClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      style={inlineStyles}
      {...otherProps}
    >
      {src ? (
        <img
          src={src}
          alt={alt || "Avatar"}
          className={imageStyles}
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      ) : (
        <div className={fallbackStyles}>
          {children || (
            <svg
              className="w-1/2 h-1/2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
      )}
    </div>
  );
});

Avatar.displayName = "Avatar";

export default Avatar;
