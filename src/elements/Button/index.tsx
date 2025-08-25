import { forwardRef } from "react";
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

  // Get styles from your helper functions
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
      className={`${buttonStyles} ${className} relative flex items-center justify-center`}
      disabled={disabled || loading}
      onClick={onClick}
      {...otherProps}
    >
      {/* Loading spinner using Remix Icon */}
      {loading && (
        <span className={`${loadingStyles} absolute left-4`}>
          <i className={`${iconStyles} animate-spin ri-loader-4-line`}></i>
        </span>
      )}

      {/* Button content */}
      <span
        className={`${labelStyles} ${
          loading ? "opacity-0" : ""
        } flex items-center`}
      >
        {startIcon && <span className={iconStyles}>{startIcon}</span>}
        {children}
        {endIcon && <span className={iconStyles}>{endIcon}</span>}
      </span>
    </button>
  );
});

Button.displayName = "Button";

export default Button;
