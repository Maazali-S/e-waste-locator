import { dashboardData } from "../data/dashboard";
import BackButton from "../components/common/BackButton";
import {
  Flame,
  Trophy,
  Leaf,
  Recycle,
  Gift,
  ChevronRight,
} from "lucide-react";

export default function Dashboard() {
  const d = dashboardData;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F5F9F7",
        padding: "40px 8%",
        fontFamily: "Poppins, sans-serif",
      }}
    >   <BackButton />
      {/* Welcome */}
      <div
        style={{
          background: "linear-gradient(135deg,#0F766E,#22C55E)",
          color: "white",
          borderRadius: "30px",
          padding: "40px",
          marginBottom: "35px",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>
          Welcome back, {d.user}!
        </h1>
        <p>Keep recycling and climb the EcoLoop leaderboard.</p>
      </div>

      {/* Top Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "22px",
          marginBottom: "35px",
        }}
      >
        {/* Eco Points */}
        <div
          style={{
            background: "white",
            borderRadius: "24px",
            padding: "28px",
            textAlign: "center",
            boxShadow: "0 10px 25px rgba(0,0,0,.08)",
          }}
        >
          <div
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              border: "8px solid #22C55E",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 20px",
              fontSize: "2rem",
              fontWeight: "700",
              color: "#0F766E",
            }}
          >
            {d.points}
          </div>

          <h3>Eco Points</h3>
        </div>

        {/* Level */}
        <div
          style={{
            background: "white",
            borderRadius: "24px",
            padding: "28px",
            boxShadow: "0 10px 25px rgba(0,0,0,.08)",
          }}
        >
          <Gift color="#22C55E" size={34} />
          <h3>{d.level}</h3>
          <p style={{ color: "#64748B" }}>Current Level</p>
        </div>

        {/* Rank */}
        <div
          style={{
            background: "white",
            borderRadius: "24px",
            padding: "28px",
            boxShadow: "0 10px 25px rgba(0,0,0,.08)",
          }}
        >
          <Trophy color="#F59E0B" size={34} />
          <h2>#{d.rank}</h2>
          <p style={{ color: "#64748B" }}>City Rank</p>
        </div>

        {/* Streak */}
        <div
          style={{
            background: "white",
            borderRadius: "24px",
            padding: "28px",
            boxShadow: "0 10px 25px rgba(0,0,0,.08)",
          }}
        >
          <Flame color="#EF4444" size={34} />
          <h2>{d.streak} Days</h2>
          <p style={{ color: "#64748B" }}>Current Streak</p>
        </div>
      </div>

      {/* Middle Section */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.3fr 1fr",
          gap: "25px",
          marginBottom: "35px",
        }}
      >
        {/* Recent Activity */}
        <div
          style={{
            background: "white",
            borderRadius: "24px",
            padding: "28px",
            boxShadow: "0 10px 25px rgba(0,0,0,.08)",
          }}
        >
          <h2 style={{ marginBottom: "20px" }}>Recent Activity</h2>

          {d.recent.map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "15px 0",
                borderBottom:
                  i !== d.recent.length - 1 ? "1px solid #EDF2F7" : "none",
              }}
            >
              <div>
                <div>{item.text}</div>
              </div>

              <strong style={{ color: "#16A34A" }}>{item.points}</strong>
            </div>
          ))}
        </div>

        {/* Leaderboard */}
        <div
          style={{
            background: "white",
            borderRadius: "24px",
            padding: "28px",
            boxShadow: "0 10px 25px rgba(0,0,0,.08)",
          }}
        >
          <h2 style={{ marginBottom: "20px" }}>Leaderboard</h2>

          {d.leaderboard.map((user, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "12px 0",
                color: user.name === "Amina" ? "#0F766E" : "#374151",
                fontWeight: user.name === "Amina" ? "700" : "500",
              }}
            >
              <span>
                {i + 1}. {user.name}
              </span>

              <span>{user.points}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: "25px",
        }}
      >
        {/* Impact */}
        <div
          style={{
            background: "white",
            borderRadius: "24px",
            padding: "28px",
            boxShadow: "0 10px 25px rgba(0,0,0,.08)",
          }}
        >
          <h2 style={{ marginBottom: "20px" }}>Environmental Impact</h2>

          <div style={{ display: "grid", gap: "16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>Devices Recycled</span>
              <strong>{d.devices}</strong>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>CO₂ Saved</span>
              <strong>{d.co2}</strong>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>Gold Recovered</span>
              <strong>{d.gold}</strong>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>Copper Recovered</span>
              <strong>{d.copper}</strong>
            </div>
          </div>
        </div>

        {/* Challenges */}
        <div
          style={{
            background: "white",
            borderRadius: "24px",
            padding: "28px",
            boxShadow: "0 10px 25px rgba(0,0,0,.08)",
          }}
        >
          <h2 style={{ marginBottom: "20px" }}>Daily Challenges</h2>

          <div style={{ display: "grid", gap: "15px" }}>
            {d.challenges.map((challenge, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  background: "#F8FAFC",
                  padding: "15px",
                  borderRadius: "16px",
                }}
              >
                <div>
                  <strong>{challenge.title}</strong>
                  <div style={{ color: "#16A34A", fontSize: "14px" }}>
                    {challenge.reward}
                  </div>
                </div>

                <ChevronRight />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}