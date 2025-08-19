import React, { forwardRef, useState, useRef, useEffect } from "react";
import type { DropdownProps, DropdownOption } from "./Dropdown.types";
import {
  getDropdownStyles,
  getMenuStyles,
  getOptionStyles,
  getIconStyles,
  getArrowStyles,
  getLoadingStyles,
} from "./Dropdown.styles";

const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  variant = "outlined",
  size = "medium",
  color = "primary",
  disabled = false,
  loading = false,
  fullWidth = false,
  searchable = false,
  clearable = false,
  disableElevation = false,
  renderOption,
  noOptionsText = "No options available",
  className = "",
  ...otherProps
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const dropdownStyles = getDropdownStyles(variant, size, color, disabled, fullWidth, disableElevation);
  const menuStyles = getMenuStyles();
  const iconStyles = getIconStyles(size);
  const arrowStyles = getArrowStyles();
  const loadingStyles = getLoadingStyles();

  const selected = options.find(o => o.value === value);
  const filtered = searchable ? options.filter(o => o.label.toLowerCase().includes(searchValue.toLowerCase())) : options;

  const Icon = (opt: DropdownOption) =>
    opt.icon ? <span className={iconStyles}>{opt.icon}</span> :
    opt.Icon ? <span className={iconStyles}><opt.Icon /></span> : null;

  useEffect(() => {
    const outside = (e: MouseEvent) => dropdownRef.current && !dropdownRef.current.contains(e.target as Node) && setIsOpen(false);
    isOpen && document.addEventListener("mousedown", outside);
    return () => document.removeEventListener("mousedown", outside);
  }, [isOpen]);

  useEffect(() => { isOpen && searchable && searchRef.current?.focus(); }, [isOpen, searchable]);

  return (
    <div ref={dropdownRef} className={`relative ${fullWidth ? "w-full" : ""} ${className}`} {...otherProps}>
      <button
        type="button"
        className={`${dropdownStyles} ${isOpen ? "ring-2 ring-offset-2" : ""}`}
        disabled={disabled || loading}
        onClick={() => !disabled && !loading && setIsOpen(!isOpen)}
        onKeyDown={e => {
          if (disabled || loading) return;
          if (["Enter", " "].includes(e.key)) { e.preventDefault(); setIsOpen(!isOpen); }
          if (e.key === "Escape") setIsOpen(false);
          if (e.key === "ArrowDown") { e.preventDefault(); !isOpen && setIsOpen(true); }
        }}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="flex items-center justify-between w-full">
          <span className="flex items-center gap-2">
            {selected && Icon(selected)}
            <span className="truncate">{selected ? selected.label : placeholder}</span>
          </span>

          <span className="flex items-center gap-2">
            {clearable && selected && !disabled && !loading && (
              <button type="button" className="hover:bg-gray-100 rounded p-0.5" onClick={e => { e.stopPropagation(); onChange?.(null as any); }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
            )}
            {loading && (
              <span className={loadingStyles}>
                <svg className={`${iconStyles} animate-spin`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                </svg>
              </span>
            )}
            <svg className={`${arrowStyles} ${isOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
            </svg>
          </span>
        </span>
      </button>

      {isOpen && (
        <div className={menuStyles} role="listbox">
          {searchable && (
            <div className="px-3 py-2">
              <input ref={searchRef} type="text" className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search..." value={searchValue} onChange={e => setSearchValue(e.target.value)} onClick={e => e.stopPropagation()} />
            </div>
          )}
          {filtered.length ? filtered.map(o => (
            <div key={o.value}
              className={getOptionStyles(o.disabled || false, o.value === value)}
              onClick={() => !o.disabled && (onChange?.(o.value), setIsOpen(false), setSearchValue(""))}
              role="option" aria-selected={o.value === value} aria-disabled={o.disabled}>
              {renderOption ? renderOption(o) : <span className="flex items-center gap-2">{Icon(o)}<span>{o.label}</span></span>}
            </div>
          )) : <div className="px-4 py-2 text-sm text-gray-500">{noOptionsText}</div>}
        </div>
      )}
    </div>
  );
});

Dropdown.displayName = "Dropdown";
export default Dropdown;
