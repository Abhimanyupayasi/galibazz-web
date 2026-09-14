import SlugTemplate from "@/components/templates/SlugTemplate";
import sayri from "../shayari.json";

type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ page?: string }>;
};

export default function Page(props: PageProps) {
  return (
    <SlugTemplate
      {...props}
      data={sayri}
      basePath="/hi/sahitya/shayari"
    />
  );
}
