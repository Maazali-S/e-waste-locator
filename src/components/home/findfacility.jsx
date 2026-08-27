import { MapPin, Search, Navigation, ShieldCheck } from "lucide-react";

export default function FindFacilitySection() {
  return (
    <section
      style={{
        padding: "100px 8%",
        background: "linear-gradient(180deg,#ffffff 0%,#eefaf3 100%)",
      }}
    >
      <div
        style={{
          background: "linear-gradient(135deg,#0F766E,#22C55E)",
          borderRadius: "32px",
          padding: "50px",
          color: "white",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ maxWidth: "520px" }}>
          <h2 style={{ fontSize: "2.8rem", marginBottom: "15px" }}>
            Find a Verified Recycling Center
          </h2>

          <p style={{ opacity: 0.9, lineHeight: 1.7 }}>
            Locate nearby CPCB-authorized e-waste collection centers and recycle
            safely.
          </p>
        </div>

        <div
          style={{
            marginTop: "35px",
            background: "rgba(255,255,255,.15)",
            backdropFilter: "blur(18px)",
            borderRadius: "22px",
            padding: "18px",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                flex: 1,
                minWidth: "220px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                background: "white",
                color: "#111",
                padding: "14px",
                borderRadius: "14px",
              }}
            >
              <Search size={18} />
              <input
                placeholder="Search your city..."
                style={{
                  border: "none",
                  outline: "none",
                  width: "100%",
                  background: "transparent",
                }}
              />
            </div>

            <button
              style={{
                border: "none",
                background: "white",
                color: "#0F766E",
                padding: "14px 18px",
                borderRadius: "14px",
                cursor: "pointer",
              }}
            >
              <Navigation size={18} />
            </button>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "18px",
            marginTop: "35px",
          }}
        >
          {[
            { name: "EcoRecycle", km: "2.1 km" },
            { name: "GreenWave Hub", km: "4.8 km" },
            { name: "Earth Reclaim", km: "6.4 km" },
          ].map((item) => (
            <div
              key={item.name}
              style={{
                background: "rgba(255,255,255,.14)",
                backdropFilter: "blur(14px)",
                borderRadius: "22px",
                padding: "20px",
              }}
            >
              <MapPin size={28} />

              <h3 style={{ margin: "14px 0 8px" }}>{item.name}</h3>

              <p style={{ opacity: 0.85 }}>{item.km} away</p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  marginTop: "14px",
                  fontSize: "14px",
                }}
              >
                <ShieldCheck size={16} />
                CPCB Verified
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}