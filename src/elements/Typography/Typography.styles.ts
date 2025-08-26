export type TypographyVariant = "h1" | "h2" | "h3" | "body1" | "body2";

export const getTypographyStyles = (
  variant: TypographyVariant,
  color: string,
  align: string,
  display: string,
  gutterBottom: boolean,
  noWrap: boolean,
  paragraph: boolean,
  fontWeight?: string,
  fontStyle?: string,
  lineHeight?: string,
  letterSpacing?: string
) => {
  // Basic styles for demonstration
  const styles = {
    h1: "text-2xl font-bold",
    h2: "text-xl font-semibold",
    h3: "text-lg font-medium",
    body1: "text-base",
    body2: "text-sm",
    // Add more styles as needed
  };

  return styles[variant] || styles.body1; // Default to body1 if variant not found
};
