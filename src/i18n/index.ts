import { en } from './locales/en';
import { mr } from './locales/mr';
import { hi } from './locales/hi';
import type { Language } from '../types/i18n';

export const translations = {
  en,
  mr,
  hi,
};

export type TranslationsType = typeof en;

export function getTranslations(lang: Language): TranslationsType {
  return translations[lang] || translations.en;
}

export * from './locales/en';
export * from './locales/mr';
export * from './locales/hi';
