
import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { use } from "react";
import Hero from "../components/(home)/Hero";
import HomeAbout from "../components/(home)/HomeAbout";
import HomeProjects from "../components/(home)/HomeProjects";
import HomeSkills from "../components/(home)/HomeSkills";
import HomeFollow from "../components/(home)/HomeFollow";

export default function Home({ params }) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations('HomePage');
  const sectionHeadContent = {
    title: t("titleProjects"),
    tagline: t("taglineProjects"),
    buttonText: t("buttonProjects")
  }


  return (
    <main className={"flex flex-col gap-[48px]"}>
     <Hero />
     <HomeAbout t={t} />
     <HomeProjects locale={locale} content={sectionHeadContent}/>
     <HomeSkills t={t} />
     <HomeFollow t={t} />
    </main>
  );
}