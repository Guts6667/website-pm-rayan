"use client";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";

export default function AboutHero() {
  const t = useTranslations("AboutPage");

  return (
    <section className="w-full flex flex-col items-center gap-[24px] lg:gap-[48px]  min-h-[100vh] py-[24px] ">
      <div className="w-full py-[48px] lg:py-[96px]">
        <svg
          className="w-full h-auto"
          width="370"
          height="72"
          viewBox="0 0 370 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M55.3832 53.5H18.1832L10.4832 71H0.183203L31.8832 0.999995H41.7832L73.5832 71H63.0832L55.3832 53.5ZM51.8832 45.5L36.7832 11.2L21.6832 45.5H51.8832ZM131.125 34.7C135.192 35.8333 138.392 37.9 140.725 40.9C143.059 43.8333 144.225 47.5667 144.225 52.1C144.225 58.1667 141.925 62.8333 137.325 66.1C132.792 69.3667 126.159 71 117.425 71H84.0254V0.999995H115.425C123.425 0.999995 129.592 2.6 133.925 5.8C138.325 9 140.525 13.4333 140.525 19.1C140.525 22.7667 139.659 25.9333 137.925 28.6C136.259 31.2667 133.992 33.3 131.125 34.7ZM94.0254 9.1V31.5H114.525C119.659 31.5 123.592 30.5667 126.325 28.7C129.125 26.7667 130.525 23.9667 130.525 20.3C130.525 16.6333 129.125 13.8667 126.325 12C123.592 10.0667 119.659 9.1 114.525 9.1H94.0254ZM117.025 62.9C122.692 62.9 126.959 61.9667 129.825 60.1C132.692 58.2333 134.125 55.3 134.125 51.3C134.125 43.5 128.425 39.6 117.025 39.6H94.0254V62.9H117.025ZM191.309 71.8C184.242 71.8 177.876 70.2667 172.209 67.2C166.542 64.0667 162.076 59.7667 158.809 54.3C155.609 48.8333 154.009 42.7333 154.009 36C154.009 29.2667 155.609 23.1667 158.809 17.7C162.076 12.2333 166.542 7.96667 172.209 4.9C177.876 1.76667 184.242 0.2 191.309 0.2C198.309 0.2 204.642 1.76667 210.309 4.9C215.976 7.96667 220.409 12.2333 223.609 17.7C226.809 23.1 228.409 29.2 228.409 36C228.409 42.8 226.809 48.9333 223.609 54.4C220.409 59.8 215.976 64.0667 210.309 67.2C204.642 70.2667 198.309 71.8 191.309 71.8ZM191.309 62.9C196.442 62.9 201.042 61.7333 205.109 59.4C209.242 57.0667 212.476 53.8667 214.809 49.8C217.209 45.6667 218.409 41.0667 218.409 36C218.409 30.9333 217.209 26.3667 214.809 22.3C212.476 18.1667 209.242 14.9333 205.109 12.6C201.042 10.2667 196.442 9.1 191.309 9.1C186.176 9.1 181.509 10.2667 177.309 12.6C173.176 14.9333 169.909 18.1667 167.509 22.3C165.176 26.3667 164.009 30.9333 164.009 36C164.009 41.0667 165.176 45.6667 167.509 49.8C169.909 53.8667 173.176 57.0667 177.309 59.4C181.509 61.7333 186.176 62.9 191.309 62.9ZM272.693 71.8C263.36 71.8 256.093 69.1333 250.893 63.8C245.693 58.4667 243.093 50.8 243.093 40.8V0.999995H253.093V40.4C253.093 55.4 259.66 62.9 272.793 62.9C279.193 62.9 284.093 61.0667 287.493 57.4C290.893 53.6667 292.593 48 292.593 40.4V0.999995H302.293V40.8C302.293 50.8667 299.693 58.5667 294.493 63.9C289.293 69.1667 282.027 71.8 272.693 71.8ZM335.425 9.7H311.425V0.999995H369.325V9.7H345.325V71H335.425V9.7Z"
            fill="none"
            className="fill-orange dark:fill-yellow"
          />
        </svg>
      </div>
      <div className="w-full px-[24px] lg:px-[48px] flex flex-col lg:flex-row-reverse items-center justify-center lg:justify-between lg:items-start gap-[24px]">
        <div className="relative w-full flex justify-center lg:grow lg:sticky lg:top-[96px]  lg:justify-end">
          <img
            className="max-w-[500px] lg:max-w-[600px]  aspect-[3/4] overflow-hidden  object-cover object-center rounded-[12px] "
            src={"/img/picture-rayan.png"}
            alt={"Photo Rayan"}
          />
        </div>

        <div className="uppercase  flex  flex-col gap-[24px] lg:grow lg:w-full ">
          <p className="text-[24px] lg:text-[36px] ">{t("heroText1")}</p>
          <p className="text-[24px] lg:text-[36px] opacity-50">
            {t("heroText2")}
          </p>
          <p className="text-[24px] lg:text-[36px] opacity-50">
            {t("heroText3")}
          </p>
          <p className="text-[24px] lg:text-[36px] opacity-50">
            {t("heroText4")}
          </p>
        </div>
      </div>
    </section>
  );
}
