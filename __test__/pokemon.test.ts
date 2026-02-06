const pokemonMocks = {
  Bulbasaur: {
    name: "Bulbasaur",
    types: ["Grass", "Poison"],
  },
  Charmander: {
    name: "Charmander",
    types: ["Fire"],
  },
  Squirtle: {
    name: "Squirtle",
    types: ["Water"],
  },
};

describe("Pokémon types", () => {
  it("Bulbasaur should be Grass type", () => {
    expect(pokemonMocks.Bulbasaur.types).toContain("Grass");
  });

  it("Charmander should be Fire type", () => {
    expect(pokemonMocks.Charmander.types).toContain("Fire");
  });

  it("Squirtle should be Water type", () => {
    expect(pokemonMocks.Squirtle.types).toContain("Water");
  });
});