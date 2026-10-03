import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Logo } from './logo';
import { ThemeToggle } from './theme-toggle';
import { LanguageSwitcher } from './language-switcher';

export function Navbar() {
  const t = useTranslations('Navigation');

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center px-4">
        <Logo className="me-8" />
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="transition-colors hover:text-primary">{t('home')}</Link>
          <Link href="/fixtures" className="transition-colors hover:text-primary">{t('fixtures')}</Link>
          <Link href="/standings" className="transition-colors hover:text-primary">{t('standings')}</Link>
          <Link href="/teams" className="transition-colors hover:text-primary">{t('teams')}</Link>
        </nav>

        <div className="ms-auto flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
