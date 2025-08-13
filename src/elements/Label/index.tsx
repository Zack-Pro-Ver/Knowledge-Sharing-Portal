import React, { forwardRef } from "react";
import type { LabelProps } from "./Label.types";
import { getLabelStyles, getAsteriskStyles } from "./Label.styles";

const Label = forwardRef<HTMLLabelElement, LabelProps>((props, ref) => {
  const {
    variant = "default",
    size = "medium",
    color = "primary",
    disabled = false,
    required = false,
    children,
    className = "",
    htmlFor,
    ...otherProps
  } = props;

  const labelStyles = getLabelStyles(variant, size, color, disabled, required);

  const asteriskStyles = getAsteriskStyles(color, disabled);

  return (
    <label
      ref={ref}
      className={`${labelStyles} ${className}`}
      htmlFor={htmlFor}
      {...otherProps}
    >
      {children}
      {required && <span className={asteriskStyles}>*</span>}
    </label>
  );
});

Label.displayName = "Label";

export default Label;
