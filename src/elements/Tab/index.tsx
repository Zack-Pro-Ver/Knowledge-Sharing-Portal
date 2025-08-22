import React from "react";
import type { TabsProps } from "./Tab.types";
import { tabClasses, getTabStyles } from "./Tab.styles";

const Tab: React.FC<TabsProps> = ({ tabs, activeIndex, onTabChange, className }) => {
  return (
    <nav className={`${tabClasses.root} ${className || ""}`}>
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={getTabStyles(index === activeIndex)}
          onClick={() => onTabChange(index)}
        >
          {tab.label}
        </button>
      ))}
    </nav>

  );
};

export default Tab;
