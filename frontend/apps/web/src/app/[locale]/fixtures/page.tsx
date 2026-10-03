import { getTranslations } from 'next-intl/server';
import { api } from '@/lib/data/api';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TeamBadge } from '@/components/shared/team-badge';
import { ScoreDisplay } from '@/components/shared/score-display';
import { FadeUp, StaggerContainer } from '@/components/shared/motion-presets';
import { getLocale } from 'next-intl/server';

export async function generateMetadata() {
  const t = await getTranslations('Navigation');
  return { title: `${t('fixtures')} - Tunisian Hoops` };
}

export default async function FixturesPage() {
  const t = await getTranslations('Navigation');
  const locale = await getLocale();
  const allGames = await api.games.getAll();
  const allTeams = await api.teams.getAll();

  const upcoming = allGames.filter(g => g.status === 'scheduled');
  const results = allGames.filter(g => g.status === 'finished');
  
  const renderGame = (game: any) => {
    const homeTeam = allTeams.find(t => t.id === game.homeTeamId);
    const awayTeam = allTeams.find(t => t.id === game.awayTeamId);
    if (!homeTeam || !awayTeam) return null;

    const homeName = locale === 'ar' ? homeTeam.nameAr : homeTeam.name;
    const awayName = locale === 'ar' ? awayTeam.nameAr : awayTeam.name;
    const venue = locale === 'ar' ? game.venueAr : game.venue;
    const date = new Intl.DateTimeFormat(locale, { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(game.date));

    return (
      <Card key={game.id} className="hover:border-primary transition-colors">
        <CardContent className="p-4 md:p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col items-center md:items-end flex-1 gap-2">
              <TeamBadge initials={homeTeam.initials} color={homeTeam.color} size="lg" />
              <span className="font-heading font-bold text-center md:text-right">{homeName}</span>
            </div>
            
            <div className="flex flex-col items-center justify-center min-w-[120px] gap-2">
              <span className="text-xs text-muted-foreground whitespace-nowrap">{date}</span>
              <div className="flex items-center gap-4 bg-muted px-4 py-2 rounded-lg">
                <ScoreDisplay score={game.homeScore ?? 0} className="text-2xl" />
                <span className="text-muted-foreground">-</span>
                <ScoreDisplay score={game.awayScore ?? 0} className="text-2xl" />
              </div>
              <span className="text-xs text-muted-foreground truncate max-w-[150px]">{venue}</span>
            </div>

            <div className="flex flex-col items-center md:items-start flex-1 gap-2">
              <TeamBadge initials={awayTeam.initials} color={awayTeam.color} size="lg" />
              <span className="font-heading font-bold text-center md:text-left">{awayName}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-heading text-4xl font-bold uppercase tracking-wider mb-8">{t('fixtures')}</h1>
      
      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList className="mb-8 w-full max-w-md mx-auto grid grid-cols-2">
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="results">Results</TabsTrigger>
        </TabsList>
        
        <TabsContent value="upcoming">
          <StaggerContainer className="space-y-4">
            {upcoming.map(game => (
              <FadeUp key={game.id}>
                {renderGame(game)}
              </FadeUp>
            ))}
            {upcoming.length === 0 && <p className="text-center text-muted-foreground py-8">No upcoming games.</p>}
          </StaggerContainer>
        </TabsContent>
        
        <TabsContent value="results">
          <StaggerContainer className="space-y-4">
            {results.map(game => (
              <FadeUp key={game.id}>
                {renderGame(game)}
              </FadeUp>
            ))}
            {results.length === 0 && <p className="text-center text-muted-foreground py-8">No past results found.</p>}
          </StaggerContainer>
        </TabsContent>
      </Tabs>
    </div>
  );
}
