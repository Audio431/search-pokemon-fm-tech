import type { PokemonAttack, Attack } from "@/lib/types";

function AttackTable({ label, attacks }: { label: string; attacks: Attack[] }) {
    
    // Return null if no attacks
    if (!attacks || attacks.length === 0) return null;

    // Render table of attacks
    return (
        <div className={label === "Fast" ? "mb-3" : ""}>
        <h4 className="font-medium text-sm text-gray-500 mb-1">{label}</h4>
        <table className="w-full text-sm">
            <thead>
            <tr className="text-left border-b">
                <th className="py-1">Name</th>
                <th className="py-1">Type</th>
                <th className="py-1 text-right">Damage</th>
            </tr>
            </thead>
            <tbody>
            {attacks.map((a) => (
                <tr key={a.name} className="border-b border-gray-100">
                <td className="py-1">{a.name}</td>
                <td className="py-1">{a.type}</td>
                <td className="py-1 text-right">{a.damage}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
}

interface Props {
  attacks: PokemonAttack; // attacks object containing fast and special attacks
}

// Component to display list of attacks
export default function AttackList({ attacks }: Props) {
  return (
    <div className="mt-4">
      <h3 className="font-semibold text-lg mb-2">Attacks</h3>
      <AttackTable label="Fast" attacks={attacks.fast} />
      <AttackTable label="Special" attacks={attacks.special} />
    </div>
  );
}
