import SlugTemplate from "@/components/templates/SlugTemplate";
import jokes from "../jokes.json";
import type { Metadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {

  const { slug } = await params;

  const item = jokes.find((j) => j.slug === slug);


  if (!item) {
    return {
      title: "Content Not Found | GaliBazz",
      description: "Requested page not found on GaliBazz.",
    };
  }

  const seo = item.seo || {};

  const title = seo.title || item.title + " | GaliBazz";
  const description = seo.description || item.description;
  const image = item.image;

  return {
    title,
    description,

    alternates: {
      canonical: `https://www.galibazz.lol/en/jokes/${item.slug}`,
    },

    openGraph: {
      title: seo.ogTitle || title,
      description: seo.ogDescription || description,
      url: `https://www.galibazz.lol/en/jokes/${item.slug}`,
      siteName: "GaliBazz",
      type: "article",
      images: [
        {
          url: image,
          alt: item.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: seo.twitterTitle || title,
      description: seo.twitterDescription || description,
      images: [image],
    },
  };
}

export default function Page(props: any) {
  return (
    <SlugTemplate
      {...props}
      data={jokes}
      basePath="/en/jokes"
    />
  );
}
