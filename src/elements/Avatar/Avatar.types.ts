export type AvatarSize = 'small' | 'medium' | 'large';
export type AvatarVariant = 'circular' | 'rounded' | 'square';

export interface AvatarProps {
  src?: string;
  alt?: string;
  size?: AvatarSize;
  variant?: AvatarVariant;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  backgroundColor?: string;
  textColor?: string;
}

export interface AvatarClasses {
  root: string;
  img: string;
  fallback: string;
}
