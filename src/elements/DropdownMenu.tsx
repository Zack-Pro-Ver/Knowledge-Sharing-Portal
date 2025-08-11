import type { PropsWithChildren } from "react";

interface DropdownMenuProps {
  isOpen: boolean;
}

const menuContainerClass ="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg focus:outline-none z-20";
const menuItemClass = "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100";

function DropdownMenu({ isOpen, children }: PropsWithChildren<DropdownMenuProps>) {
  if (!isOpen) return null;
  return (
    <div className={menuContainerClass}>
      <div className="py-1">{children}</div>
    </div>
  );
}

export { menuItemClass };
export default DropdownMenu;
