import React, { forwardRef, useState, useRef, useEffect } from 'react';
import type { DropdownProps, DropdownOption } from './Dropdown.types';
import {
  getDropdownStyles,
  getMenuStyles,
  getOptionStyles,
  getIconStyles,
  getArrowStyles,
  getLoadingStyles,
} from './Dropdown.styles';

const Dropdown = forwardRef<HTMLDivElement, DropdownProps>((props, ref) => {
  const {
    options,
    value,
    onChange,
    placeholder = 'Select an option',
    variant = 'outlined',
    size = 'medium',
    color = 'primary',
    disabled = false,
    loading = false,
    fullWidth = false,
    searchable = false,
    clearable = false,
    disableElevation = false,
    renderOption,
    noOptionsText = 'No options available',
    className = '',
    ...otherProps
  } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const dropdownStyles = getDropdownStyles(
    variant,
    size,
    color,
    disabled,
    fullWidth,
    disableElevation
  );

  const menuStyles = getMenuStyles();
  const iconStyles = getIconStyles(size);
  const arrowStyles = getArrowStyles();
  const loadingStyles = getLoadingStyles();

  const selectedOption = options.find(option => option.value === value);
  const filteredOptions = searchable
    ? options.filter(option =>
        option.label.toLowerCase().includes(searchValue.toLowerCase())
      )
    : options;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && searchable && searchRef.current) {
      searchRef.current.focus();
    }
  }, [isOpen, searchable]);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (disabled || loading) return;

    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault();
        setIsOpen(!isOpen);
        break;
      case 'Escape':
        setIsOpen(false);
        break;
      case 'ArrowDown':
        event.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        }
        break;
    }
  };

  const handleOptionClick = (option: DropdownOption) => {
    if (option.disabled) return;
    
    onChange?.(option.value);
    setIsOpen(false);
    setSearchValue('');
  };

  const handleClear = (event: React.MouseEvent) => {
    event.stopPropagation();
    onChange?.(null as any);
  };

  return (
    <div
      ref={dropdownRef}
      className={`relative ${fullWidth ? 'w-full' : ''} ${className}`}
      {...otherProps}
    >
      <button
        type="button"
        className={`${dropdownStyles} ${isOpen ? 'ring-2 ring-offset-2' : ''}`}
        disabled={disabled || loading}
        onClick={() => !disabled && !loading && setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-disabled={disabled || loading}
      >
        <span className="flex items-center justify-between w-full">
          <span className="flex items-center gap-2">
            {selectedOption?.icon && (
              <span className={iconStyles}>{selectedOption.icon}</span>
            )}
            <span className="truncate">
              {selectedOption?.label || placeholder}
            </span>
          </span>
          
          <span className="flex items-center gap-2">
            {clearable && selectedOption && !disabled && !loading && (
              <button
                type="button"
                className="hover:bg-gray-100 rounded p-0.5"
                onClick={handleClear}
                aria-label="Clear selection"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
            
            {loading && (
              <span className={loadingStyles}>
                <svg
                  className={`${iconStyles} animate-spin`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              </span>
            )}
            
            <svg
              className={`${arrowStyles} ${isOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </span>
      </button>

      {isOpen && (
        <div
          className={menuStyles}
          role="listbox"
          aria-multiselectable="false"
        >
          {searchable && (
            <div className="px-3 py-2">
              <input
                ref={searchRef}
                type="text"
                className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          )}
          
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <div
                key={option.value}
                className={getOptionStyles(
                  option.disabled || false,
                  option.value === value
                )}
                onClick={() => handleOptionClick(option)}
                role="option"
                aria-selected={option.value === value}
                aria-disabled={option.disabled}
              >
                {renderOption ? (
                  renderOption(option)
                ) : (
                  <span className="flex items-center gap-2">
                    {option.icon && <span className={iconStyles}>{option.icon}</span>}
                    <span>{option.label}</span>
                  </span>
                )}
              </div>
            ))
          ) : (
            <div className="px-4 py-2 text-sm text-gray-500">
              {noOptionsText}
            </div>
          )}
        </div>
      )}
    </div>
  );
});

Dropdown.displayName = 'Dropdown';

export default Dropdown;
