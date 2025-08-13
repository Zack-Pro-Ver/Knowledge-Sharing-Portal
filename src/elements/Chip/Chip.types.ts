export type ChipVariant = 'default' | 'outlined' | 'filled';
export type ChipSize = 'small' | 'medium' | 'large';
export type ChipColor = 
  | 'primary' 
  | 'secondary' 
  | 'error' 
  | 'warning' 
  | 'info' 
  | 'success';

export interface ChipProps {
  label: string;
  variant?: ChipVariant;
  size?: ChipSize;
  color?: ChipColor;
  disabled?: boolean;
  onClick?: () => void;
  onDelete?: () => void;
  icon?: React.ReactNode;
  deleteIcon?: React.ReactNode;
  className?: string;
}
