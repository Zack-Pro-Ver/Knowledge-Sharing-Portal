import { Dropdown } from "../../elements";
import Label from "../../elements/Label";
import { SideBarContents, sidebarOptions } from "./Sidebar.constant";
import { useState } from "react";

const Sidebar = () => {
  const [activeTitle, setActiveTitle] = useState<string>("Overview");
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleChange = (value: string | number) => {
    if (typeof value === "string") {
      setSelectedValue(value);
    }
  };

  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          {SideBarContents.map(
            ({ icon: Icon, title, length, path, variant }, index) => (
              <li
                key={index}
                onClick={() => setActiveTitle(title)}
                className={
                  variant === "link" && title === activeTitle
                    ? "transition-colors bg-blue-50 text-blue-600 border-r-2 border-blue-600"
                    : ""
                }
              >
                {variant === "link" ? (
                  <a
                    href={path}
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    {Icon && (
                      <Icon
                        className={`w-6 h-6 ${
                          title === activeTitle
                            ? "text-blue-600"
                            : "text-gray-500"
                        }`}
                      />
                    )}
                    {/* {<Icon color="text-blue-600" />} */}
                    <span
                      className={`flex-1 ms-3 whitespace-nowrap ${
                        title === activeTitle ? "text-blue-500" : ""
                      }`}
                    >
                      {title}
                    </span>
                    {length != undefined && length > 0 && (
                      <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                        {length}
                      </span>
                    )}
                  </a>
                ) : (
                  <>
                    <Label>{title}</Label>
                    <Dropdown
                      options={sidebarOptions}
                      value={selectedValue}
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </>
                )}
              </li>
            )
          )}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
