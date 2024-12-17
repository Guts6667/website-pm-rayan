import ProjectsGallery from "@/app/components/(projects)/ProjectsGallery";
import ProjectsTitle from "@/app/components/(projects)/ProjectsTitle";
import { setRequestLocale } from "next-intl/server";
import React, { use } from "react";

export default function Projects({ params }) {
  const locale = use(params);
  setRequestLocale(locale);
  return (
    <main className="flex flex-col items-center gap-[24px] lg:gap-[48px] py-[48px] min-h-[100vh] ">
      <ProjectsTitle />
      <ProjectsGallery locale={locale} />
    </main>
  );
}
