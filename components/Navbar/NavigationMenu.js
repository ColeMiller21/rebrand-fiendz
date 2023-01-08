import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const variants = {
  open: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    opacity: 0,
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const links = [
  { title: "Blog", href: "/blog" },
  { title: "FiendzVerse", href: "https://dev.fafz.app" },
];

const NavigationMenu = ({ menuOpen, t }) => {
  const router = useRouter();
  return (
    <>
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.2,
            },
          }}
          exit={{ opacity: 0 }}
          className={`min-full-height fixed bg-black dark:bg-white transition ease-in-out duration-700 absolute w-screen top-0 md:w-[500px] md:pr-[20%] md:right-0 ${
            menuOpen ? "opacity-100" : "opacity-0 "
          } mt-[50px] overflow-hidden`}
        >
          <div className="flex flex-col h-full p-0 md:pl-[3rem] md:pt-[2rem]">
            <div className="h-[60vh] w-screen md:w-full flex items-center justify-center md:justify-start">
              <motion.ul
                variants={variants}
                initial="closed"
                animate={menuOpen ? "open" : "closed"}
                className="h-full flex flex-col justify-around"
              >
                {links.map((link, i) => (
                  <motion.li
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    i={i}
                    key={i}
                    className={`text-[6vh] text-center md:text-left text-white dark:text-black cursor-pointer font-didot ${
                      router.pathname === link.path ? "italic underline" : ""
                    }`}
                  >
                    {link.title}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default NavigationMenu;
