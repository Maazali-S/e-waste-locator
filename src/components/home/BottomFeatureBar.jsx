import {
  Recycle,
  Gift,
  BookOpen,
  Trophy,
  ArrowRight,
} from "lucide-react";

export default function BottomFeatureBar() {
  const features = [
    { icon: Recycle, title: "Verified Recycling" },
    { icon: Gift, title: "Earn Rewards" },
    { icon: BookOpen, title: "Learn E-Waste" },
    { icon: Trophy, title: "Track Progress" },
  ];

  return (
    <section
      style={{
        padding: "80px 8% 100px",
        background: "linear-gradient(180deg,#ffffff 0%,#ECFDF5 100%)",
      }}
    >
      <div
        style={{
          background: "linear-gradient(135deg,#062F2B,#0F766E)",
          borderRadius: "32px",
          padding: "40px",
          color: "white",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
            marginBottom: "35px",
          }}
        >
          <div>
            <h2 style={{ fontSize: "2.2rem", marginBottom: "8px" }}>
              Ready to Make an Impact?
            </h2>
            <p style={{ opacity: 0.85 }}>
              Recycle smarter, earn rewards, and help build a greener future.
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
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Get Started <ArrowRight size={18} />
          </button>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
            gap: "18px",
          }}
        >
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                style={{
                  background: "rgba(255,255,255,.08)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,.12)",
                  borderRadius: "20px",
                  padding: "22px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "16px",
                    background: "rgba(255,255,255,.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 15px",
                  }}
                >
                  <Icon size={28} />
                </div>

                <h3 style={{ margin: 0, fontSize: "1rem" }}>
                  {feature.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}