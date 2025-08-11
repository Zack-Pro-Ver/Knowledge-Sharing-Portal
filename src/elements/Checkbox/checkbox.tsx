import React from "react";

type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  className = "",
  ...props
}) => (
  <input
    type="checkbox"
    checked={checked}
    onChange={onChange}
    className={`w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-2 cursor-pointer ${className}`}
    {...props}
  />
);

export default Checkbox;
