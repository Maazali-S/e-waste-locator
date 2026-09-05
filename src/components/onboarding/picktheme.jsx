const themes = [
  { name: "Forest", color: "#22C55E" },
  { name: "Ocean", color: "#2563EB" },
  { name: "Sunset", color: "#F97316" },
  { name: "Midnight", color: "#111827" },
];

export default function ThemePicker({
  value,
  onChange,
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2,1fr)",
        gap: "18px",
      }}
    >
      {themes.map((theme) => (
        <button
          key={theme.name}
          onClick={() => onChange(theme.name)}
          style={{
            border:
              value === theme.name
                ? "3px solid #22C55E"
                : "1px solid #E5E7EB",
            borderRadius: "22px",
            padding: "20px",
            background: "white",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "80px",
              borderRadius: "16px",
              background: theme.color,
              marginBottom: "14px",
            }}
          />

          <strong>{theme.name}</strong>
        </button>
      ))}
    </div>
  );
}