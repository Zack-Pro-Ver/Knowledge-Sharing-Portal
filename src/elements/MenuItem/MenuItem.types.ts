export type MenuItemVariant = 'contained' | 'outlined' | 'text';
export type MenuItemSize = 'small' | 'medium' | 'large';
export type MenuItemColor = 
  | 'primary' 
  | 'secondary' 
  | 'error' 
  | 'warning' 
  | 'info' 
  | 'success'
  | 'inherit';

export interface MenuItemProps {
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  divider?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  className?: string;
  variant?: MenuItemVariant;
  size?: MenuItemSize;
  color?: MenuItemColor;
}

export interface MenuItemClasses {
  root: string;
  icon: string;
  divider: string;
}
