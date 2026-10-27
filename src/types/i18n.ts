export type Language = 'en' | 'mr' | 'hi';

export interface LanguageOption {
  code: Language;
  name: string;
  nativeName: string;
  shortLabel: string;
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: 'en', name: 'English', nativeName: 'English', shortLabel: 'EN' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी', shortLabel: 'मरा' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिंदी', shortLabel: 'हिं' },
];
