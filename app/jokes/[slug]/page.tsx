import jokes from "../jokes.json";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

/* ✅ SEO */
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  const joke = jokes.find((j) => j.slug === slug);
  if (!joke) return {};

  return {
    title: joke.seo.title,
    description: joke.seo.description,
    openGraph: {
      title: joke.seo.ogTitle,
      description: joke.seo.ogDescription,
      images: [joke.image]
    },
    twitter: {
      title: joke.seo.twitterTitle,
      description: joke.seo.twitterDescription
    }
  };
}

/* ✅ PAGE */
export default async function JokeSlugPage({ params }: Props) {
  const { slug } = await params;

  const joke = jokes.find((j) => j.slug === slug);

  if (!joke) notFound();

  return (
    <main>
      <h1>{joke.title}</h1>
      <p>{joke.description}</p>
      <img src={joke.image} alt={joke.title} />

      <section>
        {joke.jokes.map((content, index) => (
          <div
            key={index}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        ))}
      </section>
    </main>
  );
}
