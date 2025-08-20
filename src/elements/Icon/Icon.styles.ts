import type { IconSize, IconColor } from "./Icon.types";

export const getIconStyles = (size: IconSize, color: IconColor) => {
  const baseClasses = [
    "inline-block",
    "shrink-0",
    "transition-all",
    "duration-200",
    "ease-in-out",
  ];

  // Size classes
  const sizeClasses = {
    small: ["w-4", "h-4"],
    medium: ["w-5", "h-5"],
    large: ["w-6", "h-6"],
    inherit: ["w-[1em]", "h-[1em]"],
  };

  // Color schemes
  const colorSchemes = {
    primary: "text-blue-600",
    secondary: "text-gray-600",
    error: "text-red-600",
    warning: "text-amber-600",
    info: "text-cyan-600",
    success: "text-green-600",
    inherit: "text-inherit",
    disabled: "text-gray-400",
  };

  const colorClass = colorSchemes[color] || colorSchemes.inherit;
  const sizeClassList = sizeClasses[size];

  return [...baseClasses, ...sizeClassList, colorClass].join(" ");
};

export const getBackgroundStyles = (bgColor?: string) => {
  if (!bgColor) return "";

  return [
    "flex",
    "items-center",
    "justify-center",
    "w-10",
    "h-10",
    "rounded-full",
    "p-2",
  ].join(" ");
};
