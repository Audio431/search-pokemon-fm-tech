import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Search Pokémon FM Tech",
};

export default function RootLayout({ children }) {
  return (
    <html><body><Providers>{children}</Providers></body></html>
  );
}