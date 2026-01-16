import SlugTemplate from "@/components/templates/SlugTemplate";
import jokes from "../jokes.json";

export default function Page(props:any) {
  return (
    <SlugTemplate
      {...props}
      data={jokes}
      basePath="/hi/jokes"
    />
  );
}
