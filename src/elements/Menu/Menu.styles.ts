import type { MenuVariant, MenuSize, MenuColor, MenuPosition } from './Menu.types';

export const getMenuStyles = (
  variant: MenuVariant,
  size: MenuSize,
  color: MenuColor,
  disabled: boolean,
  position: MenuPosition
) => {
  const baseClasses = [
    'absolute',
    'z-50',
    'min-w-[160px]',
    'rounded-md',
    'shadow-lg',
    'bg-white',
    'border',
    'border-gray-200',
    'overflow-hidden',
    'focus:outline-none',
  ];

  // Position classes
  const positionClasses = {
    'bottom-left': ['top-full', 'left-0', 'mt-1'],
    'bottom-right': ['top-full', 'right-0', 'mt-1'],
    'top-left': ['bottom-full', 'left-0', 'mb-1'],
    'top-right': ['bottom-full', 'right-0', 'mb-1'],
  };

  // Size classes
  const sizeClasses = {
    small: ['text-xs', 'py-1'],
    medium: ['text-sm', 'py-1.5'],
    large: ['text-base', 'py-2'],
  };

  // Color schemes for menu items
  const colorSchemes = {
    primary: {
      contained: 'hover:bg-blue-50 focus:bg-blue-100 text-blue-700',
      outlined: 'hover:bg-blue-50 focus:bg-blue-100 text-blue-700',
      text: 'hover:bg-blue-50 focus:bg-blue-100 text-blue-700',
    },
    secondary: {
      contained: 'hover:bg-gray-50 focus:bg-gray-100 text-gray-700',
      outlined: 'hover:bg-gray-50 focus:bg-gray-100 text-gray-700',
      text: 'hover:bg-gray-50 focus:bg-gray-100 text-gray-700',
    },
    error: {
      contained: 'hover:bg-red-50 focus:bg-red-100 text-red-700',
      outlined: 'hover:bg-red-50 focus:bg-red-100 text-red-700',
      text: 'hover:bg-red-50 focus:bg-red-100 text-red-700',
    },
    warning: {
      contained: 'hover:bg-amber-50 focus:bg-amber-100 text-amber-700',
      outlined: 'hover:bg-amber-50 focus:bg-amber-100 text-amber-700',
      text: 'hover:bg-amber-50 focus:bg-amber-100 text-amber-700',
    },
    info: {
      contained: 'hover:bg-cyan-50 focus:bg-cyan-100 text-cyan-700',
      outlined: 'hover:bg-cyan-50 focus:bg-cyan-100 text-cyan-700',
      text: 'hover:bg-cyan-50 focus:bg-cyan-100 text-cyan-700',
    },
    success: {
      contained: 'hover:bg-green-50 focus:bg-green-100 text-green-700',
      outlined: 'hover:bg-green-50 focus:bg-green-100 text-green-700',
      text: 'hover:bg-green-50 focus:bg-green-100 text-green-700',
    },
    inherit: {
      contained: 'hover:bg-gray-50 focus:bg-gray-100 text-inherit',
      outlined: 'hover:bg-gray-50 focus:bg-gray-100 text-inherit',
      text: 'hover:bg-gray-50 focus:bg-gray-100 text-inherit',
    },
  };

  const utilityClasses = [
    disabled ? 'opacity-60 cursor-not-allowed' : '',
    'transition-all duration-150 ease-in-out',
  ];

  const variantClasses = colorSchemes[color]?.[variant] || colorSchemes.primary[variant];
  const positionClassList = positionClasses[position];
  const sizeClassList = sizeClasses[size];

  return [
    ...baseClasses,
    ...positionClassList,
    ...sizeClassList,
    ...utilityClasses,
    variantClasses,
  ].filter(Boolean).join(' ');
};

export const getMenuItemStyles = (
  disabled: boolean,
  size: MenuSize
) => {
  const baseClasses = [
    'flex',
    'items-center',
    'w-full',
    'px-4',
    'cursor-pointer',
    'transition-colors',
    'duration-150',
    'ease-in-out',
    'focus:outline-none',
  ];

  const sizeClasses = {
    small: ['text-xs', 'py-2', 'min-h-[32px]'],
    medium: ['text-sm', 'py-2.5', 'min-h-[36px]'],
    large: ['text-base', 'py-3', 'min-h-[40px]'],
  };

  const stateClasses = [
    disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50 focus:bg-gray-100',
  ];

  const sizeClassList = sizeClasses[size];

  return [
    ...baseClasses,
    ...sizeClassList,
    ...stateClasses,
  ].filter(Boolean).join(' ');
};

export const getMenuItemIconStyles = (size: MenuSize) => {
  const iconSizes = {
    small: 'w-4 h-4 mr-2',
    medium: 'w-4 h-4 mr-2',
    large: 'w-5 h-5 mr-2',
  };

  return iconSizes[size];
};

export const getMenuDividerStyles = () => {
  return 'h-px bg-gray-200 my-1';
};

export const getMenuPaperStyles = () => {
  return 'rounded-md shadow-lg bg-white border border-gray-200';
};

export const getMenuListStyles = () => {
  return 'py-1';
};
