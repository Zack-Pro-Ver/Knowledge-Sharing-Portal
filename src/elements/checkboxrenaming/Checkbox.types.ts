export type CheckboxSize = 'small' | 'medium' | 'large';
export type CheckboxColor = 
  | 'primary' 
  | 'secondary' 
  | 'error' 
  | 'warning' 
  | 'info' 
  | 'success'
  | 'default';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  checkboxSize?: CheckboxSize;
  color?: CheckboxColor;
  disabled?: boolean;
  checked?: boolean;
  indeterminate?: boolean;
  label?: string;
  labelPlacement?: 'end' | 'start' | 'top' | 'bottom';
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface CheckboxClasses {
  root: string;
  checkbox: string;
  label: string;
  icon: string;
  checkedIcon: string;
}
