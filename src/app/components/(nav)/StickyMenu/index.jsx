"use client";
import React, { useEffect, useState } from "react";
import LangSwitch from "../LangSwitch";
import { usePathname } from "next/navigation";
import ThemeToggleButton from "../ThemeButton";

const StickyMenu = () => {
  const [language, setLanguage] = useState(undefined);
  let path = usePathname();

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
    <header className="flex gap-[6px] items-center px-[24px] lg:px-[48px] py-[24px] sticky top-0 self-center w-full ">
      <LangSwitch language={language} />
      <ThemeToggleButton />
    </header>
  );
};

export default StickyMenu;
