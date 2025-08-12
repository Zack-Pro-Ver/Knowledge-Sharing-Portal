import type { AvatarSize, AvatarVariant } from './Avatar.types';

export const getAvatarStyles = (
  size: AvatarSize,
  variant: AvatarVariant,
  hasImage: boolean,
  backgroundColor?: string,
  textColor?: string
) => {
  const baseClasses = [
    'relative',
    'inline-flex',
    'items-center',
    'justify-center',
    'overflow-hidden',
    'font-medium',
    'select-none',
  ];

  // Use custom colors if provided, otherwise use defaults
  const colorClasses = backgroundColor && textColor 
    ? [] 
    : ['bg-gray-300', 'text-gray-600'];

  // Size classes
  const sizeClasses = {
    small: ['w-8', 'h-8', 'text-xs'],
    medium: ['w-12', 'h-12', 'text-sm'],
    large: ['w-16', 'h-16', 'text-base'],
  };

  // Shape classes
  const shapeClasses = {
    circular: 'rounded-full',
    rounded: 'rounded-lg',
    square: 'rounded-none',
  };

  // Image classes
  const imageClasses = hasImage ? ['bg-cover', 'bg-center'] : [];

  const classes = [
    ...baseClasses,
    ...colorClasses,
    ...sizeClasses[size],
    shapeClasses[variant],
    ...imageClasses,
  ];

  // Add custom styles if provided
  if (backgroundColor) {
    classes.push(backgroundColor);
  }
  if (textColor) {
    classes.push(textColor);
  }

  return classes.join(' ');
};

export const getImageStyles = () => {
  return 'absolute inset-0 w-full h-full object-cover';
};

export const getFallbackStyles = () => {
  return 'flex items-center justify-center w-full h-full';
};
