"use client";
import { Suspense } from "react";
import SearchBar from "@/app/components/SearchBar";


// Use Suspense to wrap the SearchBar component for better loading state management
export default function Home() {
  return (
    <main className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Pokémon Search</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <SearchBar />
      </Suspense>
    </main>
  );
}