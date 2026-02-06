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
	// Test Bulbasaur → Grass
  it("Bulbasaur should be Grass type", () => {
    expect(pokemonMocks.Bulbasaur.types).toContain("Grass");
  });
	// Test Charmander → Fire
  it("Charmander should be Fire type", () => {
    expect(pokemonMocks.Charmander.types).toContain("Fire");
  });

	// Test Squirtle → Water
  it("Squirtle should be Water type", () => {
    expect(pokemonMocks.Squirtle.types).toContain("Water");
  });
	// Additional test for Bulbasaur's secondary type
	// Test Bulbasaur → Poison
  it("Bulbasaur should have Poison as secondary type", () => {
    expect(pokemonMocks.Bulbasaur.types).toContain("Poison");
  });

});