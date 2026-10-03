export interface NewsArticle {
  id: string;
  title: string;
  titleAr: string;
  slug: string;
  excerpt: string;
  excerptAr: string;
  body: string;
  bodyAr: string;
  publishedAt: string;
  imageUrl: string | null;
  teamIds: string[];
}
