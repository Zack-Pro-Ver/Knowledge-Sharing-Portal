import React, { forwardRef } from "react";
import type { IconProps } from "./Icon.types";
import { 
  RiStarLine, 
  RiMedalLine, 
  RiChat1Line, 
  RiQuestionLine 
} from "@remixicon/react";
import { 
  sizeClasses, 
  colorClasses, 
  getIconContainerStyles, 
  getLabelPositionStyles, 
  spacingClasses 
} from "./RepeatedIcons.styles";

const Icon = forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    name,
    size = "medium",
    color = "inherit",
    className = "",
    label,
    labelPosition = "bottom",
    spacing = 1,
    children,
    ...otherProps
  } = props;

  const containerStyles = getIconContainerStyles();
  const sizeClass = sizeClasses[size];
  const colorClass = colorClasses[color];
  const positionStyles = getLabelPositionStyles(labelPosition);
  const spacingClass = spacingClasses[spacing] || spacingClasses[1];

  // Remix Icon components mapping
  const renderIconContent = () => {
    if (children) {
      return children;
    }
    
    const IconComponent = {
      award: RiStarLine,
      medal: RiMedalLine,
      chat: RiChat1Line,
      question: RiQuestionLine
    }[name];

    if (!IconComponent) {
      return (
        <span className={`${sizeClass} ${colorClass} flex items-center justify-center`}>
        </span>
      );
    }

    return <IconComponent className={`${sizeClass} ${colorClass}`} />;
  };

  return (
    <span
      ref={ref}
      className={`${containerStyles} ${positionStyles} ${spacingClass} ${className}`}
      aria-label={label}
      {...otherProps}
    >
      {renderIconContent()}
      {label && (
        <span className="text-sm text-gray-600">
          {label}
        </span>
      )}
    </span>
  );
});

Icon.displayName = "Icon";
export default Icon;
