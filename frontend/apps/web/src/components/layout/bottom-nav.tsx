import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Home, CalendarDays, Trophy, Users, Menu } from 'lucide-react';

export function BottomNav() {
  const t = useTranslations('Navigation');

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t bg-background pb-safe">
      <div className="flex h-16 items-center justify-around px-2">
        <Link href="/" className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary p-2">
          <Home className="h-5 w-5" />
          <span className="text-[10px] font-medium">{t('home')}</span>
        </Link>
        <Link href="/fixtures" className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary p-2">
          <CalendarDays className="h-5 w-5" />
          <span className="text-[10px] font-medium">{t('fixtures')}</span>
        </Link>
        <Link href="/standings" className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary p-2">
          <Trophy className="h-5 w-5" />
          <span className="text-[10px] font-medium">{t('standings')}</span>
        </Link>
        <Link href="/teams" className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary p-2">
          <Users className="h-5 w-5" />
          <span className="text-[10px] font-medium">{t('teams')}</span>
        </Link>
        {/* Placeholder for a mobile menu sheet trigger */}
        <button className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary p-2">
          <Menu className="h-5 w-5" />
          <span className="text-[10px] font-medium">{t('more')}</span>
        </button>
      </div>
    </div>
  );
}
