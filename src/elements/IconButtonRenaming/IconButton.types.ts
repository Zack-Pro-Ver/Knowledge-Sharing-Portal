export type IconButtonSize = 'small' | 'medium' | 'large';
export type IconButtonColor = 
  | 'default'
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'error'
  | 'info'
  | 'success'
  | 'warning';

export type IconButtonVariant = 'contained' | 'outlined' | 'text';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: IconButtonSize;
  color?: IconButtonColor;
  disabled?: boolean;
  disableFocusRipple?: boolean;
  disableRipple?: boolean;
  edge?: 'start' | 'end' | false;
  children: React.ReactNode;
  variant?: IconButtonVariant;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface IconButtonClasses {
  root: string;
  colorInherit: string;
  colorPrimary: string;
  colorSecondary: string;
  edgeStart: string;
  edgeEnd: string;
  sizeSmall: string;
  sizeMedium: string;
  sizeLarge: string;
}
