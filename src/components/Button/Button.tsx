import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ className = '', children, ...rest }) => (
  <button className={`p-2 text-sm rounded-lg focus:outline-none ${className}`} {...rest}>
    {children}
  </button>
);

export default Button;
