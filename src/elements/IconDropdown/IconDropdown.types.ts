import type { ReactNode } from "react";

export type DropdownVariant = "iconWithName" | "notification";

export interface DropdownItem {
  label: string;
  icon: ReactNode;
  onClick: () => void;
  description?: string; 
  timestamp?: string; 
}

export interface DropdownProps {
  buttonLabel?: string;
  buttonIcon: ReactNode;
  items: DropdownItem[];
  variant: DropdownVariant;
  className?: string;
}
