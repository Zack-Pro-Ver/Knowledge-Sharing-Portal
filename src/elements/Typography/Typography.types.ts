export type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle1"
  | "subtitle2"
  | "body1"
  | "body2"
  | "caption"
  | "overline"
  | "button";

export type TypographyColor =
  | "primary"
  | "secondary"
  | "error"
  | "warning"
  | "info"
  | "success"
  | "inherit"
  | "textPrimary"
  | "textSecondary";

export type TypographyAlign =
  | "inherit"
  | "left"
  | "center"
  | "right"
  | "justify";
export type TypographyDisplay = "initial" | "block" | "inline";

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  color?: TypographyColor;
  align?: TypographyAlign;
  display?: TypographyDisplay;
  gutterBottom?: boolean;
  noWrap?: boolean;
  paragraph?: boolean;
  component?: React.ElementType;
  children: React.ReactNode;
  fontWeight?: "light" | "normal" | "medium" | "semibold" | "bold";
  fontStyle?: "normal" | "italic";
  lineHeight?: "normal" | "tight" | "snug" | "relaxed" | "loose";
  letterSpacing?: "tighter" | "tight" | "normal" | "wide" | "wider" | "widest";
}

export interface TypographyClasses {
  root: string;
}
