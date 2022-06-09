import React, { FunctionComponent } from "react";
import { Category } from "../type";

const NavItem: FunctionComponent<{
  value: Category | "all";
  handleFilterCategory: Function;
  active: Category | "all";
}> = ({ value, handleFilterCategory, active }) => {
  let className = "capitalize cursor-pointer hover:text-green";
  active === value
    ? (className += " text-green  border-b-2 border-green-400")
    : null;
  return (
    <li className={className} onClick={() => handleFilterCategory(value)}>
      {value}
    </li>
  );
};

const ProjectNavBar: FunctionComponent<{
  handleFilterCategory: Function;
  active: Category | "all";
}> = (props) => {
  return (
    <div className="flex p-3 space-x-3 overflow-x-auto list-none">
      <NavItem value="all" {...props} />
      <NavItem value="react" {...props} />
      <NavItem value="mongo" {...props} />
      <NavItem value="next" {...props} />
      <NavItem value="node" {...props} />
      <NavItem value="express" {...props} />
    </div>
  );
};

export default ProjectNavBar;
