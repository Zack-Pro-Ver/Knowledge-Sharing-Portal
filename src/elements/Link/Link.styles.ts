import type { LinkVariant, LinkSize, LinkUnderline } from './Link.types';

export const getLinkStyles = (
  variant: LinkVariant,
  size: LinkSize,
  underline: LinkUnderline,
  disabled: boolean
) => {
  const baseClasses = [
    'inline-flex',
    'items-center',
    'justify-center',
    'relative',
    'cursor-pointer',
    'select-none',
    'align-middle',
    'appearance-none',
    'no-underline',
    'font-medium',
    'transition-all',
    'duration-200',
    'ease-in-out',
    'focus:outline-none',
    'focus-visible:ring-2',
    'focus-visible:ring-offset-2',
    'disabled:cursor-not-allowed',
    'disabled:opacity-60',
  ];

  // Size classes
  const sizeClasses = {
    small: ['text-xs', 'leading-4'],
    medium: ['text-sm', 'leading-5'],
    large: ['text-base', 'leading-6'],
  };

  // Color schemes
  const colorSchemes = {
    default: {
      default: 'text-gray-700 hover:text-gray-900 focus-visible:ring-gray-500',
    },
    primary: {
      default: 'text-blue-600 hover:text-blue-700 focus-visible:ring-blue-500',
    },
    secondary: {
      default: 'text-gray-600 hover:text-gray-700 focus-visible:ring-gray-500',
    },
    error: {
      default: 'text-red-600 hover:text-red-700 focus-visible:ring-red-500',
    },
    warning: {
      default: 'text-amber-600 hover:text-amber-700 focus-visible:ring-amber-500',
    },
    info: {
      default: 'text-cyan-600 hover:text-cyan-700 focus-visible:ring-cyan-500',
    },
    success: {
      default: 'text-green-600 hover:text-green-700 focus-visible:ring-green-500',
    },
  };

  // Underline classes
  const underlineClasses = {
    none: 'no-underline',
    hover: 'no-underline hover:underline',
    always: 'underline',
  };

  // Additional utility classes
  const utilityClasses = [
    'rounded-sm',
  ];

  const variantClass = colorSchemes[variant]?.default || colorSchemes.default.default;
  const underlineClass = underlineClasses[underline];
  const sizeClassList = sizeClasses[size];

  return [
    ...baseClasses,
    ...sizeClassList,
    ...utilityClasses,
    variantClass,
    underlineClass,
  ].filter(Boolean).join(' ');
};

export const getIconStyles = (size: LinkSize) => {
  const iconSizes = {
    small: 'w-3 h-3',
    medium: 'w-4 h-4',
    large: 'w-5 h-5',
  };

  return iconSizes[size];
};
