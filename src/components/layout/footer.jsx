import {
  Recycle,
  MapPin,
  Mail,
  Phone,
  Globe,
  ArrowUpRight,
  Code2,
  Link,
} from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#041A18",
        color: "#E5F7F3",
        padding: "70px 8% 30px",
        borderTopLeftRadius: "40px",
        borderTopRightRadius: "40px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "40px",
          marginBottom: "50px",
        }}
      >
        {/* Brand */}
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "18px",
            }}
          >
            <Recycle size={28} color="#22C55E" />
            <h2 style={{ margin: 0 }}>EcoLoop</h2>
          </div>

          <p style={{ color: "#A7C7C0", lineHeight: 1.7 }}>
            Recycle smarter, earn rewards, and make every electronic device
            count towards a greener future.
          </p>
        </div>

        {/* Platform */}
        <div>
          <h3 style={{ marginBottom: "18px" }}>Platform</h3>

          {["Find Facility", "Device Lookup", "Knowledge Hub", "Rewards"].map(
            (item) => (
              <p
                key={item}
                style={{
                  color: "#A7C7C0",
                  marginBottom: "12px",
                  cursor: "pointer",
                }}
              >
                {item}
              </p>
            )
          )}
        </div>

        {/* Company */}
        <div>
          <h3 style={{ marginBottom: "18px" }}>Company</h3>

          {["About", "Privacy", "Terms", "Support"].map((item) => (
            <p
              key={item}
              style={{
                color: "#A7C7C0",
                marginBottom: "12px",
                cursor: "pointer",
              }}
            >
              {item}
            </p>
          ))}
        </div>

        {/* Contact */}
        <div>
          <h3 style={{ marginBottom: "18px" }}>Contact</h3>

          <div style={{ display: "grid", gap: "14px" }}>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <MapPin size={18} color="#22C55E" />
              <span style={{ color: "#A7C7C0" }}>India</span>
            </div>

            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <Mail size={18} color="#22C55E" />
              <span style={{ color: "#A7C7C0" }}>hello@ecoloop.app</span>
            </div>

            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <Phone size={18} color="#22C55E" />
              <span style={{ color: "#A7C7C0" }}>+91 XXXXX XXXXX</span>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div
        style={{
          height: "1px",
          background: "rgba(255,255,255,.08)",
          marginBottom: "25px",
        }}
      />

      {/* Bottom */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <p style={{ color: "#7AA39A", margin: 0 }}>
          © 2026 EcoLoop. Built for a sustainable future.
        </p>

        <div style={{ display: "flex", gap: "14px" }}>
          {[Globe, Link, Code2].map((Icon, index) => (
            <div
              key={index}
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "12px",
                background: "rgba(255,255,255,.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <Icon size={18} />
            </div>
          ))}

          <div
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "12px",
              background: "#22C55E",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <ArrowUpRight size={18} color="white" />
          </div>
        </div>
      </div>
    </footer>
  );
}