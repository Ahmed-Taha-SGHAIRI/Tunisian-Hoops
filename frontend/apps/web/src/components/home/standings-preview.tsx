import { getTranslations, getLocale } from 'next-intl/server';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { api } from '@/lib/data/api';
import { Link } from '@/i18n/routing';
import { ArrowRight } from 'lucide-react';
import { TeamBadge } from '@/components/shared/team-badge';

export async function StandingsPreview() {
  const t = await getTranslations('Navigation');
  const locale = await getLocale();
  const standings = await api.standings.get();
  const allTeams = await api.teams.getAll();

  const topTeams = standings.slice(0, 5); // Preview top 5

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="font-heading uppercase tracking-wider">{t('standings')}</CardTitle>
        <Link href="/standings" className="flex items-center gap-1 text-sm font-medium text-primary hover:underline">
          {t('more')} <ArrowRight className="h-4 w-4" />
        </Link>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12 text-center">#</TableHead>
              <TableHead>Team</TableHead>
              <TableHead className="text-right">W-L</TableHead>
              <TableHead className="text-right">Pts</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {topTeams.map((row) => {
              const team = allTeams.find(t => t.id === row.teamId);
              if (!team) return null;
              const teamName = locale === 'ar' ? team.nameAr : team.name;

              return (
                <TableRow key={row.teamId}>
                  <TableCell className="text-center font-bold">{row.rank}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <TeamBadge initials={team.initials} color={team.color} size="sm" />
                      <span className="font-medium">{teamName}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right tabular-nums">{row.won}-{row.lost}</TableCell>
                  <TableCell className="text-right font-bold tabular-nums text-primary">{row.points}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
