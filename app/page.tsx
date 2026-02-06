import SearchBar from "./components/SearchBar";

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Pokémon Search</h1>
      <SearchBar />
    </main>
  );
}