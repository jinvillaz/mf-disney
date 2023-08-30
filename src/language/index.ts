import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import en from './en.json'
import es from './es.json'

const resources = {
  en: {
    translation: en,
  },
  es: {
    translation: es,
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources,
  })

export const Languages = [
  { key: 'en', value: 'English' },
  { key: 'es', value: 'Spanish' },
]

export default i18n
