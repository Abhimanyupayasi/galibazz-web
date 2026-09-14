import ListingTemplate from "@/components/templates/ListingTemplate";
import sayri from "./shayari.json";

type PageProps = {
  searchParams?: Promise<{ page?: string }>;
};

export default function Page(props: PageProps) {
  return (
    <ListingTemplate
      {...props}
      data={sayri}
      basePath="/hi/sahitya/shayari"
      title="Shayari Categories"
    />
  );
}
