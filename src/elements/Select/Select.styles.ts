import type { SelectVariant, SelectSize, SelectColor } from "./Select.types";

export const getSelectStyles = (
  variant: SelectVariant,
  size: SelectSize,
  color: SelectColor,
  error: boolean,
  disabled: boolean,
  fullWidth: boolean
) => {
  const baseClasses = [
    "block",
    "w-full",
    "appearance-none",
    "rounded-md",
    "border",
    "bg-white",
    "text-gray-900",
    "shadow-sm",
    "transition-colors",
    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-offset-2",
    "disabled:cursor-not-allowed",
    "disabled:opacity-60",
  ]; // Size classes

  const sizeClasses = {
    small: ["text-xs", "px-3", "py-1.5", "min-h-[32px]", ""],
    medium: ["text-sm", "px-4", "py-2", "min-h-[40px]", ""],
    large: ["text-base", "px-4", "py-3", "min-h-[48px]"],
  }; // Variant classes

  const variantClasses = {
    outlined: [
      "border-gray-300",
      "hover:border-gray-400",
      "focus:border-gray-500",
    ],
    filled: [
      "border-transparent",
      "bg-gray-50",
      "hover:bg-gray-100",
      "focus:bg-gray-100",
    ],
    standard: [
      "border-b",
      "border-t-0",
      "border-l-0",
      "border-r-0",
      "border-gray-300",
      "rounded-none",
      "bg-transparent",
      "hover:border-gray-400",
      "focus:border-gray-500",
    ],
  }; // Color schemes

  const colorSchemes = {
    primary: {
      focus: "focus:border-blue-500 focus:ring-blue-500",
      error: "border-red-500 focus:border-red-500 focus:ring-red-500",
    },
    secondary: {
      focus: "focus:border-gray-500 focus:ring-gray-500",
      error: "border-red-500 focus:border-red-500 focus:ring-red-500",
    },
    error: {
      focus: "focus:border-red-500 focus:ring-red-500",
      error: "border-red-500 focus:border-red-500 focus:ring-red-500",
    },
    warning: {
      focus: "focus:border-amber-500 focus:ring-amber-500",
      error: "border-red-500 focus:border-red-500 focus:ring-red-500",
    },
    info: {
      focus: "focus:border-cyan-500 focus:ring-cyan-500",
      error: "border-red-500 focus:border-red-500 focus:ring-red-500",
    },
    success: {
      focus: "focus:border-green-500 focus:ring-green-500",
      error: "border-red-500 focus:border-red-500 focus:ring-red-500",
    },
    inherit: {
      focus: "focus:border-current focus:ring-current",
      error: "border-red-500 focus:border-red-500 focus:ring-red-500",
    },
  }; // Additional utility classes

  const utilityClasses = [fullWidth ? "w-full" : "max-w-xs", "rounded-md"];

  const variantClassList = variantClasses[variant];
  const colorClassList = colorSchemes[color];
  const sizeClassList = sizeClasses[size];
  const errorClassList = error ? colorClassList.error : colorClassList.focus;

  return [
    ...baseClasses,
    ...sizeClassList,
    ...variantClassList,
    ...utilityClasses,
    errorClassList,
  ]
    .filter(Boolean)
    .join(" ");
};

export const getLabelStyles = () => {
  return "block text-sm font-medium text-gray-700 mb-1";
};

export const getHelperTextStyles = () => {
  return "mt-1 text-sm text-gray-500";
};

export const getErrorHelperTextStyles = () => {
  return "mt-1 text-sm text-red-600";
};

export const getIconStyles = (size: SelectSize) => {
  const iconSizes = {
    small: "w-4 h-4",
    medium: "w-5 h-5",
    large: "w-6 h-6",
  };

  return iconSizes[size];
};

export const getWrapperStyles = () => {
  return "relative";
};

export const getIconWrapperStyles = () => {
  return "pointer-events-none absolute top-1/2 right-3   transform -translate-y-1/2 flex items-center";
};
