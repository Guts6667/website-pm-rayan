"use client";
import React, { useEffect, useState } from "react";
import LangSwitch from "../LangSwitch";
import { usePathname } from "next/navigation";
import ThemeToggleButton from "../ThemeButton";
import Link from "next/link";
import NavMenu from "../NavMenu";

const StickyMenu = () => {
  const [language, setLanguage] = useState(undefined);
  const [isActive, setIsActive] = useState(false);
  let path = usePathname();
  const handleMenu = () => {
    setIsActive(!isActive);
  };

  const toggleLangSwitch = () => {
    if (path.includes("/en")) {
      setLanguage("en");
    } else {
      setLanguage("fr");
    }
  };
  useEffect(() => {
    toggleLangSwitch();
  }, [path]);

  return (
    <>
      <header className="fixed z-[80] flex gap-[6px] items-center px-[24px] lg:px-[48px] py-[24px]  top-0 self-center w-full   ">
        <div className="flex flex-1 gap-[12px]">
          <h1 className="max-lg:hidden text-2xl font-medium">RAYAN CHAMBET</h1>
          <ThemeToggleButton />
        </div>

        <div
          onClick={handleMenu}
          className="flex flex-col gap-[6px] items-center align-center flex-2 active:scale-90 duration-600 ease-in-out hover:scale-105 transition-all "
        >
          <span className="w-[180px] h-[6px] rounded-[12px] mix-blend-difference bg-black dark:bg-white "></span>
          {language === "en" ? (
            <span className="text-sm font-light">{!isActive ? "Menu" : "Close"}</span>
          ) : (
            <span className="text-sm font-light">{!isActive  ? "Menu" : "Fermer"}</span>
          )}
        </div>
        <div className="flex flex-1 gap-[12px] items-center">
          <LangSwitch language={language} />
          <Link
            href="/contact"
            className="max-lg:hidden hover:text-orange dark:hover:text-yellow text-2xl font-medium transition-all duration-300"
          >
            CONTACT
          </Link>
        </div>
      </header>
      <NavMenu language={language} isActive={isActive} />
    </>
  );
};

export default StickyMenu;
