"use client";
import { useState, useCallback } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useLazyQuery, useQuery } from "@apollo/client/react";
import { GET_POKEMON, GET_POKEMONS } from "@/lib/queries";
import type {
  GetPokemonData,
  GetPokemonVars,
  GetPokemonsData,
  PokemonSummary,
} from "@/lib/types";
import AutoComplete from "./AutoComplete";
import PokemonResult from "./PokemonResult";

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [name, setName] = useState(searchParams.get("name") || "");

  const { data: allData } = useQuery<GetPokemonsData>(GET_POKEMONS);
  const [search, { data, loading, error }] = useLazyQuery<
    GetPokemonData,
    GetPokemonVars
  >(GET_POKEMON);

  const formatName = (raw: string) =>
    raw.trim().charAt(0).toUpperCase() + raw.trim().slice(1).toLowerCase();

  const doSearch = useCallback(
    (pokemonName: string) => {
      const formatted = formatName(pokemonName);
      setName(formatted);
      router.push(`?name=${formatted}`);
      search({ variables: { name: formatted } });
    },
    [router, search]
  );

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (name.trim()) doSearch(name);
  };

  const suggestions: PokemonSummary[] =
    name.trim().length > 0 && allData?.pokemons
      ? allData.pokemons
          .filter((p) =>
            p.name.toLowerCase().includes(name.trim().toLowerCase())
          )
          .slice(0, 8)
      : [];

  const pokemon = data?.pokemon;

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <div className="relative flex-1">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Pokémon name (e.g. Pikachu)"
            className="border rounded px-3 py-2 w-full"
            autoComplete="off"
          />
          <AutoComplete
            suggestions={suggestions}
            onSelect={(p) => doSearch(p.name)}
            inputValue={name}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4">Loading...</p>}
      {error && <p className="mt-4 text-red-500">Pokémon not found.</p>}

      {pokemon && (
        <PokemonResult pokemon={pokemon} onEvolutionClick={doSearch} />
      )}
    </div>
  );
}