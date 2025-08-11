import type { PropsWithChildren } from "react";

interface IconButtonProps {
  onClick?: () => void;
  className?: string;
  ariaLabel: string;
}

const baseButtonClass = "flex text-sm rounded-full";

function IconButton({
  onClick,
  children,
  className = "",
  ariaLabel,
}: PropsWithChildren<IconButtonProps>) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={`${baseButtonClass} ${className}`}
    >
      {children}
    </button>
  );
}

export default IconButton;
