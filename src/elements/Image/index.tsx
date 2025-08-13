import React, { forwardRef, useState } from "react";
import type { ImageProps } from "./Image.types";
import {
  getImageStyles,
  getImageContainerStyles,
  getPlaceholderStyles,
  getFallbackStyles,
} from "./Image.styles";

const Image = forwardRef<HTMLImageElement, ImageProps>((props, ref) => {
  const {
    variant = "rounded",
    size = "medium",
    fit = "cover",
    src,
    alt,
    width,
    height,
    className = "",
    placeholder,
    fallback = "Image not found",
    onError,
    onLoad,
    ...otherProps
  } = props;

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const imageStyles = getImageStyles(variant, size, fit);
  const containerStyles = getImageContainerStyles(size);
  const placeholderStyles = getPlaceholderStyles();
  const fallbackStyles = getFallbackStyles();

  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    onError?.();
  };

  return (
    <div className={`${containerStyles} ${className}`}>
      {!hasError && (
        <img
          ref={ref}
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={imageStyles}
          onLoad={handleLoad}
          onError={handleError}
          {...otherProps}
        />
      )}

      {isLoading && !hasError && (
        <div className={placeholderStyles}>
          {placeholder || (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.5-1.5"
              />
            </svg>
          )}
        </div>
      )}

      {hasError && (
        <div className={fallbackStyles}>
          <svg
            className="w-8 h-8 mb-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <span>{fallback}</span>
        </div>
      )}
    </div>
  );
});

Image.displayName = "Image";

export default Image;
