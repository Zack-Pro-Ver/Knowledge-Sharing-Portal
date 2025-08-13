import type { ChipVariant, ChipSize, ChipColor } from './Chip.types';

export const getChipStyles = (
  variant: ChipVariant,
  size: ChipSize,
  color: ChipColor,
  disabled: boolean,
  clickable: boolean
) => {
  const baseClasses = [
    'inline-flex',
    'items-center',
    'justify-center',
    'relative',
    'box-border',
    'select-none',
    'align-middle',
    'font-medium',
    'transition-all',
    'duration-200',
    'ease-in-out',
    'focus:outline-none',
    'disabled:cursor-not-allowed',
    'disabled:opacity-60',
  ];

  // Size classes
  const sizeClasses = {
    small: ['text-xs', 'px-2', 'py-1', 'min-h-[24px]', 'rounded-full'],
    medium: ['text-sm', 'px-3', 'py-1.5', 'min-h-[32px]', 'rounded-full'],
    large: ['text-base', 'px-4', 'py-2', 'min-h-[40px]', 'rounded-full'],
  };

  // Color schemes
  const colorSchemes = {
    primary: {
      default: 'bg-blue-100 text-blue-800 border border-blue-200',
      outlined: 'border border-blue-500 text-blue-600 bg-transparent',
      filled: 'bg-blue-600 text-white border border-blue-600',
    },
    secondary: {
      default: 'bg-gray-100 text-gray-800 border border-gray-200',
      outlined: 'border border-gray-500 text-gray-600 bg-transparent',
      filled: 'bg-gray-600 text-white border border-gray-600',
    },
    error: {
      default: 'bg-red-100 text-red-800 border border-red-200',
      outlined: 'border border-red-500 text-red-600 bg-transparent',
      filled: 'bg-red-600 text-white border border-red-600',
    },
    warning: {
      default: 'bg-amber-100 text-amber-800 border border-amber-200',
      outlined: 'border border-amber-500 text-amber-600 bg-transparent',
      filled: 'bg-amber-600 text-white border border-amber-600',
    },
    info: {
      default: 'bg-cyan-100 text-cyan-800 border border-cyan-200',
      outlined: 'border border-cyan-500 text-cyan-600 bg-transparent',
      filled: 'bg-cyan-600 text-white border border-cyan-600',
    },
    success: {
      default: 'bg-green-100 text-green-800 border border-green-200',
      outlined: 'border border-green-500 text-green-600 bg-transparent',
      filled: 'bg-green-600 text-white border border-green-600',
    },
  };

  // Interactive classes
  const interactiveClasses = clickable
    ? ['cursor-pointer', 'hover:shadow-md', 'active:scale-95']
    : ['cursor-default'];

  const variantClasses = colorSchemes[color]?.[variant] || colorSchemes.primary[variant];
  const sizeClassList = sizeClasses[size];

  return [
    ...baseClasses,
    ...sizeClassList,
    ...interactiveClasses,
    variantClasses,
  ].filter(Boolean).join(' ');
};

export const getIconStyles = (size: ChipSize) => {
  const iconSizes = {
    small: 'w-3 h-3',
    medium: 'w-4 h-4',
    large: 'w-5 h-5',
  };

  return iconSizes[size];
};

export const getLabelStyles = () => {
  return 'flex items-center justify-center gap-1 overflow-hidden';
};

export const getDeleteStyles = (size: ChipSize) => {
  const deleteSizes = {
    small: 'w-4 h-4 ml-1',
    medium: 'w-5 h-5 ml-1',
    large: 'w-6 h-6 ml-1',
  };

  return [
    'inline-flex',
    'items-center',
    'justify-center',
    'rounded-full',
    'hover:bg-black/10',
    'focus:bg-black/20',
    'transition-colors',
    'duration-200',
    'cursor-pointer',
    'border-none',
    'bg-transparent',
    deleteSizes[size],
  ].join(' ');
};
