import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Search Pokémon FM Tech",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html><body><Providers>{children}</Providers></body></html>
  );
}