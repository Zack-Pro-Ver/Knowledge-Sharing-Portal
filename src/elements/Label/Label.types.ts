export type LabelVariant = 'default' | 'outlined' | 'filled';
export type LabelSize = 'small' | 'medium' | 'large';
export type LabelColor =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'warning'
  | 'info'
  | 'success'
  | 'inherit';

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  variant?: LabelVariant;
  size?: LabelSize;
  color?: LabelColor;
  disabled?: boolean;
  required?: boolean;
  children: React.ReactNode;
  htmlFor?: string;
  className?: string;
}

export interface LabelClasses {
  root: string;
  asterisk: string;
}
