"use client";
import { Pokemon } from "@/lib/types";
// Component to display a grid of Pokémon stats in PokemonResult

function StatGrid({ pokemon }: { pokemon: Pokemon }) {
  return (
    <div className="grid grid-cols-2 gap-2 mt-4 text-sm">
      <p>Max CP: {pokemon.maxCP}</p>
      <p>Max HP: {pokemon.maxHP}</p>
      <p>Weight: {pokemon.weight.minimum} – {pokemon.weight.maximum}</p>
      <p>Height: {pokemon.height.minimum} – {pokemon.height.maximum}</p>
      <p>Flee Rate: {pokemon.fleeRate}</p>
    </div>
  );
}

export default StatGrid;