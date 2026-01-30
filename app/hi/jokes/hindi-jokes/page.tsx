import ExternalJokesList from "@/components/ExternalJokesList";
import Header from "@/components/Header";

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
        Dirty Jokes In Hindi
      </h1>

      <ExternalJokesList page={currentPage} />
    </main>
  );
}
