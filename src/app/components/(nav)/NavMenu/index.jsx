

import React from "react";
import { usePathname } from "next/navigation";
import { Link } from "@/i18n/routing";

export default function NavMenu({ language, isActive }) {
  const pathname = usePathname();

  return (
    <nav
      className={`${
        isActive ? "animate-slideDown" : "animate-slideUp hidden "
      } fixed z-[60] bg-white-transparent dark:bg-black-transparent w-full flex flex-col h-[65vh] lg:h-[40vh]  py-[96px] px-[24px] lg:px-[48px] gap-[6px] lg:gap-[12px] items-center justify-center text-[36px] lg:text-[48px] text-center dark:text-secondary backdrop-blur-md rounded-md`}
    >
      <ul className="flex flex-col gap-4 group">
        <li>
          <Link
            className={`hover:text-orange dark:hover:text-yellow transition-all duration-300 ${
              pathname === `/${language}`
                ? "line-through decoration-2 decoration-orange dark:decoration-yellow"
                : "opacity-100 group-hover:opacity-50"
            }`}
            href="/"
          >
            {language === "en" ? "HOME" : "ACCUEIL"}
          </Link>
        </li>
        <li>
          <Link
            className={`hover:text-orange dark:hover:text-yellow transition-all duration-300 ${
              pathname.includes("/about")
                ? "line-through decoration-2 decoration-orange dark:decoration-yellow"
                : "opacity-100 group-hover:opacity-50"
            }`}
            href="/about" 
          >
            {language === "en" ? "ABOUT" : "À PROPOS"}
          </Link>
        </li>
        <li>
          <Link
            className={`hover:text-orange dark:hover:text-yellow transition-all duration-300 ${
              pathname === "/projects"
                ? "line-through decoration-2 decoration-orange dark:decoration-yellow"
                : "opacity-100 group-hover:opacity-50"
            }`}
            href="/projects"
          >
            {language === "en" ? "PROJECTS" : "PROJETS"}
          </Link>
        </li>
        <li>
          <Link
            className={`hover:text-orange dark:hover:text-yellow transition-all duration-300 ${
              pathname === "/contact"
                ? "line-through decoration-2 decoration-orange dark:decoration-yellow"
                : "opacity-100 group-hover:opacity-50"
            }`}
            href="/contact"
          >
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
}