// components/Typography.tsx
import React from "react";

interface TypographyProps {
  children: React.ReactNode;
  variant?: "h1" | "h2" | "h3" | "body" | "caption";
  className?: string;
}

const variantClasses: Record<string, string> = {
  h1: "text-4xl font-bold",
  h2: "text-3xl font-semibold",
  h3: "text-2xl font-semibold",
  body: "text-base",
  caption: "text-sm text-gray-500",
};

const Typography: React.FC<TypographyProps> = ({
  children,
  variant = "body",
  className = "",
}) => {
  return (
    <p className={`${variantClasses[variant]} ${className}`}>{children}</p>
  );
};

export default Typography;
