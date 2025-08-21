import type {
  TextFieldVariant,
  TextFieldSize,
  TextFieldColor,
} from "./TextField.types";

export const getTextFieldStyles = (
  variant: TextFieldVariant,
  size: TextFieldSize,
  color: TextFieldColor,
  disabled: boolean,
  error: boolean,
  fullWidth: boolean
) => {
  const baseClasses = ["relative", "w-full", "font-sans"];

  const widthClasses = fullWidth ? ["w-full"] : ["min-w-[200px]"];

  return [...baseClasses, ...widthClasses].join(" ");
};

export const getInputStyles = (
  variant: TextFieldVariant,
  size: TextFieldSize,
  color: TextFieldColor,
  disabled: boolean,
  error: boolean
) => {
  const baseClasses = [
    "w-full",
    "border",
    "rounded-md",
    "transition-all",
    "duration-200",
    "ease-in-out",
    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-offset-1",
    "disabled:cursor-not-allowed",
    "disabled:opacity-60",
    "disabled:bg-gray-50",
  ];

  // Size classes
  const sizeClasses = {
    small: ["text-sm", "px-3", "py-2", "min-h-[36px]"],
    medium: ["text-base", "px-4", "py-2.5", "min-h-[44px]"],
  };

  // Color schemes
  const colorSchemes = {
    primary: {
      outlined:
        "border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500",
      filled:
        "border-transparent bg-gray-50 text-gray-900 placeholder-gray-400 focus:bg-gray-100 focus:border-transparent focus:ring-blue-500",
      standard:
        "border-b-gray-300 border-t-transparent border-l-transparent border-r-transparent text-gray-900 placeholder-gray-400 focus:border-b-blue-500 focus:ring-blue-500",
    },
    secondary: {
      outlined:
        "border-gray-300 text-gray-900 placeholder-gray-400 focus:border-gray-500 focus:ring-gray-500",
      filled:
        "border-transparent bg-gray-50 text-gray-900 placeholder-gray-400 focus:bg-gray-100 focus:border-transparent focus:ring-gray-500",
      standard:
        "border-b-gray-300 border-t-transparent border-l-transparent border-r-transparent text-gray-900 placeholder-gray-400 focus:border-b-gray-500 focus:ring-gray-500",
    },
    error: {
      outlined:
        "border-red-300 text-red-900 placeholder-red-400 focus:border-red-500 focus:ring-red-500",
      filled:
        "border-transparent bg-red-50 text-red-900 placeholder-red-400 focus:bg-red-100 focus:border-transparent focus:ring-red-500",
      standard:
        "border-b-red-300 border-t-transparent border-l-transparent border-r-transparent text-red-900 placeholder-red-400 focus:border-b-red-500 focus:ring-red-500",
    },
    warning: {
      outlined:
        "border-amber-300 text-amber-900 placeholder-amber-400 focus:border-amber-500 focus:ring-amber-500",
      filled:
        "border-transparent bg-amber-50 text-amber-900 placeholder-amber-400 focus:bg-amber-100 focus:border-transparent focus:ring-amber-500",
      standard:
        "border-b-amber-300 border-t-transparent border-l-transparent border-r-transparent text-amber-900 placeholder-amber-400 focus:border-b-amber-500 focus:ring-amber-500",
    },
    info: {
      outlined:
        "border-cyan-300 text-cyan-900 placeholder-cyan-400 focus:border-cyan-500 focus:ring-cyan-500",
      filled:
        "border-transparent bg-cyan-50 text-cyan-900 placeholder-cyan-400 focus:bg-cyan-100 focus:border-transparent focus:ring-cyan-500",
      standard:
        "border-b-cyan-300 border-t-transparent border-l-transparent border-r-transparent text-cyan-900 placeholder-cyan-400 focus:border-b-cyan-500 focus:ring-cyan-500",
    },
    success: {
      outlined:
        "border-green-300 text-green-900 placeholder-green-400 focus:border-green-500 focus:ring-green-500",
      filled:
        "border-transparent bg-green-50 text-green-900 placeholder-green-400 focus:bg-green-100 focus:border-transparent focus:ring-green-500",
      standard:
        "border-b-green-300 border-t-transparent border-l-transparent border-r-transparent text-green-900 placeholder-green-400 focus:border-b-green-500 focus:ring-green-500",
    },
    inherit: {
      outlined:
        "border-current text-current placeholder-current focus:border-current focus:ring-current",
      filled:
        "border-transparent bg-current bg-opacity-10 text-current placeholder-current focus:bg-opacity-20 focus:border-transparent focus:ring-current",
      standard:
        "border-b-current border-t-transparent border-l-transparent border-r-transparent text-current placeholder-current focus:border-b-current focus:ring-current",
    },
  };

  // Error state
  const errorClasses = error
    ? [
        "border-red-500",
        "text-red-900",
        "focus:border-red-500",
        "focus:ring-red-500",
      ]
    : [];

  const variantClasses =
    colorSchemes[color]?.[variant] || colorSchemes.primary[variant];
  const sizeClassList = sizeClasses[size];

  return [...baseClasses, ...sizeClassList, variantClasses, ...errorClasses]
    .filter(Boolean)
    .join(" ");
};

export const getLabelStyles = (
  size: TextFieldSize,
  color: TextFieldColor,
  disabled: boolean,
  error: boolean
) => {
  const baseClasses = [
    "absolute",
    "left-0",
    "bottom-7",
    "transform",
    "transition-all",
    "duration-200",
    "ease-in-out",
    "pointer-events-none",
  ];

  const sizeClasses = {
    small: ["text-xs", "-translate-y-2", "scale-75", "origin-top-left"],
    medium: ["text-sm", "-translate-y-2.5", "scale-75", "origin-top-left"],
  };

  const colorClasses = {
    primary: "text-blue-600",
    secondary: "text-gray-600",
    error: "text-red-600",
    warning: "text-amber-600",
    info: "text-cyan-600",
    success: "text-green-600",
    inherit: "text-current",
  };

  const errorClasses = error ? ["text-red-600"] : [];
  const disabledClasses = disabled ? ["text-gray-400"] : [];

  return [
    ...baseClasses,
    ...sizeClasses[size],
    colorClasses[color],
    ...errorClasses,
    ...disabledClasses,
  ]
    .filter(Boolean)
    .join(" ");
};

export const getHelperTextStyles = (error: boolean) => {
  const baseClasses = ["text-xs", "mt-1", "ml-1"];

  const colorClasses = error ? "text-red-600" : "text-gray-600";

  return [...baseClasses, colorClasses].join(" ");
};

export const getAdornmentStyles = (size: TextFieldSize) => {
  const sizeClasses = {
    small: "w-4 h-4",
    medium: "w-5 h-5",
  };

  return sizeClasses[size];
};
