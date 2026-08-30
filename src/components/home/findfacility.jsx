import { useState } from "react";
import {
  MapPin,
  Search,
  Navigation,
  ShieldCheck,
} from "lucide-react";

import { facilities } from "../../data/facilities";

export default function FindFacilitySection() {
  const [city, setCity] = useState("");

  const filteredFacilities = facilities
    .filter((facility) => facility.verified)
    .filter((facility) =>
      facility.city.toLowerCase().includes(city.toLowerCase())
    )
    .slice(0, 3);

  return (
    <section
      style={{
        padding: "100px 8%",
        background:
          "linear-gradient(180deg,#ffffff 0%,#eefaf3 100%)",
      }}
    >
      <div
        style={{
          background:
            "linear-gradient(135deg,#0F766E,#22C55E)",
          borderRadius: "32px",
          padding: "50px",
          color: "white",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Heading */}
        <div style={{ maxWidth: "520px" }}>
          <h2
            style={{
              fontSize: "2.8rem",
              marginBottom: "15px",
            }}
          >
            Find a Verified Recycling Center
          </h2>

          <p
            style={{
              opacity: 0.9,
              lineHeight: 1.7,
            }}
          >
            Locate nearby CPCB-authorized e-waste recycling
            centers and recycle safely.
          </p>
        </div>

        {/* Search */}
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
                value={city}
                onChange={(e) => setCity(e.target.value)}
                style={{
                  border: "none",
                  outline: "none",
                  width: "100%",
                  background: "transparent",
                }}
              />
            </div>

            <button
              onClick={() => {
                if (filteredFacilities.length > 0) {
                  window.open(
                    filteredFacilities[0].maps,
                    "_blank"
                  );
                }
              }}
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

        {/* Facilities */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(220px,1fr))",
            gap: "18px",
            marginTop: "35px",
          }}
        >
          {filteredFacilities.map((facility) => (
            <div
              key={facility.id}
              style={{
                background: "rgba(255,255,255,.14)",
                backdropFilter: "blur(14px)",
                borderRadius: "22px",
                padding: "20px",
              }}
            >
              <MapPin size={28} />

              <h3
                style={{
                  margin: "14px 0 8px",
                }}
              >
                {facility.name}
              </h3>

              <p
                style={{
                  opacity: 0.85,
                }}
              >
                {facility.distance} away
              </p>

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

              <button
                onClick={() =>
                  window.open(
                    facility.maps,
                    "_blank"
                  )
                }
                style={{
                  marginTop: "16px",
                  border: "none",
                  borderRadius: "10px",
                  padding: "9px 14px",
                  background: "white",
                  color: "#0F766E",
                  cursor: "pointer",
                  fontWeight: "600",
                }}
              >
                Get Directions
              </button>
            </div>
          ))}

          {filteredFacilities.length === 0 && (
            <div
              style={{
                gridColumn: "1 / -1",
                textAlign: "center",
                padding: "30px",
              }}
            >
              No verified facilities found for this city.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}