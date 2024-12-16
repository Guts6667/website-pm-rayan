import React from "react";
import { useTranslations } from "next-intl";

import FooterBanner from "../(footer)/FooterBanner";
import FooterNav from "../(footer)/FooterNav";


export default function Footer() {
  const t = useTranslations("Footer");
  return (
   <footer>
    <FooterBanner text={t("bannerText")} textSmall={t("bannerTextSmall")} title={t("bannerTitle")} button={ t("bannerButton") }  />
    <FooterNav />
   </footer>
  );
}
