import type { LabelVariant, LabelSize, LabelColor } from './Label.types';

export const getLabelStyles = (
  variant: LabelVariant,
  size: LabelSize,
  color: LabelColor,
  disabled: boolean,
  required: boolean
) => {
  const baseClasses = [
    'inline-block',
    'font-medium',
    'cursor-default',
    'select-none',
    'transition-colors',
    'duration-200',
    'ease-in-out',
  ];

  // Size classes
  const sizeClasses = {
    small: ['text-xs', 'mb-1'],
    medium: ['text-sm', 'mb-1.5'],
    large: ['text-base', 'mb-2'],
  };

  // Color schemes
  const colorSchemes = {
    primary: {
      default: 'text-gray-900',
      outlined: 'text-gray-900 border border-gray-300 px-2 py-1 rounded',
      filled: 'text-white bg-blue-600 px-2 py-1 rounded',
    },
    secondary: {
      default: 'text-gray-700',
      outlined: 'text-gray-700 border border-gray-300 px-2 py-1 rounded',
      filled: 'text-white bg-gray-600 px-2 py-1 rounded',
    },
    error: {
      default: 'text-red-600',
      outlined: 'text-red-600 border border-red-300 px-2 py-1 rounded',
      filled: 'text-white bg-red-600 px-2 py-1 rounded',
    },
    warning: {
      default: 'text-amber-600',
      outlined: 'text-amber-600 border border-amber-300 px-2 py-1 rounded',
      filled: 'text-white bg-amber-600 px-2 py-1 rounded',
    },
    info: {
      default: 'text-cyan-600',
      outlined: 'text-cyan-600 border border-cyan-300 px-2 py-1 rounded',
      filled: 'text-white bg-cyan-600 px-2 py-1 rounded',
    },
    success: {
      default: 'text-green-600',
      outlined: 'text-green-600 border border-green-300 px-2 py-1 rounded',
      filled: 'text-white bg-green-600 px-2 py-1 rounded',
    },
    inherit: {
      default: 'text-current',
      outlined: 'text-current border border-current px-2 py-1 rounded',
      filled: 'text-current bg-current bg-opacity-10 px-2 py-1 rounded',
    },
  };

  // Disabled state
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';

  const variantClasses = colorSchemes[color]?.[variant] || colorSchemes.primary[variant];
  const sizeClassList = sizeClasses[size];

  return [
    ...baseClasses,
    ...sizeClassList,
    variantClasses,
    disabledClasses,
  ].filter(Boolean).join(' ');
};

export const getAsteriskStyles = (
  color: LabelColor,
  disabled: boolean
) => {
  const asteriskColors = {
    primary: 'text-red-500',
    secondary: 'text-red-500',
    error: 'text-red-500',
    warning: 'text-red-500',
    info: 'text-red-500',
    success: 'text-red-500',
    inherit: 'text-red-500',
  };

  const disabledClasses = disabled ? 'opacity-50' : '';

  return [
    asteriskColors[color] || asteriskColors.primary,
    disabledClasses,
  ].filter(Boolean).join(' ');
};
