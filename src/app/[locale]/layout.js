import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from "../../../i18n/routing";
import StickyMenu from "../components/(nav)/StickyMenu";
import "./globals.css";
import { ThemeProvider } from "../../utils/themeContext";
import Cursor from '../components/Cursor';

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  if (!routing.locales.includes(locale)) {
    notFound();
  }
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
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
      <body className="light:bg-white dark:bg-black">
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <Cursor />
            <StickyMenu />
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}