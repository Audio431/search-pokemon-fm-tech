// === API Response Types ===

export interface Attack {
  name: string;
  type: string;
  damage: number;
}

export interface PokemonAttack {
  fast: Attack[];
  special: Attack[];
}

export interface PokemonDimension {
  minimum: string;
  maximum: string;
}

export interface PokemonEvolutionRequirement {
  amount: number;
  name: string;
}

export interface PokemonEvolution {
  id: string;
  number: string;
  name: string;
  image: string;
  types: string[];
  evolutions?: PokemonEvolution[];
}

export interface Pokemon {
  id: string;
  number: string;
  name: string;
  image: string;
  types: string[];
  classification: string;
  resistant: string[];
  weaknesses: string[];
  fleeRate: number;
  maxCP: number;
  maxHP: number;
  weight: PokemonDimension;
  height: PokemonDimension;
  attacks: PokemonAttack;
  evolutions: PokemonEvolution[];
  evolutionRequirements: PokemonEvolutionRequirement | null;
}

// === Summary type for autocomplete (from pokemons query) ===

export interface PokemonSummary {
  id: string;
  number: string;
  name: string;
  image: string;
}

// === Query types ===

export interface GetPokemonData {
  pokemon: Pokemon | null;
}

export interface GetPokemonVars {
  name: string;
}

export interface GetPokemonsData {
  pokemons: PokemonSummary[];
}