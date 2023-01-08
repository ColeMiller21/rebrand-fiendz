import React from "react";
import { BsSun, BsMoonStars } from "react-icons/bs";
import { IconContext } from "react-icons";

const ToggleSwitch = ({ toggleTheme, theme }) => {
  return (
    <div className="flex items-center justify-center w-full gap-[5px]">
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

export default ToggleSwitch;
