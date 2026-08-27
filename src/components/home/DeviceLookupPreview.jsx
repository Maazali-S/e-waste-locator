import { Search, Smartphone, Laptop, BatteryCharging, ArrowRight } from "lucide-react";

export default function DeviceLookupPreview() {
  const devices = [
    { icon: Smartphone, name: "Smartphone", tag: "Recycle Guide" },
    { icon: Laptop, name: "Laptop", tag: "Material Info" },
    { icon: BatteryCharging, name: "Battery", tag: "Safe Disposal" },
  ];

  return (
    <section
      style={{
        padding: "90px 8%",
        background: "#fff",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: "35px",
          alignItems: "center",
        }}
      >
        {/* Left */}
        <div>
          <h2 style={{ fontSize: "2.8rem", marginBottom: "15px" }}>
            Search Any Device
          </h2>

          <p style={{ color: "#64748B", lineHeight: 1.7, marginBottom: "30px" }}>
            Instantly discover how to recycle your electronics and what valuable
            materials can be recovered.
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              background: "#F8FFFB",
              border: "2px solid #DCFCE7",
              borderRadius: "18px",
              padding: "16px",
            }}
          >
            <Search color="#0F766E" />
            <input
              placeholder="Try 'Old Phone' or 'Laptop Battery'"
              style={{
                border: "none",
                outline: "none",
                flex: 1,
                background: "transparent",
                fontSize: "16px",
              }}
            />
          </div>

          <button
            style={{
              marginTop: "22px",
              border: "none",
              background: "linear-gradient(135deg,#0F766E,#22C55E)",
              color: "white",
              padding: "14px 24px",
              borderRadius: "14px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Search Device <ArrowRight size={18} />
          </button>
        </div>

        {/* Right */}
        <div style={{ display: "grid", gap: "18px" }}>
          {devices.map((device) => {
            const Icon = device.icon;

            return (
              <div
                key={device.name}
                style={{
                  background: "linear-gradient(135deg,#ffffff,#F0FDF4)",
                  borderRadius: "22px",
                  padding: "22px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  boxShadow: "0 12px 28px rgba(15,118,110,.08)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "18px",
                      background: "linear-gradient(135deg,#0F766E,#22C55E)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                    }}
                  >
                    <Icon size={28} />
                  </div>

                  <div>
                    <h3 style={{ margin: 0 }}>{device.name}</h3>
                    <p style={{ color: "#64748B", marginTop: "4px" }}>{device.tag}</p>
                  </div>
                </div>

                <ArrowRight color="#0F766E" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}