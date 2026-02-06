"use client";
import { useParams } from "next/navigation";
import { useQuery } from "@apollo/client/react";
import { GET_POKEMON } from "@/lib/queries";
import type { GetPokemonData, GetPokemonVars } from "@/lib/types";
import PokemonResult from "@/app/components/PokemonResult";
import { useRouter } from "next/navigation";

export default function PokemonPage() {
  const params = useParams();
  const router = useRouter();
  const name = params.name as string;

  const { data, loading, error } = useQuery<GetPokemonData, GetPokemonVars>(
    GET_POKEMON,
    { variables: { name } }
  );

  const handleEvolutionClick = (evoName: string) => {
    router.push(`/pokemon/${evoName}`);
  };

  return (
    <main className="max-w-2xl mx-auto p-4">
      <button onClick={() => router.push("/")} className="text-blue-500 mb-4">
        ← Back to Search
      </button>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error loading Pokémon.</p>}
      {data && !data.pokemon && (
        <div className="mt-6 border rounded p-8 text-center">
          <p className="text-4xl mb-2">❓</p>
          <h3 className="text-lg font-semibold">Pokémon not found</h3>
        </div>
      )}
      {data?.pokemon && (
        <PokemonResult pokemon={data.pokemon} onEvolutionClick={handleEvolutionClick} />
      )}
    </main>
  );
}