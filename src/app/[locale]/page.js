
import { setRequestLocale } from "next-intl/server";
import HeroHome from "../components/(home)/heroHome";
import { useTranslations } from "next-intl";

export default function Home({params: {locale}}) {
  setRequestLocale(locale);
  const t = useTranslations('Homepage');

  return (
    <>
      <HeroHome />
    </>
  );
}
