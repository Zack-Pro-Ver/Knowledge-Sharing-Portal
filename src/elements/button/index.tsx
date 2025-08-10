import React, { forwardRef } from "react";
import type { ButtonProps } from "./Button.types";
import {
  getButtonStyles,
  getIconStyles,
  getLabelStyles,
  getLoadingStyles,
} from "./Button.styles";

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    variant = "contained",
    size = "medium",
    color = "primary",
    disabled = false,
    loading = false,
    fullWidth = false,
    startIcon,
    endIcon,
    disableElevation = false,
    disableRipple = false,
    children,
    className = "",
    onClick,
    ...otherProps
  } = props;

  const buttonStyles = getButtonStyles(
    variant,
    size,
    color,
    disabled,
    fullWidth,
    disableElevation
  );

  const iconStyles = getIconStyles(size);
  const labelStyles = getLabelStyles();
  const loadingStyles = getLoadingStyles();

  return (
    <button
      ref={ref}
      className={`${buttonStyles} ${className}`}
      disabled={disabled || loading}
      onClick={onClick}
      {...otherProps}
    >
      {loading && (
        <span className={loadingStyles}>
          <svg
            className={`${iconStyles} animate-spin`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </span>
      )}

      <span className={`${labelStyles} ${loading ? "opacity-0" : ""}`}>
        {startIcon && <span className={iconStyles}>{startIcon}</span>}
        {children}
        {endIcon && <span className={iconStyles}>{endIcon}</span>}
      </span>
    </button>
  );
});

Button.displayName = "Button";

export default Button;
