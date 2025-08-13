export type CardVariant = 'elevation' | 'outlined';
export type CardSize = 'small' | 'medium' | 'large';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  size?: CardSize;
  elevation?: number;
  raised?: boolean;
  children: React.ReactNode;
  className?: string;
}

export interface CardHeaderProps {
  title?: React.ReactNode;
  subheader?: React.ReactNode;
  avatar?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export interface CardClasses {
  root: string;
  header: string;
  content: string;
  footer: string;
}
