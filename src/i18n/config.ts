import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from './en.json';
import translationTH from './th.json';

// สร้าง resources object
export const resources = {
  en: {
    translation: translationEN,
  },
  th: {
    translation: translationTH,
  },
} as const;

// Same key as the old site, so returning visitors keep their language
export const LANGUAGE_STORAGE_KEY = 'portfolio_language';

await i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    supportedLngs: ['en', 'th'],
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    // Only a saved choice counts; first-time visitors always start in English
    detection: {
      order: ['localStorage'],
      lookupLocalStorage: LANGUAGE_STORAGE_KEY,
      caches: ['localStorage'],
    },
    react: {
      useSuspense: false,
    },
  });

// Keep <html lang> in sync so :lang(th) styles apply
document.documentElement.lang = i18n.resolvedLanguage ?? 'en';
i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng;
});

export default i18n;