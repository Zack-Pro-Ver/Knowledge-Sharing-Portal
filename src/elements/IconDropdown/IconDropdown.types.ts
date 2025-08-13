import type { ReactNode } from "react";

export type DropdownVariant = "iconWithName" | "notification";

export interface DropdownItem {
  label: string;
  icon: ReactNode;
  onClick: () => void;
  description?: string; // For notification type, e.g. "Your question received a new answer"
  timestamp?: string; // For notification type, e.g. "2 minutes ago"
}

export interface DropdownProps {
  buttonLabel?: string;
  buttonIcon: ReactNode;
  items: DropdownItem[];
  variant: DropdownVariant;
  className?: string;
}
