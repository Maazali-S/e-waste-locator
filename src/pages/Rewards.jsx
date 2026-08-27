import { Gift, Coins } from "lucide-react";
import { rewards } from "../data/rewards";
import BackButton from "../components/common/BackButton";

export default function Rewards() {
  return (
    <div style={{
      padding: "40px 8%",
      minHeight: "100vh",
      background: "#F8FCFA",
      fontFamily: "Poppins, sans-serif",
    }}>
      <BackButton />
      <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>Rewards Store</h1>
      <p style={{ color: "#64748B", marginBottom: "35px" }}>
        Redeem your Eco Points for exciting rewards.
      </p>

      <div style={{
        background: "linear-gradient(135deg,#0F766E,#22C55E)",
        color: "white",
        padding: "30px",
        borderRadius: "28px",
        marginBottom: "35px",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Coins size={28}/>
          <h2 style={{ margin: 0 }}>420 Eco Points Available</h2>
        </div>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
        gap: "24px",
      }}>
        {rewards.map((item) => (
          <div key={item.id} style={{
            background: "white",
            borderRadius: "22px",
            padding: "24px",
            boxShadow: "0 12px 30px rgba(0,0,0,.08)",
          }}>
            <Gift color="#22C55E" size={34}/>
            <h2 style={{ margin: "16px 0 8px" }}>{item.brand}</h2>
            <p style={{ color: "#64748B" }}>{item.reward}</p>

            <div style={{
              margin: "18px 0",
              display: "inline-block",
              background: "#DCFCE7",
              color: "#166534",
              padding: "8px 14px",
              borderRadius: "999px",
              fontWeight: "600",
            }}>
              {item.cost} Points
            </div>

            <button style={{
              width: "100%",
              border: "none",
              padding: "14px",
              borderRadius: "14px",
              background: "linear-gradient(135deg,#0F766E,#22C55E)",
              color: "white",
              cursor: "pointer",
              fontWeight: "600",
            }}>
              Redeem
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}