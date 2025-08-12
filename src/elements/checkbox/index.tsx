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

  const checkboxStyles = getCheckboxStyles(checkboxSize, color, disabled, checked || indeterminate);
  const checkIconStyles = getCheckIconStyles(checkboxSize);
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
            className={`${checkIconStyles} text-white`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
        
        {indeterminate && (
          <svg
            className={`${checkIconStyles} text-white`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        )}
      </div>
      
      {label && (
        <span className={`text-sm ${disabled ? "text-gray-400" : "text-gray-700"}`}>
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </span>
      )}
    </label>
  );
});

Checkbox.displayName = "Checkbox";

export default Checkbox;
