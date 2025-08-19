import type { DropdownVariant } from "./IconDropdown.types";

export const getDropdownButtonStyles = (
  variant: DropdownVariant = "iconWithName",
  disabled: boolean = false
) => {
  const baseClasses = [
    "inline-flex",
    "items-center",
    "justify-center",
    "relative",
    "box-border",
    "cursor-pointer",
    "select-none",
    "align-middle",
    "appearance-none",
    "no-underline",
    "font-medium",
    "transition-all",
    "duration-200",
    "ease-in-out",
    "focus:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-offset-2",
    "disabled:cursor-not-allowed",
    "disabled:opacity-60",
    "rounded-md",
  ];

  const variantClasses = {
    iconWithName: [
      "bg-white",
      "border",
      "border-gray-300",
      "text-gray-700",
      "hover:bg-gray-50",
      "focus-visible:ring-indigo-500",
      "focus-visible:ring-offset-gray-100",
      "px-2",
      "py-2",
      "text-sm",
    ],
    notification: [
      "bg-white",
      "border",
      "border-gray-300",
      "text-gray-700",
      "hover:bg-gray-50",
      "focus-visible:ring-indigo-500",
      "focus-visible:ring-offset-gray-100",
      "px-3",
      "py-1.5",
      "text-sm",
    ],
  };

  return [...baseClasses, ...variantClasses[variant]].filter(Boolean).join(" ");
};

export const getDropdownItemStyles = (
  variant: DropdownVariant = "iconWithName"
) => {
  const baseClasses = [
    "flex",
    "items-center",
    "w-full",
    "px-2",
    "py-2",
    "text-sm",
    "text-gray-700",
    "hover:bg-gray-100",
    "focus:bg-gray-100",
    "focus:outline-none",
    "cursor-pointer",
    "transition",
    "duration-150",
    "ease-in-out",
  ];

  const variantClasses = {
    iconWithName: [],
    notification: ["flex-col", "items-start", "gap-1", "text-left", "px-4", "py-3"],
  };

  return [...baseClasses, ...variantClasses[variant]].filter(Boolean).join(" ");
};

export const getDropdownMenuStyles = () => {
  return [
    "absolute",
    "right-0", 
    "z-10",
    "mt-2",
    "w-56",
    "origin-top-right",
    "rounded-md",
    "bg-white",
    "shadow-lg",
    "ring-1",
    "ring-black",
    "ring-opacity-5",
    "focus:outline-none",
  ].join(" ");
};
