# Search Pokémon FM Tech

A Pokémon search application built with Next.js, TypeScript, and GraphQL (Apollo Client) for the Future Makers Full Stack Developer Test.

**Live:** https://atip-search-pokemon-fm-tech.vercel.app

## Functional Requirements

- [x] Search input that searches Pokémon by name
- [x] Search value reflected in URL (path param `/pokemon/[name]`)
- [x] Result displays all available Pokémon information
- [x] Clear "not found" state when no result exists
- [x] Attacks displayed (fast and special)
- [x] Evolutions displayed
- [x] Clicking evolution name updates URL and displays selected evolution

## Additional Features

- Apollo cache-first policy with `typePolicies` keyed by Pokémon name — no redundant network requests
- Client-side autocomplete by preloading all 151 Pokémon with `useMemo` filtering
- Next.js dynamic routes (`/pokemon/[name]`) for shareable URLs
- localStorage recent searches with try-catch for graceful degradation
- React `<Suspense>` for loading states
- Seven single-responsibility components: SearchBar, AutoComplete, PokemonResult, AttackList, EvolutionChain, StatGrid, TagGroup

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Apollo Client 4
- Tailwind CSS
- Jest (testing)

## Getting Started

```bash
yarn install
yarn dev
```

Open http://localhost:3000

## Testing

```bash
yarn test
```

## Project Structure

```
app/
├── components/
│   ├── SearchBar.tsx
│   ├── AutoComplete.tsx
│   ├── PokemonResult.tsx
│   ├── AttackList.tsx
│   ├── EvolutionChain.tsx
│   ├── StatGrid.tsx
│   └── TagGroup.tsx
├── pokemon/[name]/
│   └── page.tsx
├── layout.tsx
├── page.tsx
└── providers.tsx
lib/
├── apollo.ts
├── queries.ts
└── types.ts
```
