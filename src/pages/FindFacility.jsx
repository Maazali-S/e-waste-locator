import { useState } from "react";
import { Search, MapPin, Star, ShieldCheck } from "lucide-react";
import { facilities } from "../data/facilities";
import BackButton from "../components/common/BackButton";

export default function FindFacility() {
  const [city, setCity] = useState("");
  const [verifiedOnly, setVerifiedOnly] = useState(false);

  const filtered = facilities.filter((f) => {
    const matchCity = f.city.toLowerCase().includes(city.toLowerCase());
    const matchVerified = verifiedOnly ? f.verified : true;
    return matchCity && matchVerified;
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F6FBF8",
        padding: "40px 8%",
        fontFamily: "Poppins,sans-serif",
      }}
    > <BackButton />
      <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>
        Find Nearby Recycling Centers
      </h1>

      <p style={{ color: "#64748B", marginBottom: "35px" }}>
        Search CPCB-authorized e-waste collection centers.
      </p>

      <div
        style={{
          display: "flex",
          gap: "15px",
          flexWrap: "wrap",
          marginBottom: "30px",
        }}
      >
        <div
          style={{
            flex: 1,
            minWidth: "260px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            background: "white",
            padding: "15px",
            borderRadius: "18px",
            boxShadow: "0 8px 25px rgba(0,0,0,.06)",
          }}
        >
          <Search color="#0F766E" />

          <input
            placeholder="Search city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            style={{
              border: "none",
              outline: "none",
              width: "100%",
              background: "transparent",
              fontSize: "16px",
            }}
          />
        </div>

        <button
          onClick={() => setVerifiedOnly(!verifiedOnly)}
          style={{
            border: "none",
            padding: "15px 22px",
            borderRadius: "18px",
            cursor: "pointer",
            background: verifiedOnly ? "#0F766E" : "white",
            color: verifiedOnly ? "white" : "#0F766E",
            boxShadow: "0 8px 25px rgba(0,0,0,.06)",
            fontWeight: "600",
          }}
        >
          CPCB Verified
        </button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: "25px",
        }}
      >
        {filtered.map((facility) => (
          <div
            key={facility.id}
            style={{
              background: "white",
              borderRadius: "24px",
              padding: "24px",
              boxShadow: "0 12px 30px rgba(0,0,0,.08)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h3 style={{ margin: 0 }}>{facility.name}</h3>

              {facility.verified && (
                <ShieldCheck color="#22C55E" size={22} />
              )}
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                color: "#64748B",
                marginTop: "12px",
              }}
            >
              <MapPin size={16} />
              {facility.city} • {facility.distance}
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                marginTop: "12px",
              }}
            >
              <Star fill="#FACC15" color="#FACC15" size={18} />
              {facility.rating}
            </div>

            <button
              onClick={() => window.open(facility.maps, "_blank")}
              style={{
                width: "100%",
                marginTop: "22px",
                border: "none",
                borderRadius: "16px",
                padding: "14px",
                background: "linear-gradient(135deg,#0F766E,#22C55E)",
                color: "white",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              Get Directions
            </button>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div style={{ textAlign: "center", marginTop: "60px", color: "#64748B" }}>
          No facilities found.
        </div>
      )}
    </div>
  );
}