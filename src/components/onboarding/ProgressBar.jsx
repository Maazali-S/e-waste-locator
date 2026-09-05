export default function ProgressBar({ current, total }) {
  const percent = ((current + 1) / total) * 100;

  return (
    <div style={{ marginBottom: "30px" }}>
      <div
        style={{
          height: "10px",
          background: "#E5E7EB",
          borderRadius: "999px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${percent}%`,
            height: "100%",
            background: "linear-gradient(90deg,#22C55E,#0F766E)",
            transition: ".4s ease",
          }}
        />
      </div>

      <p
        style={{
          textAlign: "right",
          marginTop: "8px",
          color: "#64748B",
          fontSize: "14px",
        }}
      >
        {current + 1}/{total}
      </p>
    </div>
  );
}