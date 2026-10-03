import type { NewsArticle, Transfer } from '@tunisian-hoops/shared';

export const mockTransfers: Transfer[] = [
  { id: 'tr1', playerId: 'p7', playerName: 'Marcus Johnson', playerNameAr: 'ماركوس جونسون', fromTeamId: null, toTeamId: 't4', date: '2026-08-15', type: 'signing', seasonId: 's1' },
  { id: 'tr2', playerId: 'p1', playerName: 'Mohamed Ben Ali', playerNameAr: 'محمد بن علي', fromTeamId: 't2', toTeamId: 't1', date: '2026-07-20', type: 'signing', seasonId: 's1' },
  { id: 'tr3', playerId: 'p4', playerName: 'Mehdi Hammami', playerNameAr: 'مهدي الهمامي', fromTeamId: 't3', toTeamId: 't2', date: '2026-09-01', type: 'loan', seasonId: 's1' },
];

export const mockNews: NewsArticle[] = [
  {
    id: 'n1',
    title: 'Carthage Eagles secure narrow victory in season opener',
    titleAr: 'نسور قرطاج يحققون فوزاً صعباً في افتتاح الموسم',
    slug: 'carthage-eagles-secure-narrow-victory',
    excerpt: 'A thrilling fourth quarter comeback saw Carthage Eagles edge past Medina Stars.',
    excerptAr: 'عودة مثيرة في الربع الأخير شهدت فوز نسور قرطاج على نجوم المدينة.',
    body: 'In an electrifying start to the season...',
    bodyAr: 'في بداية مثيرة للموسم...',
    publishedAt: '2026-10-02T10:00:00Z',
    imageUrl: null,
    teamIds: ['t1', 't2']
  },
  {
    id: 'n2',
    title: 'Marcus Johnson signs with Kairouan Falcons',
    titleAr: 'ماركوس جونسون يوقع مع صقور القيروان',
    slug: 'marcus-johnson-signs-kairouan',
    excerpt: 'The American shooting guard brings NBA G-League experience to Tunisia.',
    excerptAr: 'يجلب اللاعب الأمريكي خبرة واسعة إلى تونس.',
    body: 'Kairouan Falcons have officially announced...',
    bodyAr: 'أعلن صقور القيروان رسمياً...',
    publishedAt: '2026-08-16T14:30:00Z',
    imageUrl: null,
    teamIds: ['t4']
  }
];
