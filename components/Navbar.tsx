import Link from "next/link";
import { useRouter } from "next/router";
import React, { FunctionComponent, useEffect, useState } from "react";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>("");

  const { pathname } = useRouter();

  const NavItem: FunctionComponent<{
    activeItem: string;
    setActiveItem: (value: React.SetStateAction<string>) => void;
    name: string;
    route: string;
  }> = ({ activeItem, setActiveItem, name, route }) => {
    return activeItem !== name ? (
      <Link href={route}>
        <a>
          <span
            onClick={() => setActiveItem(name)}
            className="hover:text-green"
          >
            {name}
          </span>
        </a>
      </Link>
    ) : null;
  };

  useEffect(() => {
    pathname === "/"
      ? setActiveItem("About")
      : pathname === "/projects"
      ? setActiveItem("Projects")
      : pathname === "/resume"
      ? setActiveItem("Resume")
      : null;
  }, []);

  return (
    <div className="flex justify-between px-5 py-3 my-3">
      <span className="flex space-x-3 text-xl font-bold border-b-4 border-green-400 text-green font-lg md:text-2xl">
        {activeItem}
      </span>
      <div className="space-x-3 text-lg font-semibold ">
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="About"
          route="/"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Projects"
          route="/projects"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Resume"
          route="/resume"
        />
      </div>
    </div>
  );
};

export default Navbar;
