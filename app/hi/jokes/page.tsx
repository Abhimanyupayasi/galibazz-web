import ListingTemplate from "@/components/templates/ListingTemplate";
import jokes from "./jokes.json";
import JokesHero from "@/components/JokesHero";

export default function Page(props:any) {
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
