
import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { use } from "react";
import Hero from "../components/(home)/Hero";
import HomeAbout from "../components/(home)/HomeAbout";
import HomeProjects from "../components/(home)/HomeProjects";

export default function Home({ params }) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations('HomePage');

  return (
    <main className={"flex flex-col gap-[48px]"}>
     <Hero />
     <HomeAbout t={t} />
     <HomeProjects />
    </main>
  );
}