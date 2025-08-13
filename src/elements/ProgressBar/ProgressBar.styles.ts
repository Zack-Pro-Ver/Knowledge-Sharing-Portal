import type { ProgressBarSize, ProgressBarColor } from './ProgressBar.types';

export const getProgressBarContainerStyles = (
  size: ProgressBarSize,
  fullWidth: boolean
) => {
  const baseClasses = [
    'bg-gray-200',
    'rounded-full',
    'overflow-hidden',
    fullWidth ? 'w-full' : 'w-48',
  ];

  const sizeClasses: Record<ProgressBarSize, string[]> = {
    small: ['h-2'],
    medium: ['h-3'],
    large: ['h-4'],
  };

  const sizeClassList = sizeClasses[size] || sizeClasses.medium;

  return [...baseClasses, ...sizeClassList].join(' ');
};

export const getProgressBarFillStyles = (
  color: ProgressBarColor,
  progress: number
) => {
  const colorClasses: Record<ProgressBarColor, string> = {
    primary: 'bg-blue-600',
    secondary: 'bg-gray-600',
    error: 'bg-red-600',
    warning: 'bg-amber-600',
    info: 'bg-cyan-600',
    success: 'bg-green-600',
    inherit: 'bg-current',
  };

  const colorClass = colorClasses[color] || colorClasses.primary;

  // Width is controlled inline in the component style attribute for smooth animation

  return `${colorClass} h-full rounded-full transition-all duration-300 ease-in-out`;
};
