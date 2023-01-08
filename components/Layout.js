import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="pl-[2rem] pr-[1rem]">
      <Navbar />
      <main className="bg-[#f8f8f4] dark:bg-[#191917]">{children}</main>
    </div>
  );
};

export default Layout;
