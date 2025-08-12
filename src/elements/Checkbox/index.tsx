import React, { forwardRef } from "react";
import type { CheckboxProps } from "./Checkbox.types";
import {
  getCheckboxStyles,
  getCheckIconStyles,
  getLabelStyles,
  getIndeterminateStyles,
} from "./Checkbox.styles";

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const {
    checkboxSize = "medium",
    color = "primary",
    disabled = false,
    checked = false,
    indeterminate = false,
    label,
    labelPlacement = "end",
    required = false,
    className = "",
    onChange,
    ...otherProps
  } = props;

  const checkboxStyles = getCheckboxStyles(
    checkboxSize,
    color,
    disabled,
    checked || indeterminate
  );
  const labelStyles = getLabelStyles(labelPlacement);
  const indeterminateStyles = getIndeterminateStyles();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <label className={`${labelStyles} ${className}`}>
      <input
        ref={ref}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        required={required}
        onChange={handleChange}
        className="sr-only"
        {...otherProps}
      />

      <div className={checkboxStyles}>
        {checked && !indeterminate && (
          <svg
            className="w-5 h-5 text-white drop-shadow-md"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}

        {indeterminate && (
          <div className={`${indeterminateStyles} text-white flex items-center justify-center drop-shadow-md`}>
            <div className="w-3/4 h-0.5 bg-white rounded"></div>
          </div>
        )}
      </div>

      {label && (
        <span
          className={`text-sm ${disabled ? "text-gray-400" : "text-gray-700"}`}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </span>
      )}
    </label>
  );
});

Checkbox.displayName = "Checkbox";

export default Checkbox;
