export type MenuVariant = 'contained' | 'outlined' | 'text';
export type MenuSize = 'small' | 'medium' | 'large';
export type MenuColor = 
  | 'primary' 
  | 'secondary' 
  | 'error' 
  | 'warning' 
  | 'info' 
  | 'success'
  | 'inherit';

export type MenuPosition = 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';

export interface MenuProps {
  open: boolean;
  anchorEl?: HTMLElement | null;
  onClose?: () => void;
  variant?: MenuVariant;
  size?: MenuSize;
  color?: MenuColor;
  disabled?: boolean;
  position?: MenuPosition;
  children: React.ReactNode;
  className?: string;
}

export interface MenuItemProps {
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  divider?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  className?: string;
}

export interface MenuClasses {
  root: string;
  paper: string;
  list: string;
  item: string;
  divider: string;
}
