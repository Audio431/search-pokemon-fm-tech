"use client";
import Image from "next/image";
import type { Pokemon } from "@/lib/types";
import AttackList from "./AttackList";
import EvolutionChain from "./EvolutionChain";
import StatGrid from "./StatGrid";
import TagGroup from "./TagGroup";
// Component to display detailed information about a Pokémon

interface Props {
  pokemon: Pokemon;
  onEvolutionClick: (name: string) => void;
}

export default function PokemonResult({ pokemon, onEvolutionClick }: Props) {
  return (
    <div className="mt-6 border rounded p-4">
      {/* Header */}
      <Image
        src={pokemon.image}
        alt={pokemon.name}
        width={192}
        height={192}
        className="w-48 h-48 mx-auto"
      />
      <h2 className="text-2xl font-bold text-center mt-2">
        #{pokemon.number} {pokemon.name}
      </h2>

      {/* Types */}
      <div className="flex gap-2 justify-center mt-2">
        {pokemon.types.map((type) => (
          <span
            key={type}
            className="bg-gray-200 rounded-full px-3 py-1 text-sm"
          >
            {type}
          </span>
        ))}
      </div>

      <p className="text-center text-gray-600 mt-1">
        {pokemon.classification}
      </p>

    {/* Stats */}
    <StatGrid pokemon={pokemon} />

      {/* Resistant & Weaknesses */}
      <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
        <TagGroup label="Resistant" items={pokemon.resistant} color="bg-green-100" />
        <TagGroup label="Weaknesses" items={pokemon.weaknesses} color="bg-red-100" />
      </div>

      {/* Attacks */}
      {pokemon.attacks && <AttackList attacks={pokemon.attacks} />}

      {/* Evolutions */}
      {pokemon.evolutions && pokemon.evolutions.length > 0 && (
        <EvolutionChain
          evolutions={pokemon.evolutions}
          onClick={onEvolutionClick}
        />
      )}

      {/* Evolution Requirements */}
      {pokemon.evolutionRequirements && (
        <div className="mt-4 text-sm text-gray-600">
          <p>
            Evolution: {pokemon.evolutionRequirements.amount}{" "}
            {pokemon.evolutionRequirements.name}
          </p>
        </div>
      )}
    </div>
  );
}