import Link from "next/link";
import jokes from "./jokes.json";

export default function JokesPage() {
  return (
    <main>
      <h1>Jokes Categories</h1>

      <ul>
        {jokes.map((item) => (
          <li key={item.slug}>
            <Link href={`/jokes/${item.slug}`}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
