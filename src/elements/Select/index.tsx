import React, { forwardRef } from "react";
import type { SelectProps } from "./Select.types";
import {
  getSelectStyles,
  getLabelStyles,
  getHelperTextStyles,
  getErrorHelperTextStyles,
  getIconStyles,
  getWrapperStyles,
  getIconWrapperStyles,
} from "./Select.styles";
import Typography from "../Typography";
import Stack from "../Stack";
import { RiArrowDownSLine } from "@remixicon/react";

const Select = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
  const {
    variant = "outlined",
    size = "medium",
    color = "primary",
    label,
    helperText,
    error = false,
    disabled = false,
    fullWidth = false,
    required = false,
    options = [],
    placeholder,
    startIcon,
    endIcon,
    children,
    className = "",
    onChange,
    ...otherProps
  } = props;

  const selectStyles = getSelectStyles(
    variant,
    size,
    color,
    error,
    disabled,
    fullWidth
  );

  const labelStyles = getLabelStyles();
  const helperTextStyles = error ? getErrorHelperTextStyles() : getHelperTextStyles();
  const iconStyles = getIconStyles(size);
  const wrapperStyles = getWrapperStyles();
  const iconWrapperStyles = getIconWrapperStyles();

  return (
    <Stack direction="column" spacing={1} className={wrapperStyles}>
      {label && (
        <Typography
          variant="body2"
          component="label"
          className={labelStyles}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </Typography>
      )}

      <div className="relative">
        <select
          ref={ref}
          className={`${selectStyles} ${className}`}
          disabled={disabled}
          required={required}
          onChange={onChange}
          {...otherProps}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
          {children}
        </select>

        <div className={iconWrapperStyles}>
          {endIcon || <RiArrowDownSLine className={iconStyles} />}
        </div>
      </div>

      {helperText && (
        <Typography
          variant="caption"
          className={helperTextStyles}
        >
          {helperText}
        </Typography>
      )}
    </Stack>
  );
});

Select.displayName = "Select";

export default Select;
