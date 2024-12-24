"use client";
import React from "react";
import HeroImg from "../HeroImage";
import { useTranslations } from "next-intl";
import InfiniteText from "../InfiniteText";


export default function Hero( ) {
  const t = useTranslations("HomePage");



  return (
    <section className={`light:bg-secondary dark:bg-primary min-h-[100vh] h-fit flex flex-col justify-center items-center gap-[6px] px-[24px] py-[48px] overflow-hidden z-10`}>
      <div className="relative w-full max-w-[400px] aspect-[4/3] ">
        <HeroImg src="/img/picture-rayan.png" alt="Rayan" />
        <p className="text-primary light:text-secondary text-center absolute end-1.5">{t("heroText")}</p>
      </div>
    <InfiniteText />
    </section>
  );
}
