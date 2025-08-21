export type IconName =
  | 'award'
  | 'medal'
  | 'chat'
  | 'question';

export type IconSize = 'small' | 'medium' | 'large' | 'xlarge';
export type IconColor =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'warning'
  | 'info'
  | 'success'
  | 'inherit';

export interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
  name: IconName;
  size?: IconSize;
  color?: IconColor;
  className?: string;
  label?: string;
  labelPosition?: 'top' | 'bottom' | 'left' | 'right';
  spacing?: number;
}
