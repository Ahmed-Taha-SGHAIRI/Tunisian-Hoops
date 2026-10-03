import { getTranslations, getLocale } from 'next-intl/server';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { api } from '@/lib/data/api';
import { Link } from '@/i18n/routing';
import { CalendarDays, ArrowRight } from 'lucide-react';

export async function NewsGrid() {
  const t = await getTranslations('Navigation');
  const locale = await getLocale();
  const news = await api.news.getLatest(3);

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-heading text-2xl font-bold uppercase tracking-wider">Latest News</h2>
        <Link href="#" className="flex items-center gap-1 text-sm font-medium text-primary hover:underline">
          {t('more')} <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {news.map((article) => {
          const title = locale === 'ar' ? article.titleAr : article.title;
          const excerpt = locale === 'ar' ? article.excerptAr : article.excerpt;
          const date = new Intl.DateTimeFormat(locale, { dateStyle: 'medium' }).format(new Date(article.publishedAt));

          return (
            <Card key={article.id} className="group overflow-hidden transition-colors hover:border-primary">
              <CardHeader className="p-0">
                <div className="aspect-video w-full bg-muted flex items-center justify-center relative overflow-hidden">
                   {/* Placeholder for image */}
                   <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                   <span className="text-4xl opacity-20">📰</span>
                </div>
              </CardHeader>
              <CardContent className="p-6 relative z-20 -mt-8">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <CalendarDays className="h-3 w-3" />
                  <time dateTime={article.publishedAt}>{date}</time>
                </div>
                <CardTitle className="line-clamp-2 leading-tight mb-3 group-hover:text-primary transition-colors">
                  {title}
                </CardTitle>
                <p className="line-clamp-2 text-sm text-muted-foreground">
                  {excerpt}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
