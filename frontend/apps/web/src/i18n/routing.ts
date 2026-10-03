import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const locales = ['fr', 'ar'] as const;
export const defaultLocale = 'fr' as const;

export const routing = defineRouting({
  locales,
  defaultLocale,
  // Show language prefix even for default locale to keep URLs consistent
  localePrefix: 'always'
});

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
