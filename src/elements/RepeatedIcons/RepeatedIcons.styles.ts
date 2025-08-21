import type { IconSize, IconColor } from "./Icon.types";

// Size classes mapping
export const sizeClasses: Record<IconSize, string> = {
  small: "w-4 h-4",
  medium: "w-5 h-5",
  large: "w-6 h-6",
  xlarge: "w-8 h-8",
};

// Color classes mapping
export const colorClasses: Record<IconColor, string> = {
  primary: "text-blue-600",
  secondary: "text-gray-600",
  error: "text-red-600",
  warning: "text-amber-600",
  info: "text-cyan-600",
  success: "text-green-600",
  inherit: "text-current",
};

// Base icon container styles
export const getIconContainerStyles = (): string => {
  return "inline-flex items-center justify-center";
};

// Label positioning styles
export const getLabelPositionStyles = (position: 'top' | 'bottom' | 'left' | 'right'): string => {
  switch (position) {
    case 'top':
      return "flex-col-reverse items-center";
    case 'bottom':
      return "flex-col items-center";
    case 'left':
      return "flex-row-reverse items-center";
    case 'right':
      return "flex-row items-center";
    default:
      return "flex-col items-center";
  }
};

// Spacing classes
export const spacingClasses: Record<number, string> = {
  0: "gap-0",
  0.5: "gap-0.5",
  1: "gap-1",
  1.5: "gap-1.5",
  2: "gap-2",
  2.5: "gap-2.5",
  3: "gap-3",
  3.5: "gap-3.5",
  4: "gap-4",
  5: "gap-5",
};
