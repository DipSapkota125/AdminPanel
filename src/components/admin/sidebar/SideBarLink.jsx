import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";

const linkClass =
  "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base";
const SideBarLink = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <div
        className={linkClass + (isExpanded ? " bg-neutral-700" : "")}
        onClick={item.children ? toggleExpand : undefined}
      >
        <span className="text-xl">{item.icon}</span>
        {item.label}
        {item.children && (
          <span className="ml-auto">
            {isExpanded ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
          </span>
        )}
      </div>
      {item.children && (
        <ul
          className={`pl-4 transition-all duration-500 ease-in-out ${
            isExpanded ? "max-h-64" : "max-h-0 overflow-hidden"
          }`}
        >
          {item.children.map((child) => (
            <li key={child.key}>
              <Link to={child.path} className={linkClass}>
                <span className="text-xl">{child.icon}</span>
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default SideBarLink;
