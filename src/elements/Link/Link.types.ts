export type LinkVariant = 'default' | 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
export type LinkSize = 'small' | 'medium' | 'large';
export type LinkUnderline = 'none' | 'hover' | 'always';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: LinkVariant;
  size?: LinkSize;
  underline?: LinkUnderline;
  disabled?: boolean;
  children: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

export interface LinkClasses {
  root: string;
}