import { useState } from "react";
import {
  Search,
  MapPin,
  ShieldCheck,
  Phone,
  Clock,
  Recycle,
  ExternalLink,
} from "lucide-react";

import { facilities } from "../data/facilities";
import BackButton from "../components/common/BackButton";

export default function FindFacility() {
  const [city, setCity] = useState("");
  const [verifiedOnly, setVerifiedOnly] = useState(false);

  // Filter facilities
  const filtered = facilities.filter((facility) => {
    const searchText = city.toLowerCase().trim();

    const matchCity =
      searchText === "" ||
      facility.city.toLowerCase().includes(searchText) ||
      facility.name.toLowerCase().includes(searchText) ||
      facility.address.toLowerCase().includes(searchText);

    const matchVerified = verifiedOnly
      ? facility.verified === true
      : true;

    return matchCity && matchVerified;
  });

  // Open Google Maps using latitude and longitude
  const getDirections = (facility) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${facility.latitude},${facility.longitude}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F6FBF8",
        padding: "40px 8%",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* Back Button */}
      <BackButton />

      {/* Header */}
      <div style={{ marginTop: "25px", marginBottom: "35px" }}>
        <h1
          style={{
            fontSize: "3rem",
            marginBottom: "10px",
            color: "#111827",
          }}
        >
          Find Nearby Recycling Centers
        </h1>

        <p
          style={{
            color: "#64748B",
            fontSize: "16px",
            lineHeight: 1.6,
          }}
        >
          Find verified e-waste recycling facilities and dispose of your
          electronics responsibly.
        </p>
      </div>

      {/* Search + Filter */}
      <div
        style={{
          display: "flex",
          gap: "15px",
          flexWrap: "wrap",
          marginBottom: "35px",
        }}
      >
        {/* Search Box */}
        <div
          style={{
            flex: 1,
            minWidth: "280px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            background: "white",
            padding: "15px 18px",
            borderRadius: "18px",
            boxShadow: "0 8px 25px rgba(0,0,0,.06)",
          }}
        >
          <Search color="#0F766E" size={21} />

          <input
            type="text"
            placeholder="Search city or facility..."
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

        {/* Verified Filter */}
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
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <ShieldCheck size={20} />
          CPCB Verified
        </button>
      </div>

      {/* Result Count */}
      <div
        style={{
          marginBottom: "20px",
          color: "#64748B",
          fontSize: "14px",
        }}
      >
        Showing <strong>{filtered.length}</strong> recycling facilities
      </div>

      {/* Facility Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "25px",
        }}
      >
        {filtered.map((facility) => (
          <div
            key={facility.id}
            style={{
              background: "white",
              borderRadius: "24px",
              padding: "25px",
              boxShadow: "0 12px 30px rgba(0,0,0,.08)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Facility Name + Verification */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: "15px",
              }}
            >
              <h3
                style={{
                  margin: 0,
                  fontSize: "20px",
                  lineHeight: 1.4,
                  color: "#111827",
                }}
              >
                {facility.name}
              </h3>

              {facility.verified && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    color: "#16A34A",
                    fontSize: "13px",
                    fontWeight: "600",
                    whiteSpace: "nowrap",
                  }}
                >
                  <ShieldCheck size={19} />
                  Verified
                </div>
              )}
            </div>

            {/* City */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "8px",
                color: "#475569",
                marginTop: "15px",
                fontSize: "14px",
              }}
            >
              <MapPin
                size={18}
                color="#0F766E"
                style={{ flexShrink: 0, marginTop: "2px" }}
              />

              <span>
                <strong>{facility.city}</strong>
              </span>
            </div>

            {/* Address */}
            <div
              style={{
                marginTop: "10px",
                paddingLeft: "26px",
                color: "#64748B",
                fontSize: "14px",
                lineHeight: 1.6,
              }}
            >
              {facility.address}
            </div>

            {/* Accepted Items */}
            <div
              style={{
                marginTop: "18px",
                padding: "15px",
                background: "#F0FDF4",
                borderRadius: "16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#0F766E",
                  fontWeight: "600",
                  fontSize: "14px",
                  marginBottom: "7px",
                }}
              >
                <Recycle size={18} />
                Items Accepted
              </div>

              <p
                style={{
                  margin: 0,
                  color: "#475569",
                  fontSize: "13px",
                  lineHeight: 1.6,
                }}
              >
                {facility.itemsAccepted}
              </p>
            </div>

            {/* Phone */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "9px",
                marginTop: "16px",
                color: "#475569",
                fontSize: "14px",
              }}
            >
              <Phone size={17} color="#0F766E" />

              <a
                href={`tel:${facility.phone}`}
                style={{
                  color: "#475569",
                  textDecoration: "none",
                }}
              >
                {facility.phone}
              </a>
            </div>

            {/* Hours */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "9px",
                marginTop: "12px",
                color: "#475569",
                fontSize: "14px",
              }}
            >
              <Clock
                size={17}
                color="#0F766E"
                style={{
                  flexShrink: 0,
                  marginTop: "2px",
                }}
              />

              <span>{facility.hours}</span>
            </div>

            {/* Verification Source */}
            {facility.verified && (
              <div
                style={{
                  marginTop: "15px",
                  fontSize: "12px",
                  color: "#64748B",
                }}
              >
                Verification Source:{" "}
                <strong>Maharashtra Pollution Control Board (MPCB)</strong>
              </div>
            )}

            {/* Directions Button */}
            <button
              onClick={() => getDirections(facility)}
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
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                fontSize: "14px",
              }}
            >
              <MapPin size={18} />
              Get Directions
              <ExternalLink size={16} />
            </button>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filtered.length === 0 && (
        <div
          style={{
            textAlign: "center",
            marginTop: "70px",
            color: "#64748B",
          }}
        >
          <Search
            size={45}
            color="#94A3B8"
            style={{ marginBottom: "15px" }}
          />

          <h3
            style={{
              margin: 0,
              color: "#334155",
            }}
          >
            No facilities found
          </h3>

          <p>
            Try searching for another city or facility name.
          </p>
        </div>
      )}
    </div>
  );
}