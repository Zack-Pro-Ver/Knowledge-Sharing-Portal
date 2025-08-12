import type { ImageVariant, ImageSize, ImageFit } from './Image.types';

export const getImageStyles = (
  variant: ImageVariant,
  size: ImageSize,
  fit: ImageFit
) => {
  const baseClasses = [
    'block',
    'max-w-full',
    'h-auto',
    'object-center',
    'transition-all',
    'duration-200',
    'ease-in-out',
  ];

  // Size classes
  const sizeClasses = {
    small: ['w-16', 'h-16'],
    medium: ['w-32', 'h-32'],
    large: ['w-64', 'h-64'],
    full: ['w-full', 'h-full'],
  };

  // Variant classes
  const variantClasses = {
    rounded: ['rounded-lg'],
    circle: ['rounded-full'],
    square: ['rounded-none'],
  };

  // Object fit classes
  const fitClasses = {
    cover: ['object-cover'],
    contain: ['object-contain'],
    fill: ['object-fill'],
    none: ['object-none'],
    'scale-down': ['object-scale-down'],
  };

  return [
    ...baseClasses,
    ...sizeClasses[size],
    ...variantClasses[variant],
    ...fitClasses[fit],
  ].join(' ');
};

export const getImageContainerStyles = (size: ImageSize) => {
  const containerSizes = {
    small: 'w-16 h-16',
    medium: 'w-32 h-32',
    large: 'w-64 h-64',
    full: 'w-full h-full',
  };

  return `relative overflow-hidden ${containerSizes[size]}`;
};

export const getPlaceholderStyles = () => {
  return [
    'absolute',
    'inset-0',
    'flex',
    'items-center',
    'justify-center',
    'bg-gray-100',
    'text-gray-400',
    'animate-pulse',
  ].join(' ');
};

export const getFallbackStyles = () => {
  return [
    'absolute',
    'inset-0',
    'flex',
    'items-center',
    'justify-center',
    'bg-gray-200',
    'text-gray-500',
    'text-sm',
    'font-medium',
  ].join(' ');
};
