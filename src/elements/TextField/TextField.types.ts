export type TextFieldVariant = 'outlined' | 'filled' | 'standard';
export type TextFieldSize = 'small' | 'medium';
export type TextFieldColor = 
  | 'primary' 
  | 'secondary' 
  | 'error' 
  | 'warning' 
  | 'info' 
  | 'success'
  | 'inherit';

export interface TextFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: TextFieldVariant;
  size?: TextFieldSize;
  color?: TextFieldColor;
  disabled?: boolean;
  error?: boolean;
  fullWidth?: boolean;
  helperText?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  multiline?: boolean;
  rows?: number;
  maxRows?: number;
  minRows?: number;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  className?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface TextFieldClasses {
  root: string;
  input: string;
  label: string;
  helperText: string;
  adornment: string;
}
