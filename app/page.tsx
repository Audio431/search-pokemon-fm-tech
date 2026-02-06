import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1>Welcome to the Pokémon Search App</h1>
      <Image
        src="/pokemon-logo.png"
        alt="Pokémon Logo"
        width={300}
        height={100}
      />
    </main> 
  );
}
