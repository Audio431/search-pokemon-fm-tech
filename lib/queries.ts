import { gql } from "@apollo/client";

export const GET_POKEMON = gql`
  query GetPokemon($name: String!) {
    pokemon(name: $name) {
      id
      number
      name
      image
      types
      classification
      resistant
      weaknesses
      fleeRate
      maxCP
      maxHP
      weight { minimum maximum }
      height { minimum maximum }
      attacks {
        fast { name type damage }
        special { name type damage }
      }
      evolutions {
        id number name image types
        evolutions {
          id number name image types
        }
      }
      evolutionRequirements { amount name }
    }
  }
`;