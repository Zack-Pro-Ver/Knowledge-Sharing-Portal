export type ProgressBarSize = 'small' | 'medium' | 'large';
export type ProgressBarColor =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'warning'
  | 'info'
  | 'success'
  | 'inherit';

export interface ProgressBarProps {
  progress: number; // 0 to 100
  size?: ProgressBarSize;
  color?: ProgressBarColor;
  fullWidth?: boolean;
  className?: string;
}
