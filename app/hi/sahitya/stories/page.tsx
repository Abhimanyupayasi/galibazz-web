import ExternalJokesList from "@/components/ExternalJokesList";
import Header from "@/components/Header";
import stories from "./stories.json"
export const dynamic = "force-dynamic";

type Props = {
  searchParams?: Promise<{ page?: string }>;
};

export default async function ExternalJokesPage({ searchParams }: Props) {
  const { page } = (await searchParams) || {};
  const currentPage = Number(page) || 1;

  return (
    <main>
      <Header />

      <h1 className="text-3xl font-bold text-center my-8">
        कहानियाँ संग्रह
      </h1>

      {/* No data prop → uses default JSON automatically */}
      <ExternalJokesList data={stories} page={currentPage} />
    </main>
  );
}
