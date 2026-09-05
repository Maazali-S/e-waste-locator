export default function StepCard({ title, subtitle, children }) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,.9)",
        backdropFilter: "blur(18px)",
        borderRadius: "32px",
        padding: "45px",
        boxShadow: "0 20px 50px rgba(0,0,0,.12)",
        animation: "fade .35s ease",
      }}
    >
      <style>{`
        @keyframes fade{
          from{
            opacity:0;
            transform:translateY(18px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }
      `}</style>

      <h1 style={{ fontSize: "2.3rem", marginBottom: "12px" }}>{title}</h1>

      <p
        style={{
          color: "#64748B",
          marginBottom: "35px",
          lineHeight: 1.7,
        }}
      >
        {subtitle}
      </p>

      {children}
    </div>
  );
}