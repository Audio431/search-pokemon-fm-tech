function TagGroup({ label, items, color }: { label: string; items: string[]; color: string }) {
  return (
    <div>
      <h3 className="font-semibold mb-1">{label}</h3>
      <div className="flex flex-wrap gap-1">
        {items.map((item) => (
          <span key={item} className={`${color} rounded px-2 py-0.5 text-xs`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default TagGroup;