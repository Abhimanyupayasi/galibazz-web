export type NewsItem = {
  slug: string;
  poster: string;
  title: string;
  author: string;
  date: string;
  time: string;
  type: "news";
  what: "latest" | "hot" | "viral";
  tags: string[];
};
