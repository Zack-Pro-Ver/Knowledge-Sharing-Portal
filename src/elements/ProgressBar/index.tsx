import React, { forwardRef } from 'react';
import type { ProgressBarProps } from './ProgressBar.types';
import {
  getProgressBarContainerStyles,
  getProgressBarFillStyles,
} from './ProgressBar.styles';

const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>((props, ref) => {
  const {
    progress,
    size = 'medium',
    color = 'primary',
    fullWidth = false,
    className = '',
    ...otherProps
  } = props;

  const containerStyles = getProgressBarContainerStyles(size, fullWidth);
  const fillStyles = getProgressBarFillStyles(color, progress);

  // Clamp progress between 0 and 100
  const clampedProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <div
      ref={ref}
      className={`${containerStyles} ${className}`}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={clampedProgress}
      {...otherProps}
    >
      <div
        className={fillStyles}
        style={{ width: `${clampedProgress}%` }}
      />
    </div>
  );
});

ProgressBar.displayName = 'ProgressBar';

export default ProgressBar;
