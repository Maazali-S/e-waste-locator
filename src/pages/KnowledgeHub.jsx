import { BookOpen, Clock, Gift, ArrowRight } from "lucide-react";
import { knowledge } from "../data/knowledge";
import BackButton from "../components/common/BackButton";
export default function KnowledgeHub() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F8FCFA",
        padding: "40px 8%",
        fontFamily: "Poppins, sans-serif",
      }}
    >   <BackButton />
      {/* Hero */}

      <div
        style={{
          background: "linear-gradient(135deg,#0F766E,#22C55E)",
          borderRadius: "30px",
          padding: "40px",
          color: "white",
          marginBottom: "40px",
        }}
      >
        <h1 style={{ fontSize: "2.8rem", marginBottom: "12px" }}>
          Knowledge Hub
        </h1>

        <p style={{ opacity: 0.9, maxWidth: "600px", lineHeight: 1.7 }}>
          Learn about e-waste, discover hidden valuable materials, and earn Eco
          Points while becoming a smarter recycler.
        </p>
      </div>

      {/* Featured Card */}

      <div
        style={{
          background: "white",
          borderRadius: "28px",
          padding: "30px",
          marginBottom: "35px",
          boxShadow: "0 12px 30px rgba(0,0,0,.08)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <div style={{ maxWidth: "500px" }}>
          <span
            style={{
              background: "#DCFCE7",
              color: "#166534",
              padding: "6px 12px",
              borderRadius: "999px",
              fontSize: "14px",
            }}
          >
            Featured
          </span>

          <h2 style={{ margin: "16px 0 10px" }}>
            How E-Waste Can Become a Valuable Resource
          </h2>

          <p style={{ color: "#64748B", lineHeight: 1.6 }}>
            Learn how recycling electronics recovers precious metals while
            reducing pollution and landfill waste.
          </p>
        </div>

        <button
          style={{
            border: "none",
            background: "linear-gradient(135deg,#0F766E,#22C55E)",
            color: "white",
            padding: "14px 24px",
            borderRadius: "14px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontWeight: "600",
          }}
        >
          Read Now <ArrowRight size={18} />
        </button>
      </div>

      {/* Learning Cards */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: "24px",
        }}
      >
        {knowledge.map((article) => (
          <div
            key={article.id}
            style={{
              background: "white",
              borderRadius: "24px",
              padding: "24px",
              boxShadow: "0 10px 25px rgba(0,0,0,.08)",
            }}
          >
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "16px",
                background: "linear-gradient(135deg,#0F766E,#22C55E)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                marginBottom: "18px",
              }}
            >
              <BookOpen size={28} />
            </div>

            <span
              style={{
                background: "#ECFDF5",
                color: "#166534",
                padding: "6px 12px",
                borderRadius: "999px",
                fontSize: "13px",
              }}
            >
              {article.category}
            </span>

            <h3 style={{ margin: "16px 0 10px" }}>{article.title}</h3>

            <p style={{ color: "#64748B", lineHeight: 1.6 }}>
              {article.summary}
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "20px",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <Clock size={16} color="#64748B" />
                <span style={{ color: "#64748B", fontSize: "14px" }}>
                  {article.readTime}
                </span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <Gift size={16} color="#22C55E" />
                <span style={{ color: "#16A34A", fontWeight: "600" }}>
                  +{article.points}
                </span>
              </div>
            </div>

            <button
              style={{
                width: "100%",
                marginTop: "22px",
                border: "none",
                background: "#F1F5F9",
                color: "#0F766E",
                padding: "12px",
                borderRadius: "14px",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              Read Article
            </button>
          </div>
        ))}
      </div>

      {/* Future Quiz Banner */}

      <div
        style={{
          marginTop: "45px",
          background: "linear-gradient(135deg,#062F2B,#0F766E)",
          borderRadius: "28px",
          padding: "30px",
          color: "white",
          textAlign: "center",
        }}
      >
        <h2>Learn More. Earn More.</h2>

        <p style={{ opacity: 0.9, maxWidth: "600px", margin: "12px auto" }}>
          Complete knowledge cards and future quizzes to unlock bonus Eco Points
          and improve your recycling streak.
        </p>
      </div>
    </div>
  );
}