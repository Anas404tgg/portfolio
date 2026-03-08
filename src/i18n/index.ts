/**
 * i18n Utility Module
 * ====================
 * Combines all translations and exports them for serialisation to the client.
 * Language is stored in localStorage under key 'lang' (default: 'en').
 */
import { en } from './en';
import { fr } from './fr';
import { ar } from './ar';

export type Lang = 'en' | 'fr' | 'ar';
export const RTL_LANGS: Lang[] = ['ar'];
export const DEFAULT_LANG: Lang = 'en';
export const LANGS: { code: Lang; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'ar', label: 'العربية', flag: '🇲🇦' },
];

export const translations: Record<Lang, Record<string, string>> = { en, fr, ar };
