// components/Stack.tsx
import React from "react";

interface StackProps {
  children: React.ReactNode;
  direction?: "row" | "col";
  spacing?: string; // e.g. "gap-4"
  align?: string; // e.g. "items-center"
  justify?: string; // e.g. "justify-between"
  className?: string;
}

const Stack: React.FC<StackProps> = ({
  children,
  direction = "col",
  spacing = "gap-2",
  align = "",
  justify = "",
  className = "",
}) => {
  return (
    <div
      className={`flex flex-${direction} ${spacing} ${align} ${justify} ${className}`}
    >
      {children}
    </div>
  );
};

export default Stack;
