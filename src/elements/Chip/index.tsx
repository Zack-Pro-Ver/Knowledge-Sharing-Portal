import React from "react";
import type { ChipProps } from "./Chip.types";
import {
  getChipStyles,
  getIconStyles,
  getLabelStyles,
  getDeleteStyles,
} from "./Chip.styles";

const Chip: React.FC<ChipProps> = ({
  label,
  variant = "default",
  size = "medium",
  color = "primary",
  disabled = false,
  onClick,
  onDelete,
  icon,
  deleteIcon,
  className = "",
}) => {
  const chipStyles = getChipStyles(variant, size, color, disabled, !!onClick);

  const iconStyles = getIconStyles(size);
  const labelStyles = getLabelStyles();
  const deleteStyles = getDeleteStyles(size);

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!disabled && onDelete) {
      onDelete();
    }
  };

  return (
    <div
      className={`${chipStyles} ${className}`}
      onClick={handleClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <span className={labelStyles}>
        {icon && <span className={iconStyles}>{icon}</span>}
        <span className="truncate">{label}</span>
        {onDelete && (
          <button
            className={deleteStyles}
            onClick={handleDelete}
            aria-label={`Delete ${label}`}
            type="button"
          >
            {deleteIcon || (
              <svg
                className="w-full h-full"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        )}
      </span>
    </div>
  );
};

export default Chip;
