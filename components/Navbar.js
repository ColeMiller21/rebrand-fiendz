import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import NavigationMenu from "./Navbar/NavigationMenu";
import Link from "next/link";
import { BsSun, BsMoonStars } from "react-icons/bs";
import { IconContext } from "react-icons";

const links = [
  { title: "Blog", href: "/blog" },
  { title: "FiendzVerse", href: "https://dev.fafz.app" },
];

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(null);

  const toggleTheme = () => {
    if (currentTheme === "dark") {
      setTheme("light");
      setCurrentTheme("light");
    } else {
      setTheme("dark");
      setCurrentTheme("dark");
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    setMounted(true);
    if (mounted) {
      setCurrentTheme(theme === "system" ? systemTheme : theme);
    }
  }, [mounted]);

  return (
    <>
      <nav
        id="navbar"
        className="w-min-screen h-[50px] top-0 sticky flex justify-between items-center relative above-all"
      >
        <div className="">
          <div className="z-101">
            <h1>LOGO</h1>
          </div>
        </div>
        <div className="hidden md:flex gap-[1rem]">
          <ul className="flex gap-[1rem] text-[1rem]">
            {links.map((link) => {
              return (
                <li
                  key={`${link.title}`}
                  className="link-hover-light dark:link-hover-dark p-[4px] px-[6px] rounded transition-background duration-500 cursor-pointer"
                >
                  <Link href="/">{link.title}</Link>
                </li>
              );
            })}
          </ul>
          <ToggleSwitch toggleTheme={toggleTheme} theme={currentTheme} />
        </div>
        <div className="md:hidden flex p-[4px] px-[6px]">
          <ToggleSwitch toggleTheme={toggleTheme} theme={currentTheme} />
          <div className={`overflow-hidden w-[60px]`} onClick={toggleMenu}>
            <MenuButton menuOpen={menuOpen} theme={currentTheme} />
          </div>
        </div>
        {/* <NavigationMenu menuOpen={menuOpen} /> */}
      </nav>
    </>
  );
};

export default Navbar;

const ToggleSwitch = ({ toggleTheme, theme }) => {
  return (
    <div className="flex items-center justify-center w-full">
      <IconContext.Provider
        value={{
          style: { verticalAlign: "middle", width: "20px", height: "20px" },
        }}
      >
        <button type="button" aria-label="theme switcher" onClick={toggleTheme}>
          {theme === "dark" ? <BsSun /> : <BsMoonStars />}
        </button>
      </IconContext.Provider>
    </div>
  );
};

const MenuButton = ({ menuOpen, theme }) => {
  return (
    <>
      <svg
        className={`ham hamRotate ham4 ${menuOpen ? "active" : ""}`}
        viewBox="0 0 100 100"
        width="50"
      >
        <path
          className="line top"
          style={{ stroke: theme === "dark" ? "white" : "black" }}
          d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
        />
        <path
          className="line middle"
          d="m 70,50 h -40"
          style={{ stroke: theme === "dark" ? "white" : "black" }}
        />
        <path
          className="line bottom"
          style={{ stroke: theme === "dark" ? "white" : "black" }}
          d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
        />
      </svg>
    </>
  );
};
