import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import StickyMenu from "../components/(nav)/StickyMenu";
import "./globals.css";
import { ThemeProvider } from "../../utils/themeContext";
import Cursor from "../components/Cursor";
import { Montserrat } from "next/font/google";
import { routing } from "@/i18n/routing";
import Footer from "../components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  display: "swap",
  style: ["italic", "normal"],
});

export default async function LocaleLayout({ children, params: { locale } }) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <meta
          name="description"
          content="Site web de Rayan Chambet, Technical Product Manager à Paris. Passionné par la résolution de problèmes et l'innovation pour des résultats impactants et durables."
        />
        <meta name="color-scheme" content="light dark" />
        <meta
          name="theme-color"
          content="#FCF6E6"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#141310"
          media="(prefers-color-scheme: dark)"
        />
      </head>
      <body
        className={`${montserrat.className} light:bg-white dark:bg-black  m-0`}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <Cursor />
            <StickyMenu />
            {children}
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
