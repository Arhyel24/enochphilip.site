export type Locale = (typeof locales)[number];

export const locales = ['en', 'de', 'ha'] as const;
export const defaultLocale: Locale = 'en';
