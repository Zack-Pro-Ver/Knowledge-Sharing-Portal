import type { CardVariant, CardSize } from './Card.types';

export const getCardStyles = (
  variant: CardVariant,
  size: CardSize,
  elevation: number,
  raised: boolean
) => {
  const baseClasses = [
    'relative',
    'box-border',
    'bg-white',
    'text-gray-900',
    'transition-all',
    'duration-200',
    'ease-in-out',
    'overflow-hidden',
  ];

  // Size classes
  const sizeClasses = {
    small: ['rounded-lg'],
    medium: ['rounded-xl'],
    large: ['rounded-2xl'],
  };

  // Variant classes
  const variantClasses = {
    elevation: [
      'shadow-sm',
      raised ? 'hover:shadow-lg' : '',
      `shadow-${elevation}`,
    ],
    outlined: [
      'border',
      'border-gray-300',
      raised ? 'hover:shadow-md' : '',
    ],
  };

  const sizeClassList = sizeClasses[size];
  const variantClassList = variantClasses[variant];

  return [
    ...baseClasses,
    ...sizeClassList,
    ...variantClassList,
  ].filter(Boolean).join(' ');
};

export const getCardHeaderStyles = (size: CardSize) => {
  const headerSizes = {
    small: ['px-4', 'py-3', 'text-sm'],
    medium: ['px-6', 'py-4', 'text-base'],
    large: ['px-8', 'py-6', 'text-lg'],
  };

  return [
    'flex',
    'items-center',
    'justify-between',
    'border-b',
    'border-gray-200',
    ...headerSizes[size],
  ].join(' ');
};

export const getCardContentStyles = (size: CardSize) => {
  const contentSizes = {
    small: ['px-4', 'py-3', 'text-sm'],
    medium: ['px-6', 'py-4', 'text-base'],
    large: ['px-8', 'py-6', 'text-lg'],
  };

  return [
    'flex-1',
    ...contentSizes[size],
  ].join(' ');
};

export const getCardFooterStyles = (size: CardSize) => {
  const footerSizes = {
    small: ['px-4', 'py-3', 'text-sm'],
    medium: ['px-6', 'py-4', 'text-base'],
    large: ['px-8', 'py-6', 'text-lg'],
  };

  return [
    'flex',
    'items-center',
    'justify-end',
    'gap-2',
    'border-t',
    'border-gray-200',
    ...footerSizes[size],
  ].join(' ');
};

export const getAvatarStyles = () => {
  return [
    'w-10',
    'h-10',
    'rounded-full',
    'bg-gray-300',
    'flex',
    'items-center',
    'justify-center',
    'text-gray-600',
    'font-semibold',
  ].join(' ');
};

export const getTitleStyles = () => {
  return [
    'font-semibold',
    'text-gray-900',
    'leading-tight',
  ].join(' ');
};

export const getSubheaderStyles = () => {
  return [
    'text-sm',
    'text-gray-600',
    'leading-tight',
  ].join(' ');
};
