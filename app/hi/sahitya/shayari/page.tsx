import ListingTemplate from "@/components/templates/ListingTemplate";
import sayri from "./shayari.json";

export default function Page(props:any) {
  return (
    <ListingTemplate
      {...props}
      data={sayri}
      basePath="/hi/sahitya/shayari"
      title="Shayari Categories"
    />
  );
}
