import { NextIntlClientProvider } from "next-intl";
import { getMessages} from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "../../../i18n/routing";
import StickyMenu from "../components/(nav)/StickyMenu";
import "./globals.css";
import { ThemeProvider } from "../../utils/themeContext";
import Cursor from "../components/Cursor";


export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="bg-white dark:bg-black">
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <Cursor />
            <StickyMenu  />
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
