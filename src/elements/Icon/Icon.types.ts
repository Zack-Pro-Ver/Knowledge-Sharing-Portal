export type IconSize = 'small' | 'medium' | 'large' | 'inherit';
export type IconColor = 
  | 'primary' 
  | 'secondary' 
  | 'error' 
  | 'warning' 
  | 'info' 
  | 'success'
  | 'inherit'
  | 'disabled';

export interface IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: IconSize;
  color?: IconColor;
  children: React.ReactNode;
  className?: string;
}

export interface IconClasses {
  root: string;
}
