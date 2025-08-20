import type {
  StackDirection,
  StackSpacing,
  StackAlignItems,
  StackJustifyContent,
  StackWrap,
} from "./Stack.types";

export const getDirectionStyles = (direction: StackDirection) => {
  const directionStyles = {
    row: "flex-row",
    "row-reverse": "flex-row-reverse",
    column: "flex-col",
    "column-reverse": "flex-col-reverse",
  };
  return directionStyles[direction];
};

export const getSpacingStyles = (spacing: StackSpacing) => {
  const spacingStyles = {
    0: "gap-0",
    0.5: "gap-0.5",
    1: "gap-1",
    1.5: "gap-1.5",
    2: "gap-2",
    2.5: "gap-2.5",
    3: "gap-3",
    3.5: "gap-3.5",
    4: "gap-4",
    5: "gap-5",
    6: "gap-6",
    7: "gap-7",
    8: "gap-8",
    9: "gap-9",
    10: "gap-10",
    12: "gap-12",
    16: "gap-16",
    20: "gap-20",
    24: "gap-24",
    32: "gap-32",
  };
  return spacingStyles[spacing];
};

export const getAlignItemsStyles = (alignItems: StackAlignItems) => {
  const alignItemsStyles = {
    "flex-start": "items-start",
    center: "items-center",
    "flex-end": "items-end",
    stretch: "items-stretch",
    baseline: "items-baseline",
  };
  return alignItemsStyles[alignItems];
};

export const getJustifyContentStyles = (
  justifyContent: StackJustifyContent
) => {
  const justifyContentStyles = {
    "flex-start": "justify-start",
    center: "justify-center",
    "flex-end": "justify-end",
    "space-between": "justify-between",
    "space-around": "justify-around",
    "space-evenly": "justify-evenly",
  };
  return justifyContentStyles[justifyContent];
};

export const getWrapStyles = (wrap: StackWrap) => {
  const wrapStyles = {
    nowrap: "flex-nowrap",
    wrap: "flex-wrap",
    "wrap-reverse": "flex-wrap-reverse",
  };
  return wrapStyles[wrap];
};

export const getStackStyles = (
  direction: StackDirection,
  spacing: StackSpacing,
  alignItems?: StackAlignItems,
  justifyContent?: StackJustifyContent,
  wrap?: StackWrap
) => {
  const baseClasses = ["flex", "box-border"];

  const directionClass = getDirectionStyles(direction);
  const spacingClass = getSpacingStyles(spacing);
  const alignItemsClass = alignItems ? getAlignItemsStyles(alignItems) : "";
  const justifyContentClass = justifyContent
    ? getJustifyContentStyles(justifyContent)
    : "";
  const wrapClass = wrap ? getWrapStyles(wrap) : "";

  return [
    ...baseClasses,
    directionClass,
    spacingClass,
    alignItemsClass,
    justifyContentClass,
    wrapClass,
  ]
    .filter(Boolean)
    .join(" ");
};
