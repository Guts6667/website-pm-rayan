import { useTranslations } from "next-intl";
import React from "react";

export default function Contact() {
  const t = useTranslations("ContactPage");
  return (
    <main className="h-[100vh] flex flex-col justify-center gap-[24px] px-[24px] lg:px-[48px]">
      <p className="uppercase opacity-50">{t("title")}</p>
      <div className="flex flex-col">
        <a
          href="mailto:chambet.dev@gmail.com"
          className="uppercase text-[36px] lg:text-[80px] leading-none hover:text-orange dark:hover:text-yellow transition-all duration-300"
        >
          Email
        </a>
        <a
          href="tel:+33644167776"
          className="uppercase text-[36px] lg:text-[80px] leading-none hover:text-orange dark:hover:text-yellow transition-all duration-300"
        >
          {t("phone")}
        </a>
        <a
          href="https://github.com/Guts6667"
          target="_blank"
          className="uppercase text-[36px] lg:text-[80px] leading-none hover:text-orange dark:hover:text-yellow transition-all duration-300"
        >
          GitHub
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/rayan-chambet-27aa941a8/"
          className="uppercase text-[36px] lg:text-[80px] leading-none hover:text-orange dark:hover:text-yellow transition-all duration-300"
        >
          Linkedin
        </a>
      </div>
    </main>
  );
}
