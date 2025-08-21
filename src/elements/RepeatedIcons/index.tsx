import React, { forwardRef } from "react";
import { RiAwardFill, RiMedalFill, RiQuestionFill, RiChat1Fill } from "@remixicon/react";
import type { IconProps } from "./Icon.types";
import Stack from "../Stack";
import Typography from "../Typography";

// Icon mapping
const iconMap = {
  award: RiAwardFill,
  medal: RiMedalFill,
  chat: RiChat1Fill,
  question: RiQuestionFill,
};

// Size mapping
const sizeClasses = {
  small: "w-4 h-4",
  medium: "w-5 h-5",
  large: "w-6 h-6",
  xlarge: "w-8 h-8",
};

// Color mapping
const colorClasses = {
  primary: "text-blue-600",
  secondary: "text-gray-600",
  error: "text-red-600",
  warning: "text-amber-600",
  info: "text-cyan-600",
  success: "text-green-600",
  inherit: "text-current",
};

const Icon = forwardRef<HTMLDivElement, IconProps>((props, ref) => {
  const {
    name,
    size = "medium",
    color = "inherit",
    className = "",
    label,
    labelPosition = "bottom",
    spacing = 1,
    ...otherProps
  } = props;

  const IconComponent = iconMap[name];

  if (!IconComponent) {
    return null;
  }

  const iconSizeClass = sizeClasses[size];
  const iconColorClass = colorClasses[color];

  // Determine direction based on label position
  const getDirection = () => {
    switch (labelPosition) {
      case 'top':
      case 'bottom':
        return 'column';
      case 'left':
      case 'right':
        return 'row';
      default:
        return 'column';
    }
  };

  // Determine alignment based on label position
  const getAlignment = () => {
    switch (labelPosition) {
      case 'top':
      case 'bottom':
        return 'center';
      case 'left':
      case 'right':
        return 'center';
      default:
        return 'center';
    }
  };

  const iconElement = (
    <IconComponent className={`${iconSizeClass} ${iconColorClass}`} />
  );

  const labelElement = label ? (
    <Typography variant="body2" color={color === 'inherit' ? 'textPrimary' : color}>
      {label}
    </Typography>
  ) : null;

  if (!label) {
    return (
      <div
        ref={ref}
        className={`inline-flex items-center justify-center ${className}`}
        {...otherProps}
      >
        {iconElement}
      </div>
    );
  }

  return (
    <Stack
      ref={ref}
      direction={getDirection()}
      spacing={spacing as any}
      alignItems={getAlignment() as any}
      className={className}
      {...otherProps}
    >
      {labelPosition === 'top' || labelPosition === 'left' ? labelElement : null}
      {iconElement}
      {labelPosition === 'bottom' || labelPosition === 'right' ? labelElement : null}
    </Stack>
  );
});

Icon.displayName = "Icon";

export default Icon;
