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
          <span className="text-[12px]">PARIS - NICE</span>
          <span className="text-[12px]">FRANCE</span>
          <a href="mailto:chambet.dev@gmail.com" className="m-0 text-[10px]">
            chambet.dev@gmail.com
          </a>
        </div>
        <nav className="w-full lg:grow">
          <ul className="flex flex-col gap-[6px] uppercase">
            <li>
              <Link href="/">{t("home")} </Link>
            </li>

            <li>
              <Link href="/about">{t("about")} </Link>
            </li>
            <li>
              <Link href="/projects">{t("projects")} </Link>
            </li>
            <li>
              <Link href="/contact">{t("contact")} </Link>
            </li>
          </ul>
        </nav>
      </div>
      <span className="bg-black dark:bg-white rounded-full h-[0.5px] px-[24px] lg:px-[48px]  "></span>

      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-[24px] text-[10px] px-[24px] lg:px-[48px]  ">
        <div className="w-full flex flex-col lg:grow gap-[6px] text-[10px]  ">
          <a href="https://github.com/Guts6667" target="_blank">
            GITHUB
          </a>
          <a
            href="https://www.linkedin.com/in/rayan-chambet-27aa941a8/"
            target="_blank"
          >
            LINKEDIN
          </a>
        </div>
        <span className="w-full lg:grow">{t("copyright")}</span>
      </div>
      {/* <div className="w-full flex justify-center items-center">
        <span className="text-orange dark:text-yellow text-6xl md:text-8xl lg:text-9xl xl:text-[14em] text-center inline-block whitespace-nowrap m-0">
          RAYAN CHAMBET
        </span>
      </div> */}
      <div className="w-full flex items-center justify-center">
        <img src="/img/svg-rayan.svg" alt=""  className="w-full h-auto"/>
      </div>
    </div>
  );
}
