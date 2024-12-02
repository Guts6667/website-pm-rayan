
import { setRequestLocale } from "next-intl/server";
import HeroHome from "../components/(home)/HeroHome";
import { useTranslations } from "next-intl";
import { use } from "react";

export default function Home({ params }) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations('Homepage');

  return (
    <div className={""}>
      <HeroHome />
    </div>
  );
}