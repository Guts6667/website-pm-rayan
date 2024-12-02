import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";

export const locales = ["en", "fr"];

export default getMessages(async ({ locale }) => {
  if (!locales.includes(locale)) notFound();

  return {
   
    messages: (await import(`/messages/${locale}.json`)).default,
  };
});
