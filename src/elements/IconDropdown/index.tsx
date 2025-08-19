import React from 'react';

interface IconDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  items: Array<{ label: string; action: () => void }>;
}

const IconDropdown: React.FC<IconDropdownProps> = ({ isOpen, onClose, title, items }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute right-8 top-full mt-1 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-50 pl-2">
      <div className="p-2">
        <h3 className="font-semibold text-gray-700">{title}</h3>
        <ul className="mt-2">
          {items.map((item, index) => (
            <li key={index} className="py-1 px-2 hover:bg-gray-100 cursor-pointer" onClick={item.action}>
              {item.label}
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-gray-300" />
      <div className="p-2">
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          Close
        </button>
      </div>
    </div>
  );
};

export default IconDropdown;
