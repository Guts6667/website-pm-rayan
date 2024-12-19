"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function FooterNav() {
  const t = useTranslations("Footer");

  return (
    <div className="flex flex-col gap-[24px] pt-[48px] ">
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-[24px] px-[24px] lg:px-[48px]  ">
        <div className="w-full flex flex-col  lg:grow">
          <span className="">PARIS - NICE</span>
          <span className="">FRANCE</span>
          <a
            href="mailto:chambet.dev@gmail.com"
            className="m-0 hover:text-orange dark:hover:text-yellow transition-all duration-300 block"
          >
            chambet.dev@gmail.com
          </a>
        </div>
        <nav className="w-full lg:grow">
          <ul className="flex flex-col gap-[6px] uppercase">
            <li>
              <Link
                className="hover:text-orange dark:hover:text-yellow transition-all duration-300 block"
                href="/"
              >
                {t("home")}{" "}
              </Link>
            </li>

            <li>
              <Link
                className="hover:text-orange dark:hover:text-yellow transition-all duration-300 block"
                href="/about"
              >
                {t("about")}{" "}
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-orange dark:hover:text-yellow transition-all duration-300 block"
                href="/projects"
              >
                {t("projects")}{" "}
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-orange dark:hover:text-yellow transition-all duration-300 block"
                href="/contact"
              >
                {t("contact")}{" "}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <span className="bg-black dark:bg-white rounded-full h-[0.5px] px-[24px] lg:px-[48px]  "></span>

      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-[24px] text-[10px] px-[24px] lg:px-[48px]  ">
        <div className="w-full flex flex-col lg:grow gap-[6px] text-[12px]  ">
          <a
            className="hover:text-orange dark:hover:text-yellow transition-all duration-300 block"
            href="https://github.com/Guts6667"
            target="_blank"
          >
            GITHUB
          </a>
          <a
            className="hover:text-orange dark:hover:text-yellow transition-all duration-300 block"
            href="https://www.linkedin.com/in/rayan-chambet-27aa941a8/"
            target="_blank"
          >
            LINKEDIN
          </a>
        </div>
        <span className="w-full lg:grow text-[12px]">{t("copyright")}</span>
      </div>
      <div className="w-full flex items-center justify-center">
        <img src="/img/svg-rayan.svg" alt="" className="w-full h-auto" />
      </div>
    </div>
  );
}
