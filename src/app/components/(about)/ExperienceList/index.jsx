import { useTranslations } from "next-intl";
import React from "react";
import ExperienceComponent from "../ExperienceComponent";

export default function ExperienceList() {
    const t = useTranslations("AboutPage")
  return (
    <>
      <span className="h-[0.5px] bg-black/50 dark:bg-white/50 w-full rounded-full "></span>
      <div className="flex flex-col lg:flex-row gap-[24px] py-[24px] lg:py-[48px]  ">
        <h2 className="uppercase tracking-[10px] font-medium text-orange dark:text-yellow text-[14px] lg:flex lg:grow w-full">
          {t("titleExperiences")}
        </h2>
        <div className="w-full flex flex-col gap-[24px] lg:grow  ">
            <ExperienceComponent title={t("experience1.title")} company={t("experience1.company")} date={t("experience1.date")} />
            <ExperienceComponent title={t("experience2.title")} company={t("experience2.company")} date={t("experience2.date")} />
            <ExperienceComponent title={t("experience3.title")} company={t("experience3.company")} date={t("experience3.date")} />
        </div>
      </div>
    </>
  );
}
