import { notFound } from 'next/navigation';
import { api } from '@/lib/data/api';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { TeamBadge } from '@/components/shared/team-badge';
import { FadeUp, StaggerContainer } from '@/components/shared/motion-presets';
import { getLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { ArrowLeft, Users, Trophy, MapPin } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const team = await api.teams.getBySlug(slug);
  if (!team) return { title: 'Team Not Found' };
  return { title: `${team.name} - Tunisian Hoops` };
}

export default async function TeamDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const locale = await getLocale();
  const team = await api.teams.getBySlug(slug);

  if (!team) {
    notFound();
  }

  const roster = await api.players.getByTeam(team.id);
  const teamName = locale === 'ar' ? team.nameAr : team.name;
  const city = locale === 'ar' ? team.cityAr : team.city;
  const arena = locale === 'ar' ? team.arenaAr : team.arena;

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/teams" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors">
        <ArrowLeft className="h-4 w-4" /> Back to Teams
      </Link>

      <FadeUp>
        <Card className="mb-12 border-t-4" style={{ borderTopColor: team.color }}>
          <CardContent className="p-6 md:p-10 flex flex-col md:flex-row items-center gap-8">
            <TeamBadge initials={team.initials} color={team.color} size="xl" className="h-32 w-32 md:h-40 md:w-40 text-6xl shadow-xl" />
            <div className="flex-1 text-center md:text-start space-y-4">
              <h1 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-wider">{teamName}</h1>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-8 text-sm text-muted-foreground">
                <span className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {city}</span>
                <span className="flex items-center gap-2"><Users className="h-4 w-4" /> {arena}</span>
                <span className="flex items-center gap-2"><Trophy className="h-4 w-4" /> Est. {team.founded}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </FadeUp>

      <StaggerContainer>
        <h2 className="font-heading text-2xl font-bold uppercase tracking-wider mb-6">Current Roster</h2>
        <Card>
          <CardContent className="p-0 sm:p-6 overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-16 text-center">No.</TableHead>
                  <TableHead>Player</TableHead>
                  <TableHead className="text-center">Pos</TableHead>
                  <TableHead className="text-center">Height</TableHead>
                  <TableHead className="text-center hidden sm:table-cell">Weight</TableHead>
                  <TableHead className="text-center hidden sm:table-cell">Nationality</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {roster.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">Roster empty or unavailable.</TableCell>
                  </TableRow>
                ) : (
                  roster.map(player => {
                    const firstName = locale === 'ar' ? player.firstNameAr : player.firstName;
                    const lastName = locale === 'ar' ? player.lastNameAr : player.lastName;

                    return (
                      <TableRow key={player.id}>
                        <TableCell className="text-center font-bold tabular-nums text-primary">{player.number}</TableCell>
                        <TableCell className="font-medium">{firstName} {lastName}</TableCell>
                        <TableCell className="text-center font-bold">{player.position}</TableCell>
                        <TableCell className="text-center tabular-nums">{player.height} cm</TableCell>
                        <TableCell className="text-center tabular-nums hidden sm:table-cell">{player.weight} kg</TableCell>
                        <TableCell className="text-center hidden sm:table-cell">{player.nationality}</TableCell>
                      </TableRow>
                    );
                  })
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </StaggerContainer>
    </div>
  );
}
