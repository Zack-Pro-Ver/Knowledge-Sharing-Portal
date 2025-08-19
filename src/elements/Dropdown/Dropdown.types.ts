import type { ComponentType, SVGProps } from "react";
export type RemixiconComponentType = ComponentType<SVGProps<SVGSVGElement>>;
export type DropdownVariant = "contained" | "outlined" | "text";
export type DropdownSize = "small" | "medium" | "large";
export type DropdownColor =
  | "primary"
  | "secondary"
  | "error"
  | "warning"
  | "info"
  | "success"
  | "inherit";

export interface DropdownOption {
  label: string;
  value: string | number;
  disabled?: boolean;
  icon?: React.ReactNode;
  Icon?: RemixiconComponentType;
}

export interface DropdownProps {
  options: DropdownOption[];
  value?: string | number | null;
  onChange?: (value: string | number) => void;
  placeholder?: React.ReactNode;
  variant?: DropdownVariant;
  size?: DropdownSize;
  color?: DropdownColor;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  searchable?: boolean;
  clearable?: boolean;
  disableElevation?: boolean;
  renderOption?: (option: DropdownOption) => React.ReactNode;
  noOptionsText?: string;
  className?: string;
}
