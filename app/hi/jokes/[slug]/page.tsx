import SlugTemplate from "@/components/templates/SlugTemplate";
import jokes from "../jokes.json";
import type { Metadata } from "next";

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {

  const { slug } = await params;
  const item = jokes.find((j) => j.slug === slug);

  // Fallback if slug not found
  if (!item) {
    return {
      title: "कंटेंट नहीं मिला | GaliBazz",
      description: "मांगा गया पेज GaliBazz पर उपलब्ध नहीं है।",
    };
  }

  // Defaults
  const defaultTitle = `${item.title} | GaliBazz`;
  const defaultDescription = item.description;
  const defaultImage = item.image;

  // SEO override if present
  const seo = item.seo || {};

  const title = seo.title || defaultTitle;
  const description = seo.description || defaultDescription;

  return {
    title,
    description,

    alternates: {
      canonical: `https://www.galibazz.lol/hi/jokes/${item.slug}`,
    },

    openGraph: {
      title: seo.ogTitle || title,
      description: seo.ogDescription || description,
      url: `https://www.galibazz.lol/hi/jokes/${item.slug}`,
      siteName: "GaliBazz",
      type: "article",
      images: [
        {
          url: defaultImage,
          alt: item.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: seo.twitterTitle || title,
      description: seo.twitterDescription || description,
      images: [defaultImage],
    },
  };
}

/* ===== Page Render ===== */

export default function Page(props: any) {
  return (
    <SlugTemplate
      {...props}
      data={jokes}
      basePath="/hi/jokes"
    />
  );
}
