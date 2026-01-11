import { NewsItem } from "@/types/news";

export function getUniqueNews(newsData: NewsItem[]): NewsItem[] {
  const map = new Map<string, NewsItem>();

  for (const item of newsData) {
    if (!map.has(item.slug)) {
      map.set(item.slug, item);
    }
  }

  return Array.from(map.values());
}
