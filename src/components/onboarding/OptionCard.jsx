export default function OptionCard({
  title,
  selected,
  onClick,
  icon,
}) {
  return (
    <button
      onClick={onClick}
      style={{
        width: "100%",
        border: selected
          ? "2px solid #22C55E"
          : "1px solid #D1D5DB",
        background: selected ? "#ECFDF5" : "white",
        borderRadius: "18px",
        padding: "18px",
        cursor: "pointer",
        display: "flex",
        gap: "15px",
        alignItems: "center",
        transition: ".25s",
        textAlign: "left",
      }}
    >
      {icon}

      <strong>{title}</strong>
    </button>
  );
}