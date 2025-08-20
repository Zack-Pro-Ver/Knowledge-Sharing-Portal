import type { MenuItemVariant, MenuItemSize, MenuItemColor } from './MenuItem.types';

export const getMenuItemStyles = (
  variant: MenuItemVariant,
  size: MenuItemSize,
  color: MenuItemColor,
  disabled: boolean
) => {
  const baseClasses = [
    'flex',
    'items-center',
    'w-full',
    'cursor-pointer',
    'transition-colors',
    'duration-150',
    'ease-in-out',
    'focus:outline-none',
    'focus:bg-gray-100',
  ];

  const sizeClasses = {
    small: ['text-xs', 'px-3', 'py-2', 'min-h-[32px]'],
    medium: ['text-sm', 'px-4', 'py-2.5', 'min-h-[36px]'],
    large: ['text-base', 'px-4', 'py-3', 'min-h-[40px]'],
  };

  const colorSchemes = {
    primary: {
      contained: 'bg-blue-600 text-white hover:bg-blue-700 focus:bg-blue-700',
      outlined: 'border border-blue-600 text-blue-600 hover:bg-blue-50 focus:bg-blue-100',
      text: 'text-blue-600 hover:bg-blue-50 focus:bg-blue-100',
    },
    secondary: {
      contained: 'bg-gray-600 text-white hover:bg-gray-700 focus:bg-gray-700',
      outlined: 'border border-gray-600 text-gray-600 hover:bg-gray-50 focus:bg-gray-100',
      text: 'text-gray-600 hover:bg-gray-50 focus:bg-gray-100',
    },
    error: {
      contained: 'bg-red-600 text-white hover:bg-red-700 focus:bg-red-700',
      outlined: 'border border-red-600 text-red-600 hover:bg-red-50 focus:bg-red-100',
      text: 'text-red-600 hover:bg-red-50 focus:bg-red-100',
    },
    warning: {
      contained: 'bg-amber-600 text-white hover:bg-amber-700 focus:bg-amber-700',
      outlined: 'border border-amber-600 text-amber-600 hover:bg-amber-50 focus:bg-amber-100',
      text: 'text-amber-600 hover:bg-amber-50 focus:bg-amber-100',
    },
    info: {
      contained: 'bg-cyan-600 text-white hover:bg-cyan-700 focus:bg-cyan-700',
      outlined: 'border border-cyan-600 text-cyan-600 hover:bg-cyan-50 focus:bg-cyan-100',
      text: 'text-cyan-600 hover:bg-cyan-50 focus:bg-cyan-100',
    },
    success: {
      contained: 'bg-green-600 text-white hover:bg-green-700 focus:bg-green-700',
      outlined: 'border border-green-600 text-green-600 hover:bg-green-50 focus:bg-green-100',
      text: 'text-green-600 hover:bg-green-50 focus:bg-green-100',
    },
    inherit: {
      contained: 'bg-current text-inherit hover:opacity-90 focus:opacity-90',
      outlined: 'border border-current text-inherit hover:bg-current hover:bg-opacity-10 focus:bg-opacity-20',
      text: 'text-inherit hover:bg-gray-50 focus:bg-gray-100',
    },
  };

  const stateClasses = [
    disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50',
  ];

  const sizeClassList = sizeClasses[size];
  const variantClasses = colorSchemes[color]?.[variant] || colorSchemes.primary[variant];

  return [
    ...baseClasses,
    ...sizeClassList,
    ...stateClasses,
    variantClasses,
  ].filter(Boolean).join(' ');
};

export const getMenuItemIconStyles = (size: MenuItemSize) => {
  const iconSizes = {
    small: 'w-4 h-4 mr-2',
    medium: 'w-4 h-4 mr-2',
    large: 'w-5 h-5 mr-2',
  };

  return iconSizes[size];
};

export const getMenuItemDividerStyles = () => {
  return 'h-px bg-gray-200 my-1 mx-0';
};

export const getMenuItemContentStyles = () => {
  return 'flex items-center justify-between flex-1';
};
