import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false
    },
    resources: {
      en: {
        translation: {
          'About 12': 'ABOUT 12',
          'About 13': 'ABOUT 13'
        }
      }
    }
  })

export default i18n
