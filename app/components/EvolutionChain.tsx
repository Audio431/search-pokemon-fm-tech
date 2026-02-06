"use client";
import Image from "next/image";
import type { PokemonEvolution } from "@/lib/types";
// Component to display the evolution chain of a Pokémon

interface Props {
  evolutions: PokemonEvolution[];
  onClick: (name: string) => void;
}

export default function EvolutionChain({ evolutions, onClick }: Props) {
  return (
    <div className="mt-4">
      <h3 className="font-semibold text-lg mb-2">Evolutions</h3>
      <div className="flex flex-wrap gap-4">
        {evolutions.map((evo) => (
          <button
            key={evo.id}
            onClick={() => onClick(evo.name)}
            className="flex flex-col items-center p-3 border rounded hover:bg-blue-50 transition-colors cursor-pointer"
          >
            <Image
              src={evo.image}
              alt={evo.name}
              width={64}
              height={64}
              className="w-16 h-16 object-contain"
            />
            <span className="text-xs text-gray-400">#{evo.number}</span>
            <span className="font-medium text-sm">{evo.name}</span>
            <div className="flex gap-1 mt-1">
              {evo.types.map((t) => (
                <span
                  key={t}
                  className="bg-gray-200 rounded px-1.5 py-0.5 text-xs"
                >
                  {t}
                </span>
              ))}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}