export type StackDirection =
  | "row"
  | "row-reverse"
  | "column"
  | "column-reverse";

export type StackSpacing =
  | 0
  | 0.5
  | 1
  | 1.5
  | 2
  | 2.5
  | 3
  | 3.5
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 12
  | 16
  | 20
  | 24
  | 32;

export type StackAlignItems =
  | "flex-start"
  | "center"
  | "flex-end"
  | "stretch"
  | "baseline";

export type StackJustifyContent =
  | "flex-start"
  | "center"
  | "flex-end"
  | "space-between"
  | "space-around"
  | "space-evenly";

export type StackWrap = "nowrap" | "wrap" | "wrap-reverse";

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: StackDirection;
  spacing?: StackSpacing;
  alignItems?: StackAlignItems;
  justifyContent?: StackJustifyContent;
  wrap?: StackWrap;
  divider?: React.ReactNode;
  children: React.ReactNode;
  component?: React.ElementType;
  sx?: React.CSSProperties;
}
