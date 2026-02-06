import type { Pokemon } from "@/lib/types";
import AttackList from "./AttackList";
import EvolutionChain from "./EvolutionChain";

interface Props {
  pokemon: Pokemon;
  onEvolutionClick: (name: string) => void;
}

export default function PokemonResult({ pokemon, onEvolutionClick }: Props) {
  return (
    <div className="mt-6 border rounded p-4">
      {/* Header */}
      <img
        src={pokemon.image}
        alt={pokemon.name}
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
      <div className="grid grid-cols-2 gap-2 mt-4 text-sm">
        <p>Max CP: {pokemon.maxCP}</p>
        <p>Max HP: {pokemon.maxHP}</p>
        <p>Weight: {pokemon.weight.minimum} – {pokemon.weight.maximum}</p>
        <p>Height: {pokemon.height.minimum} – {pokemon.height.maximum}</p>
        <p>Flee Rate: {pokemon.fleeRate}</p>
      </div>

      {/* Resistant & Weaknesses */}
      <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
        <div>
          <h3 className="font-semibold mb-1">Resistant</h3>
          <div className="flex flex-wrap gap-1">
            {pokemon.resistant.map((r) => (
              <span key={r} className="bg-green-100 rounded px-2 py-0.5 text-xs">
                {r}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-1">Weaknesses</h3>
          <div className="flex flex-wrap gap-1">
            {pokemon.weaknesses.map((w) => (
              <span key={w} className="bg-red-100 rounded px-2 py-0.5 text-xs">
                {w}
              </span>
            ))}
          </div>
        </div>
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