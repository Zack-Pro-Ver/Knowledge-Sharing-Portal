import React from "react";
import {
  getCardStyles,
  getCardHeaderStyles,
  getCardContentStyles,
  getCardFooterStyles,
  getAvatarStyles,
  getTitleStyles,
  getSubheaderStyles,
} from "./Card.styles";
import type {
  CardProps,
  CardHeaderProps,
  CardContentProps,
  CardFooterProps,
} from "./Card.types";

// Main Card Component
export const Card: React.FC<CardProps> = ({
  variant = "elevation",
  size = "medium",
  elevation = 1,
  raised = false,
  children,
  className = "",
  ...props
}) => {
  const cardClasses = getCardStyles(variant, size, elevation, raised);

  return (
    <div className={`${cardClasses} ${className}`} {...props}>
      {children}
    </div>
  );
};

// Card Header Component
export const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  children,
  subheader,
  avatar,
  action,
  className = "",
  ...props
}) => {
  const headerClasses = getCardHeaderStyles("medium");

  return (
    <div className={`${headerClasses} ${className}`} {...props}>
      <div className="flex items-center gap-3">
        {avatar && <div className={getAvatarStyles()}>{avatar}</div>}
        <div>
          {title && <div className={getTitleStyles()}>{title}</div>}
          {subheader && <div className={getSubheaderStyles()}>{subheader}</div>}
        </div>
      </div>
      {action && <div>{action}</div>}
    </div>
  );
};

// Card Content Component
export const CardContent: React.FC<CardContentProps> = ({
  children,
  className = "",
  ...props
}) => {
  const contentClasses = getCardContentStyles("medium");

  return (
    <div className={`${contentClasses} ${className}`} {...props}>
      {children}
    </div>
  );
};

// Card Footer Component
export const CardFooter: React.FC<CardFooterProps> = ({
  children,
  className = "",
  ...props
}) => {
  const footerClasses = getCardFooterStyles("medium");

  return (
    <div className={`${footerClasses} ${className}`} {...props}>
      {children}
    </div>
  );
};

// Export all components and types
export * from "./Card.types";

export default Card;
