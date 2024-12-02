
import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { use } from "react";
import Hero from "../components/Home/Hero";

export default function Home({ params }) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations('Homepage');

  return (
    <div className={""}>
      <Hero />
    </div>
  );
}