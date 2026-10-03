import { getTranslations } from 'next-intl/server';
import { api } from '@/lib/data/api';
import { Card, CardContent } from '@/components/ui/card';
import { TeamBadge } from '@/components/shared/team-badge';
import { FadeUp, StaggerContainer } from '@/components/shared/motion-presets';
import { getLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';

export async function generateMetadata() {
  const t = await getTranslations('Navigation');
  return { title: `${t('teams')} - Tunisian Hoops` };
}

export default async function TeamsPage() {
  const t = await getTranslations('Navigation');
  const locale = await getLocale();
  const allTeams = await api.teams.getAll();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-heading text-4xl font-bold uppercase tracking-wider mb-8">{t('teams')}</h1>
      
      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allTeams.map((team) => {
          const teamName = locale === 'ar' ? team.nameAr : team.name;
          const city = locale === 'ar' ? team.cityAr : team.city;
          const arena = locale === 'ar' ? team.arenaAr : team.arena;

          return (
            <FadeUp key={team.id}>
              <Link href={`/teams/${team.slug}`} className="block h-full group">
                <Card className="h-full overflow-hidden transition-all hover:border-primary hover:shadow-md">
                  <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                    <TeamBadge initials={team.initials} color={team.color} size="xl" className="group-hover:scale-110 transition-transform" />
                    <div>
                      <h2 className="font-heading font-bold text-xl mb-1 group-hover:text-primary transition-colors">{teamName}</h2>
                      <p className="text-sm text-muted-foreground">{city}</p>
                    </div>
                    <div className="text-xs text-muted-foreground bg-muted w-full py-2 rounded-md mt-auto">
                      Est. {team.founded} • {arena}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </FadeUp>
          );
        })}
      </StaggerContainer>
    </div>
  );
}
