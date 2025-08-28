import type { TabClasses } from "./Tab.types";

export const tabClasses: TabClasses = {
  root: "flex space-x-8 px-6",
  tab: "py-4 !px-1 border-b-2",
  active: "border-blue-500 text-blue-600",
  inactive: "border-transparent text-gray-500 hover:text-gray-700",
};

export const getTabStyles = (active: boolean) => {
  return [
    tabClasses.tab,
    active ? tabClasses.active : tabClasses.inactive,
  ].join(" ");
};
