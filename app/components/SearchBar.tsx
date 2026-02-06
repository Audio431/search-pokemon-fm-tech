"use client";
import { useState, useCallback, useEffect, useMemo } from "react";
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

  const nameParam = searchParams.get("name") || ""; // Get initial name from URL
  const [name, setName] = useState(nameParam); // State for input value
  useEffect(() => {
    if (nameParam) search({ variables: { name: nameParam } });
  }, [nameParam]);

  const [userTyping, setUserTyping] = useState(false); // State to track if user is typing

  // Fetch all Pokémon for autocomplete suggestions
  const { data: allData } = useQuery<GetPokemonsData>(GET_POKEMONS);
  const [search, { data, loading, error }] = useLazyQuery<
    GetPokemonData,
    GetPokemonVars
  >(GET_POKEMON);

  // Format Pokémon name: capitalize first letter, lowercase the rest
  const formatName = (raw: string) =>
    raw.trim().charAt(0).toUpperCase() + raw.trim().slice(1).toLowerCase();

  // Perform search and update URL
  const doSearch = useCallback(
    (pokemonName: string) => {
      const formatted = formatName(pokemonName);
      setName(formatted);
      setUserTyping(false);
      router.push(`/pokemon/${formatted}`);
    },
    [router],
  );

  // Handle form submission
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (name.trim()) doSearch(name);
  };

  // Generate autocomplete suggestions based on input
  const suggestions = useMemo(() => {
    if (!name.trim() || !allData?.pokemons) return [];
    return allData.pokemons
      .filter((p) => p.name.toLowerCase().includes(name.trim().toLowerCase()))
      .slice(0, 8);
  }, [name, allData]);

  // Extract Pokémon data from query result
  const pokemon = data?.pokemon;

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <div className="relative flex-1">
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setUserTyping(true);
            }}
            placeholder="Enter Pokémon name (e.g. Pikachu)"
            className="border rounded px-3 py-2 w-full"
            autoComplete="off"
          />
          <AutoComplete
            suggestions={userTyping ? suggestions : []}
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

      {/* If no Pokémon found, show message */}
      {!loading && data && !data.pokemon && (
        <div className="mt-6 border rounded p-8 text-center">
          <p className="text-4xl mb-2">❓</p>
          <h3 className="text-lg font-semibold">Pokémon not found</h3>
          <p className="text-gray-500 text-sm mt-1">
            No result for &quot;{name}&quot; — try another name
          </p>
        </div>
      )}
      {error && <p className="mt-4 text-red-500">Pokémon not found.</p>}

      {pokemon && (
        <PokemonResult pokemon={pokemon} onEvolutionClick={doSearch} />
      )}
    </div>
  );
}
