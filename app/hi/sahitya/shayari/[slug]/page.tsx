import SlugTemplate from "@/components/templates/SlugTemplate";
import sayri from "../shayari.json";

export default function Page(props:any) {
  return (
    <SlugTemplate
      {...props}
      data={sayri}
      basePath="/hi/sahitya/shayari"
    />
  );
}
