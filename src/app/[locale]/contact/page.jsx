
import ContactHero from '@/app/components/(contact)/ContactHero'
import React from 'react'

export default function Contact({ params }) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations('ContactPage');
  return (
   <>
   <ContactHero />
   </>
  )
}
