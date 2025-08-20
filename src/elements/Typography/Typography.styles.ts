import type {
  TypographyVariant,
  TypographyColor,
  TypographyAlign,
  TypographyDisplay,
} from "./Typography.types";

export const getVariantStyles = (variant: TypographyVariant) => {
  const variantStyles = {
    h1: "text-5xl font-light leading-tight tracking-tight",
    h2: "text-4xl font-light leading-tight tracking-tight",
    h3: "text-3xl font-normal leading-snug tracking-normal",
    h4: "text-2xl font-normal leading-snug tracking-normal",
    h5: "text-xl font-medium leading-snug tracking-normal",
    h6: "text-lg font-medium leading-snug tracking-normal",
    subtitle1: "text-base font-normal leading-relaxed tracking-normal",
    subtitle2: "text-sm font-medium leading-relaxed tracking-normal",
    body1: "text-base font-normal leading-relaxed tracking-normal",
    body2: "text-sm font-normal leading-relaxed tracking-normal",
    caption: "text-xs font-normal leading-relaxed tracking-normal",
    overline: "text-xs font-medium leading-relaxed tracking-widest uppercase",
    button: "text-sm font-medium leading-relaxed tracking-wider uppercase",
  };

  return variantStyles[variant];
};

export const getColorStyles = (color: TypographyColor) => {
  const colorStyles = {
    primary: "text-blue-600",
    secondary: "text-gray-600",
    error: "text-red-600",
    warning: "text-amber-600",
    info: "text-cyan-600",
    success: "text-green-600",
    inherit: "text-inherit",
    textPrimary: "text-gray-900",
    textSecondary: "text-gray-600",
  };

  return colorStyles[color];
};

export const getAlignStyles = (align: TypographyAlign) => {
  const alignStyles = {
    inherit: "text-inherit",
    left: "text-left",
    center: "text-center",
    right: "text-right",
    justify: "text-justify",
  };

  return alignStyles[align];
};

export const getDisplayStyles = (display: TypographyDisplay) => {
  const displayStyles = {
    initial: "inline",
    block: "block",
    inline: "inline",
  };

  return displayStyles[display];
};

export const getFontWeightStyles = (
  fontWeight?: "light" | "normal" | "medium" | "semibold" | "bold"
) => {
  const fontWeightStyles = {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  };

  return fontWeight ? fontWeightStyles[fontWeight] : "";
};

export const getFontStyleStyles = (fontStyle?: "normal" | "italic") => {
  const fontStyleStyles = {
    normal: "not-italic",
    italic: "italic",
  };

  return fontStyle ? fontStyleStyles[fontStyle] : "";
};

export const getLineHeightStyles = (
  lineHeight?: "normal" | "tight" | "snug" | "relaxed" | "loose"
) => {
  const lineHeightStyles = {
    normal: "leading-normal",
    tight: "leading-tight",
    snug: "leading-snug",
    relaxed: "leading-relaxed",
    loose: "leading-loose",
  };

  return lineHeight ? lineHeightStyles[lineHeight] : "";
};

export const getLetterSpacingStyles = (
  letterSpacing?: "tighter" | "tight" | "normal" | "wide" | "wider" | "widest"
) => {
  const letterSpacingStyles = {
    tighter: "tracking-tighter",
    tight: "tracking-tight",
    normal: "tracking-normal",
    wide: "tracking-wide",
    wider: "tracking-wider",
    widest: "tracking-widest",
  };

  return letterSpacing ? letterSpacingStyles[letterSpacing] : "";
};

export const getUtilityStyles = (
  gutterBottom?: boolean,
  noWrap?: boolean,
  paragraph?: boolean
) => {
  const utilityClasses = [];

  if (gutterBottom) {
    utilityClasses.push("mb-2");
  }

  if (noWrap) {
    utilityClasses.push(
      "overflow-hidden",
      "text-ellipsis",
      "whitespace-nowrap"
    );
  }

  if (paragraph) {
    utilityClasses.push("mb-4");
  }

  return utilityClasses.join(" ");
};

export const getTypographyStyles = (
  variant: TypographyVariant,
  color: TypographyColor,
  align: TypographyAlign,
  display: TypographyDisplay,
  gutterBottom?: boolean,
  noWrap?: boolean,
  paragraph?: boolean,
  fontWeight?: "light" | "normal" | "medium" | "semibold" | "bold",
  fontStyle?: "normal" | "italic",
  lineHeight?: "normal" | "tight" | "snug" | "relaxed" | "loose",
  letterSpacing?: "tighter" | "tight" | "normal" | "wide" | "wider" | "widest"
) => {
  const baseClasses = ["m-0", "font-sans"];

  const variantClass = getVariantStyles(variant);
  const colorClass = getColorStyles(color);
  const alignClass = getAlignStyles(align);
  const displayClass = getDisplayStyles(display);
  const fontWeightClass = getFontWeightStyles(fontWeight);
  const fontStyleClass = getFontStyleStyles(fontStyle);
  const lineHeightClass = getLineHeightStyles(lineHeight);
  const letterSpacingClass = getLetterSpacingStyles(letterSpacing);
  const utilityClass = getUtilityStyles(gutterBottom, noWrap, paragraph);

  return [
    ...baseClasses,
    variantClass,
    colorClass,
    alignClass,
    displayClass,
    fontWeightClass,
    fontStyleClass,
    lineHeightClass,
    letterSpacingClass,
    utilityClass,
  ]
    .filter(Boolean)
    .join(" ");
};
