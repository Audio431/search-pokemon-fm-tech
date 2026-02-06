"use client";
import { useState, useRef, useEffect } from "react";
import type { PokemonSummary } from "@/lib/types";

interface Props {
  suggestions: PokemonSummary[];
  onSelect: (pokemon: PokemonSummary) => void;
  inputValue: string;
}

export default function AutoComplete({ suggestions, onSelect, inputValue }: Props) {
  const [show, setShow] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const listRef = useRef<HTMLUListElement>(null);

  // Reset highlight when input changes
  useEffect(() => {
    setHighlightIndex(-1);
    setShow(suggestions.length > 0);
  }, [inputValue, suggestions.length]);

  // Scroll highlighted item into view
  useEffect(() => {
    if (highlightIndex >= 0 && listRef.current) {
      const item = listRef.current.children[highlightIndex] as HTMLElement;
      item?.scrollIntoView({ block: "nearest" });
    }
  }, [highlightIndex]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!show || suggestions.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightIndex((i) => (i < suggestions.length - 1 ? i + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightIndex((i) => (i > 0 ? i - 1 : suggestions.length - 1));
    } else if (e.key === "Enter" && highlightIndex >= 0) {
      e.preventDefault();
      onSelect(suggestions[highlightIndex]);
      setShow(false);
    } else if (e.key === "Escape") {
      setShow(false);
    }
  };

  if (!show || suggestions.length === 0) return null;

  return (
    <ul
      ref={listRef}
      onKeyDown={handleKeyDown}
      className="absolute z-10 left-0 right-0 mt-1 bg-white border rounded shadow-lg max-h-64 overflow-y-auto"
    >
      {suggestions.map((p, i) => (
        <li
          key={p.id}
          onMouseDown={() => {
            onSelect(p);
            setShow(false);
          }}
          onMouseEnter={() => setHighlightIndex(i)}
          className={`flex items-center gap-3 px-3 py-2 cursor-pointer ${
            i === highlightIndex ? "bg-blue-50" : "hover:bg-gray-50"
          }`}
        >
          <img src={p.image} alt={p.name} className="w-8 h-8 object-contain" />
          <span className="text-gray-400 text-sm">#{p.number}</span>
          <span className="font-medium">{p.name}</span>
        </li>
      ))}
    </ul>
  );
}