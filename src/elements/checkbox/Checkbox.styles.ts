import type { CheckboxSize, CheckboxColor } from './Checkbox.types';

export const getCheckboxStyles = (
  checkboxSize: CheckboxSize,
  color: CheckboxColor,
  disabled: boolean,
  checked: boolean
) => {
  const baseClasses = [
    'relative',
    'inline-flex',
    'items-center',
    'justify-center',
    'cursor-pointer',
    'transition-all',
    'duration-200',
    'ease-in-out',
    'focus:outline-none',
    'focus-visible:ring-2',
    'focus-visible:ring-offset-2',
    'disabled:cursor-not-allowed',
    'disabled:opacity-60',
  ];

  // Size classes for checkbox
  const sizeClasses = {
    small: ['w-4', 'h-4', 'rounded'],
    medium: ['w-5', 'h-5', 'rounded'],
    large: ['w-6', 'h-6', 'rounded-md'],
  };

  // Color schemes
  const colorSchemes = {
    primary: {
      base: 'border-gray-300',
      checked: 'bg-blue-600 border-blue-600',
      hover: 'hover:border-blue-400',
      focus: 'focus-visible:ring-blue-500',
    },
    secondary: {
      base: 'border-gray-300',
      checked: 'bg-gray-600 border-gray-600',
      hover: 'hover:border-gray-400',
      focus: 'focus-visible:ring-gray-500',
    },
    error: {
      base: 'border-gray-300',
      checked: 'bg-red-600 border-red-600',
      hover: 'hover:border-red-400',
      focus: 'focus-visible:ring-red-500',
    },
    warning: {
      base: 'border-gray-300',
      checked: 'bg-amber-600 border-amber-600',
      hover: 'hover:border-amber-400',
      focus: 'focus-visible:ring-amber-500',
    },
    info: {
      base: 'border-gray-300',
      checked: 'bg-cyan-600 border-cyan-600',
      hover: 'hover:border-cyan-400',
      focus: 'focus-visible:ring-cyan-500',
    },
    success: {
      base: 'border-gray-300',
      checked: 'bg-green-600 border-green-600',
      hover: 'hover:border-green-400',
      focus: 'focus-visible:ring-green-500',
    },
    default: {
      base: 'border-gray-300',
      checked: 'bg-gray-800 border-gray-800',
      hover: 'hover:border-gray-400',
      focus: 'focus-visible:ring-gray-500',
    },
  };

  const colorScheme = colorSchemes[color] || colorSchemes.default;
  const sizeClassList = sizeClasses[checkboxSize];

  const checkboxClasses = [
    ...baseClasses,
    ...sizeClassList,
    'border-2',
    checked ? colorScheme.checked : colorScheme.base,
    !disabled ? colorScheme.hover : '',
    !disabled ? colorScheme.focus : '',
  ].filter(Boolean).join(' ');

  return checkboxClasses;
};

export const getCheckIconStyles = (checkboxSize: CheckboxSize) => {
  const iconSizes = {
    small: 'w-2.5 h-2.5',
    medium: 'w-3 h-3',
    large: 'w-4 h-4',
  };

  return iconSizes[checkboxSize];
};

export const getLabelStyles = (labelPlacement: 'end' | 'start' | 'top' | 'bottom') => {
  const placementClasses = {
    end: 'flex items-center gap-2',
    start: 'flex items-center gap-2 flex-row-reverse',
    top: 'flex flex-col items-center gap-1',
    bottom: 'flex flex-col-reverse items-center gap-1',
  };

  return placementClasses[labelPlacement] || placementClasses.end;
};

export const getIndeterminateStyles = () => {
  return 'bg-current rounded-sm';
};
