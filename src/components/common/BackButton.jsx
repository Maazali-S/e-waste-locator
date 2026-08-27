import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      style={{
        position: "fixed",
        top: "90px",
        left: "24px",
        width: "52px",
        height: "52px",
        borderRadius: "50%",
        border: "none",
        background: "rgba(255,255,255,.9)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 8px 20px rgba(0,0,0,.12)",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        transition: ".2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <ArrowLeft size={22} color="#0F766E" />
    </button>
  );
}