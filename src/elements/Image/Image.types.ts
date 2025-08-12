export type ImageVariant = 'rounded' | 'circle' | 'square';
export type ImageSize = 'small' | 'medium' | 'large' | 'full';
export type ImageFit = 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  variant?: ImageVariant;
  size?: ImageSize;
  fit?: ImageFit;
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  onError?: () => void;
  onLoad?: () => void;
  placeholder?: React.ReactNode;
  fallback?: string;
}

export interface ImageClasses {
  root: string;
  image: string;
  placeholder: string;
  fallback: string;
}
