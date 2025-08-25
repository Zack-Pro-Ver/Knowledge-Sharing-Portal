export type SelectVariant = 'outlined' | 'filled' | 'standard';
export type SelectSize = 'small' | 'medium' | 'large';
export type SelectColor = 
  | 'primary' 
  | 'secondary' 
  | 'error' 
  | 'warning' 
  | 'info' 
  | 'success'
  | 'inherit';

export interface SelectOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  variant?: SelectVariant;
  size?: SelectSize;
  color?: SelectColor;
  label?: string;
  helperText?: string;
  error?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  required?: boolean;
  options: SelectOption[];
  placeholder?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  children?: React.ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface SelectClasses {
  root: string;
  label: string;
  select: string;
  helperText: string;
  icon: string;
}
