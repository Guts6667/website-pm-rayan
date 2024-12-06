
import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { use } from "react";
import Hero from "../components/(home)/Hero";
import HomeAbout from "../components/(home)/HomeAbout";

export default function Home({ params }) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations('HomePage');

  return (
    <div className={""}>
     <Hero />
     <HomeAbout t={t} />
    </div>
  );
}