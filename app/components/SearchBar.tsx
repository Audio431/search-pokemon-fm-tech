"use client";
import { useState } from "react";
import { useLazyQuery } from "@apollo/client/react";
import { GET_POKEMON } from "@/lib/queries";
import type { GetPokemonData, GetPokemonVars } from "@/lib/types";

export default function SearchBar() {
  const [name, setName] = useState("");
  const [search, { data, loading, error }] = useLazyQuery<GetPokemonData, GetPokemonVars>(GET_POKEMON);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      search({ variables: { name: name.trim().toLowerCase() } });
    }
  };

  const pokemon = data?.pokemon;

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Pokémon name (e.g. pikachu)"
          className="border rounded px-3 py-2 flex-1"
        />
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
        <div className="mt-6 border rounded p-4">
          <img src={pokemon.image} alt={pokemon.name} className="w-48 h-48 mx-auto" />
          <h2 className="text-2xl font-bold text-center mt-2">
            #{pokemon.number} {pokemon.name}
          </h2>
          <div className="flex gap-2 justify-center mt-2">
            {pokemon.types.map((type: string) => (
              <span key={type} className="bg-gray-200 rounded-full px-3 py-1 text-sm">
                {type}
              </span>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-1">{pokemon.classification}</p>
          <div className="grid grid-cols-2 gap-2 mt-4 text-sm">
            <p>Max CP: {pokemon.maxCP}</p>
            <p>Max HP: {pokemon.maxHP}</p>
            <p>Weight: {pokemon.weight.minimum} – {pokemon.weight.maximum}</p>
            <p>Height: {pokemon.height.minimum} – {pokemon.height.maximum}</p>
          </div>
        </div>
      )}
    </div>
  );
}
