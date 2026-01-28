import jokeCategories from "@/app/en/jokes/jokes.json";

export function pickRandomJoke() {
  // Pick random category
  const category =
    jokeCategories[Math.floor(Math.random() * jokeCategories.length)];

  // Pick random joke from that category
  const joke =
    category.jokes[Math.floor(Math.random() * category.jokes.length)];

  return joke; // this is already a string
}
