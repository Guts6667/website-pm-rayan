"use client";
import { useTranslations } from "next-intl";
import React from "react";

export default function Intro({ intro, introGrey }) {
      const t = useTranslations("BlogPage");
  return (
    <section className="w-full px-[24px] lg:px-[48px] py-[24px] ">
      <p className="text-[24px] lg:text-[36px] ">
        {t("intro")} 
        <em className="opacity-50 not-italic"> {t("introGrey")}</em>
      </p>
    </section>
  );
}
