import AboutHero from "@/app/components/(about)/AboutHero";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import React from "react";
import { use } from "react";

export default function About({ params }) {
  const { locale } = use(params);

  setRequestLocale(locale);

  const t = useTranslations("AboutPage");

  return (
    
    <main>
      <AboutHero t={t} />
    </main>
  );
}
