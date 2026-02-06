export interface Attack {
  name: string;
  type: string;
  damage: number;
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
  weight: { minimum: string; maximum: string };
  height: { minimum: string; maximum: string };
  attacks: {
    fast: Attack[];
    special: Attack[];
  };
  evolutions: PokemonEvolution[] | null;
  evolutionRequirements: { amount: number; name: string } | null;
}

export interface GetPokemonData {
  pokemon: Pokemon | null;
}

export interface GetPokemonVars {
  name: string;
}
