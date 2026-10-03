import { useTranslations, useLocale } from 'next-intl';
import { Card, CardContent } from '@/components/ui/card';
import { api } from '@/lib/data/api';
import { TeamBadge } from '@/components/shared/team-badge';
import { LiveBadge } from '@/components/shared/live-badge';
import { ScoreDisplay } from '@/components/shared/score-display';
import { Link } from '@/i18n/routing';

export async function HeroLiveGames() {
  const locale = useLocale();
  const liveGames = await api.games.getLive();
  const allTeams = await api.teams.getAll();

  if (liveGames.length === 0) return null;

  const game = liveGames[0];
  if (!game) return null;

  const homeTeam = allTeams.find(t => t.id === game.homeTeamId);
  const awayTeam = allTeams.find(t => t.id === game.awayTeamId);

  if (!homeTeam || !awayTeam) return null;

  const homeName = locale === 'ar' ? homeTeam.nameAr : homeTeam.name;
  const awayName = locale === 'ar' ? awayTeam.nameAr : awayTeam.name;
  const venue = locale === 'ar' ? game.venueAr : game.venue;

  return (
    <section className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/20 via-background to-secondary/20 p-[1px]">
      <Card className="border-0 bg-background/80 backdrop-blur-xl">
        <CardContent className="p-6 md:p-10">
          <div className="mb-6 flex items-center justify-between">
            <LiveBadge />
            <span className="text-sm font-medium text-muted-foreground">{venue}</span>
          </div>
          
          <Link href="/fixtures" className="block group">
            <div className="flex items-center justify-between md:justify-center md:gap-20">
              {/* Home Team */}
              <div className="flex flex-col items-center gap-4">
                <TeamBadge initials={homeTeam.initials} color={homeTeam.color} size="xl" className="shadow-2xl transition-transform group-hover:scale-110" />
                <span className="font-heading text-lg md:text-2xl font-bold">{homeName}</span>
              </div>

              {/* Score */}
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="flex items-baseline gap-4 md:gap-8">
                  <ScoreDisplay score={game.homeScore ?? 0} className="text-4xl md:text-6xl text-primary" />
                  <span className="text-2xl text-muted-foreground">-</span>
                  <ScoreDisplay score={game.awayScore ?? 0} className="text-4xl md:text-6xl text-primary" />
                </div>
                <span className="text-sm font-bold text-muted-foreground">Q{game.quarterScores.length}</span>
              </div>

              {/* Away Team */}
              <div className="flex flex-col items-center gap-4">
                <TeamBadge initials={awayTeam.initials} color={awayTeam.color} size="xl" className="shadow-2xl transition-transform group-hover:scale-110" />
                <span className="font-heading text-lg md:text-2xl font-bold">{awayName}</span>
              </div>
            </div>
          </Link>
        </CardContent>
      </Card>
    </section>
  );
}
