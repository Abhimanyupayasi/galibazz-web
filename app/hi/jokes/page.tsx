import ListingTemplate from "@/components/templates/ListingTemplate";
import jokes from "./jokes.json";
import JokesHero from "@/components/JokesHero";

type PageProps = {
  searchParams?: Promise<{ page?: string }>;
};

export default function Page(props: PageProps) {
  return (
    <ListingTemplate
      {...props}
      data={jokes}
      basePath="/hi/jokes"
      title="Joke Categories"
      hero={<JokesHero />}
    />
  );
}
