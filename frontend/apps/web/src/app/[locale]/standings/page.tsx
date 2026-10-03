import { getTranslations } from 'next-intl/server';
import { api } from '@/lib/data/api';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { TeamBadge } from '@/components/shared/team-badge';
import { FadeUp } from '@/components/shared/motion-presets';
import { getLocale } from 'next-intl/server';
import { cn } from '@/lib/utils';
import { Link } from '@/i18n/routing';

export async function generateMetadata() {
  const t = await getTranslations('Navigation');
  return { title: `${t('standings')} - Tunisian Hoops` };
}

export default async function StandingsPage() {
  const t = await getTranslations('Navigation');
  const locale = await getLocale();
  const standings = await api.standings.get();
  const allTeams = await api.teams.getAll();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-heading text-4xl font-bold uppercase tracking-wider mb-8">{t('standings')}</h1>
      
      <FadeUp>
        <Card>
          <CardContent className="p-0 sm:p-6 overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12 text-center">#</TableHead>
                  <TableHead>Team</TableHead>
                  <TableHead className="text-center">P</TableHead>
                  <TableHead className="text-center">W</TableHead>
                  <TableHead className="text-center">L</TableHead>
                  <TableHead className="text-center hidden sm:table-cell">PF</TableHead>
                  <TableHead className="text-center hidden sm:table-cell">PA</TableHead>
                  <TableHead className="text-center hidden sm:table-cell">+/-</TableHead>
                  <TableHead className="text-center">Form</TableHead>
                  <TableHead className="text-right">Pts</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {standings.map((row) => {
                  const team = allTeams.find(t => t.id === row.teamId);
                  if (!team) return null;
                  const teamName = locale === 'ar' ? team.nameAr : team.name;

                  // Highlight top 4 (Playoff spots)
                  const isPlayoff = row.rank <= 4;

                  return (
                    <TableRow key={row.teamId} className={cn(isPlayoff && "bg-muted/50")}>
                      <TableCell className="text-center font-bold">
                        <span className={cn(isPlayoff && "text-primary")}>{row.rank}</span>
                      </TableCell>
                      <TableCell>
                        <Link href={`/teams/${team.slug}`} className="flex items-center gap-3 hover:underline">
                          <TeamBadge initials={team.initials} color={team.color} size="sm" />
                          <span className="font-medium whitespace-nowrap">{teamName}</span>
                        </Link>
                      </TableCell>
                      <TableCell className="text-center tabular-nums">{row.played}</TableCell>
                      <TableCell className="text-center tabular-nums">{row.won}</TableCell>
                      <TableCell className="text-center tabular-nums">{row.lost}</TableCell>
                      <TableCell className="text-center tabular-nums hidden sm:table-cell">{row.pointsFor}</TableCell>
                      <TableCell className="text-center tabular-nums hidden sm:table-cell">{row.pointsAgainst}</TableCell>
                      <TableCell className="text-center tabular-nums hidden sm:table-cell">{row.diff > 0 ? `+${row.diff}` : row.diff}</TableCell>
                      <TableCell className="text-center">
                        <div className="flex items-center justify-center gap-1">
                          {row.form.map((res, i) => (
                            <span 
                              key={i} 
                              className={cn(
                                "flex h-5 w-5 items-center justify-center rounded-sm text-[10px] font-bold text-white",
                                res === 'W' ? "bg-green-500" : "bg-red-500"
                              )}
                            >
                              {res}
                            </span>
                          ))}
                          {row.form.length === 0 && <span className="text-muted-foreground">-</span>}
                        </div>
                      </TableCell>
                      <TableCell className="text-right font-bold tabular-nums text-primary">{row.points}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </FadeUp>
    </div>
  );
}
