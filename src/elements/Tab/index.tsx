import React from "react";
import type { TabsProps } from "./Tab.types";
import { tabClasses, getTabStyles } from "./Tab.styles";
import Button from "../Button";

const Tab: React.FC<TabsProps> = ({ tabs, activeIndex, onTabChange, className }) => {
  return (
    <nav className={`${tabClasses.root} ${className || ""}`}>
      {tabs.map((tab, index) => (
        <Button
          key={index}
          className={getTabStyles(index === activeIndex)}
          onClick={() => onTabChange(index)}
        >
          {tab.label}
        </Button>
      ))}
    </nav>

  );
};

export default Tab;
