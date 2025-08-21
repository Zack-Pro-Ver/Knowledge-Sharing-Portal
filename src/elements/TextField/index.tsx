import React, { forwardRef } from "react";
import type { TextFieldProps } from "./TextField.types";
import {
  getTextFieldStyles,
  getInputStyles,
  getLabelStyles,
  getHelperTextStyles,
  getAdornmentStyles,
} from "./TextField.styles";
import Label from "../Label";

const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  const {
    variant = "outlined",
    size = "medium",
    color = "primary",
    disabled = false,
    error = false,
    fullWidth = false,
    label,
    helperText,
    placeholder,
    required = false,
    startAdornment,
    endAdornment,
    className = "",
    value,
    onChange,
    type = "text",
    ...otherProps
  } = props;

  const textFieldStyles = getTextFieldStyles(
    variant,
    size,
    color,
    disabled,
    error,
    fullWidth
  );

  const inputStyles = getInputStyles(variant, size, color, disabled, error);

  const labelStyles = getLabelStyles(size, color, disabled, error);

  const helperTextStyles = getHelperTextStyles(error);
  const adornmentStyles = getAdornmentStyles(size);

  const hasLabel = label !== undefined;
  const hasHelperText = helperText !== undefined;

  return (
    <div className={`${textFieldStyles} ${className}`}>
      <div className="relative">
        {hasLabel && (
          <Label required={required} className={labelStyles}>
            {label}
          </Label>
        )}

        <div className="relative">
          {startAdornment && (
            <div
              className={`absolute left-3 top-1/2 -translate-y-1/2 ${adornmentStyles} text-gray-400`}
            >
              {startAdornment}
            </div>
          )}

          <input
            ref={ref}
            type={type}
            className={`${inputStyles} ${startAdornment ? "pl-10" : ""} ${
              endAdornment ? "pr-10" : ""
            }`}
            disabled={disabled}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            {...otherProps}
          />

          {endAdornment && (
            <div
              className={`absolute right-3 top-1/2 -translate-y-1/2 ${adornmentStyles} text-gray-400`}
            >
              {endAdornment}
            </div>
          )}
        </div>
      </div>

      {hasHelperText && <div className={helperTextStyles}>{helperText}</div>}
    </div>
  );
});

TextField.displayName = "TextField";

export default TextField;
