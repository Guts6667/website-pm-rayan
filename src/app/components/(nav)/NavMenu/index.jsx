import Link from "next/link";
import React from "react";

export default function NavMenu({ language, isActive }) {
  return (
    <nav
      className={`${
        isActive ? "animate-slideDown" : "animate-slideUp hidden "
      } fixed z-[60] bg-white-transparent dark:bg-black-transparent w-full flex flex-col h-[40vh] px-[24px] lg:px-[48px]  gap-[6px] lg:gap-[12px] items-center justify-center text-[36px] lg:text-[48px] text-center dark:text-secondary backdrop-blur-md rounded-md`}
    >
      <ul className="">
        <li
          className={` ${
            isActive
              ? "  transition delay-500 duration-1000 transition-opacity-0"
              : ""
          }`}
        >
          <Link href="/">{language == "en" ? "HOME" : "ACCUEIL"}</Link>
        </li>
        <li
          className={`  ${
            isActive ? " transition delay-500 animate-fadeIn" : ""
          }`}
        >
          <Link href="/about">{language == "en" ? "ABOUT" : "A PROPOS"} </Link>
        </li>
        <li
          className={`${isActive ? "transition delay-700 animate-fadeIn" : ""}`}
        >
          <Link href="/work">{language == "en" ? "PROJECTS" : "PROJETS"}</Link>
        </li>
        <li
          className={`${
            isActive ? "transition delay-1000 animate-fadeIn" : ""
          }`}
        >
          <Link href="/contact">CONTACT</Link>
        </li>
      </ul>
    </nav>
  );
}
