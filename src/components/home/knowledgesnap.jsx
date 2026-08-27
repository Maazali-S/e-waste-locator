import { BatteryCharging, Smartphone, Cpu, ArrowRight } from "lucide-react";

export default function KnowledgeSnapshot() {
  const items = [
    { icon: Smartphone, title: "Phone", text: "Contains gold, silver & copper." },
    { icon: BatteryCharging, title: "Battery", text: "Needs safe disposal." },
    { icon: Cpu, title: "Laptop", text: "Recover valuable metals." },
  ];

  return (
    <section
      style={{
        padding: "90px 8%",
        background: "#F8FFFB",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>
          Did You Know?
        </h2>
        <p style={{ color: "#64748B" }}>
          Every device has recyclable materials waiting for a second life.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "22px",
        }}
      >
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              style={{
                background: "white",
                borderRadius: "24px",
                padding: "28px",
                boxShadow: "0 12px 30px rgba(15,118,110,.08)",
                transition: ".3s",
              }}
            >
              <div
                style={{
                  width: "58px",
                  height: "58px",
                  borderRadius: "18px",
                  background: "linear-gradient(135deg,#0F766E,#22C55E)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  marginBottom: "18px",
                }}
              >
                <Icon size={28} />
              </div>

              <h3>{item.title}</h3>
              <p style={{ color: "#64748B", lineHeight: 1.6 }}>{item.text}</p>
            </div>
          );
        })}
      </div>

      <div
        style={{
          marginTop: "40px",
          background: "linear-gradient(135deg,#0F766E,#22C55E)",
          borderRadius: "26px",
          padding: "28px",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <div>
          <h3 style={{ marginBottom: "6px" }}>Learn before you recycle</h3>
          <p style={{ opacity: 0.9 }}>
            Explore guides on e-waste, batteries, and responsible disposal.
          </p>
        </div>

        <button
          style={{
            border: "none",
            background: "white",
            color: "#0F766E",
            padding: "14px 22px",
            borderRadius: "14px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          Explore <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}