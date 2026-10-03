import { getTranslations } from 'next-intl/server';
import { HeroLiveGames } from '@/components/home/hero-live-games';
import { NewsGrid } from '@/components/home/news-grid';
import { StandingsPreview } from '@/components/home/standings-preview';
import { FadeUp, StaggerContainer } from '@/components/shared/motion-presets';

export default async function Home() {
  return (
    <StaggerContainer className="container mx-auto px-4 py-8 space-y-12">
      <FadeUp>
        <HeroLiveGames />
      </FadeUp>
      
      <div className="grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <FadeUp>
            <NewsGrid />
          </FadeUp>
        </div>
        <div>
          <FadeUp>
            <StandingsPreview />
          </FadeUp>
        </div>
      </div>
    </StaggerContainer>
  );
}
