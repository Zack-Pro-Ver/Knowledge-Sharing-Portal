import type { ButtonVariant, ButtonSize, ButtonColor } from './Button.types';

export const getButtonStyles = (
  variant: ButtonVariant,
  size: ButtonSize,
  color: ButtonColor,
  disabled: boolean,
  fullWidth: boolean,
  disableElevation: boolean
) => {
  const baseClasses = [
    'inline-flex',
    'items-center',
    'justify-center',
    'relative',
    'box-border',
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
    small: ['text-xs', 'px-3', 'py-1.5', 'min-h-[32px]'],
    medium: ['text-sm', 'px-4', 'py-2', 'min-h-[40px]'],
    large: ['text-base', 'px-6', 'py-3', 'min-h-[48px]'],
  };

  // Color schemes
  const colorSchemes = {
    primary: {
      contained: 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 focus-visible:ring-blue-500',
      outlined: 'border border-blue-600 text-blue-600 hover:bg-blue-50 active:bg-blue-100 focus-visible:ring-blue-500',
      text: 'text-blue-600 hover:bg-blue-50 active:bg-blue-100 focus-visible:ring-blue-500',
    },
    secondary: {
      contained: 'bg-gray-600 text-white hover:bg-gray-700 active:bg-gray-800 focus-visible:ring-gray-500',
      outlined: 'border border-gray-600 text-gray-600 hover:bg-gray-50 active:bg-gray-100 focus-visible:ring-gray-500',
      text: 'text-gray-600 hover:bg-gray-50 active:bg-gray-100 focus-visible:ring-gray-500',
    },
    error: {
      contained: 'bg-red-600 text-white hover:bg-red-700 active:bg-red-800 focus-visible:ring-red-500',
      outlined: 'border border-red-600 text-red-600 hover:bg-red-50 active:bg-red-100 focus-visible:ring-red-500',
      text: 'text-red-600 hover:bg-red-50 active:bg-red-100 focus-visible:ring-red-500',
    },
    warning: {
      contained: 'bg-amber-600 text-white hover:bg-amber-700 active:bg-amber-800 focus-visible:ring-amber-500',
      outlined: 'border border-amber-600 text-amber-600 hover:bg-amber-50 active:bg-amber-100 focus-visible:ring-amber-500',
      text: 'text-amber-600 hover:bg-amber-50 active:bg-amber-100 focus-visible:ring-amber-500',
    },
    info: {
      contained: 'bg-cyan-600 text-white hover:bg-cyan-700 active:bg-cyan-800 focus-visible:ring-cyan-500',
      outlined: 'border border-cyan-600 text-cyan-600 hover:bg-cyan-50 active:bg-cyan-100 focus-visible:ring-cyan-500',
      text: 'text-cyan-600 hover:bg-cyan-50 active:bg-cyan-100 focus-visible:ring-cyan-500',
    },
    success: {
      contained: 'bg-green-600 text-white hover:bg-green-700 active:bg-green-800 focus-visible:ring-green-500',
      outlined: 'border border-green-600 text-green-600 hover:bg-green-50 active:bg-green-100 focus-visible:ring-green-500',
      text: 'text-green-600 hover:bg-green-50 active:bg-green-100 focus-visible:ring-green-500',
    },
    inherit: {
      contained: 'bg-current text-inherit hover:opacity-90 active:opacity-80',
      outlined: 'border border-current text-inherit hover:bg-current hover:bg-opacity-10 active:bg-opacity-20',
      text: 'text-inherit hover:bg-current hover:bg-opacity-10 active:bg-opacity-20',
    },
  };

  // Elevation classes
  const elevationClasses = disableElevation ? [] : [
    'shadow-sm',
    'hover:shadow-md',
    'active:shadow-sm',
  ];

  // Additional utility classes
  const utilityClasses = [
    fullWidth ? 'w-full' : '',
    'rounded-md',
  ];

  const variantClasses = colorSchemes[color]?.[variant] || colorSchemes.primary[variant];
  const sizeClassList = sizeClasses[size];

  return [
    ...baseClasses,
    ...sizeClassList,
    ...elevationClasses,
    ...utilityClasses,
    variantClasses,
  ].filter(Boolean).join(' ');
};

export const getIconStyles = (size: ButtonSize) => {
  const iconSizes = {
    small: 'w-4 h-4',
    medium: 'w-5 h-5',
    large: 'w-6 h-6',
  };

  return iconSizes[size];
};

export const getLabelStyles = () => {
  return 'flex items-center justify-center gap-2';
};

export const getLoadingStyles = () => {
  return 'absolute inset-0 flex items-center justify-center';
};
