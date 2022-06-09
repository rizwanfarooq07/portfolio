import React, { FunctionComponent } from "react";
import { Category } from "../type";

const NavItem: FunctionComponent<{
  value: string;
  setActive: Function;
  active: string;
}> = ({ value, setActive, active }) => {
  let className = "capitalize cursor-pointer hover:text-green";
  active === value
    ? (className += " text-green  border-b-2 border-green-400")
    : null;
  return (
    <li className={className} onClick={() => setActive(value)}>
      {value}
    </li>
  );
};

const AboutNavBar: FunctionComponent<{
  setActive: Function;
  active: string;
}> = (props) => {
  return (
    <div className="flex p-3 space-x-3 overflow-x-auto list-none">
      <NavItem value="Skills" {...props} />
      <NavItem value="What I Offer" {...props} />
    </div>
  );
};

export default AboutNavBar;
