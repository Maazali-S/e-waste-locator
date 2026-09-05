import { useState, useEffect } from "react";
import {
  BookOpen,
  Clock,
  Gift,
  ArrowRight,
  Battery,
  Globe,
  Recycle,
  Leaf,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { knowledge } from "../data/knowledge";
import BackButton from "../components/common/BackButton";

import heroRecycling from "../assets/hero-banner.jpg";
import recyclingPlant from "../assets/recycling.jpg";
import cpcbRepair from "../assets/cpcb-repair.jpg";
import cpcbRecycle from "../assets/cpcb-recycle.jpg";
import cpcbEWaste from "../assets/cpcb-ewaste.jpg";
import mpcbAwareness from "../assets/mpcb-awareness.jpg";
import materialsPhone from "../assets/materials-phone.jpg";
import environmentEWaste from "../assets/envio-waste.jpg";
import devicePrepare from "../assets/device-prepare.jpg";

export default function KnowledgeHub() {
  const gallery = [
  {
    title: "Repair Instead of Replace",
    image: cpcbRepair,
    link: "https://moef.gov.in/en/acts-rules/e-waste-management-rules-2022/",
    type: "poster",
  },
  {
    title: "Minimise or Recycle E-Waste",
    image: cpcbRecycle,
    link: "https://cpcb.nic.in/e-waste/",
    type: "poster",
  },
  {
    title: "Responsible E-Waste Disposal",
    image: cpcbEWaste,
    link: "https://ewastemonitor.info/the-global-e-waste-monitor-2024/",
    type: "poster",
  },
  {
    title: "MPCB Awareness Program",
    image: mpcbAwareness,
    link: "https://mpcb.gov.in/en/photo-gallery/archives",
    type: "photo",
  },
];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % gallery.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  const openArticle = (article) => {
    const links = {
      Government:
        "https://moef.gov.in/en/acts-rules/e-waste-management-rules-2022/",
      Safety: "https://cpcb.nic.in/e-waste/",
      Recycling:
        "https://ewastemonitor.info/the-global-e-waste-monitor-2024/",
      Awareness:
        "https://ewastemonitor.info/the-global-e-waste-monitor-2024/",
    };

    window.open(
      links[article.category] ||
        "https://ewastemonitor.info/the-global-e-waste-monitor-2024/",
      "_blank"
    );
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F8FCFA",
        padding: "40px 8%",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <BackButton />

      {/* Hero */}

      <div
        style={{
          background: "linear-gradient(135deg,#0F766E,#22C55E)",
          borderRadius: "30px",
          padding: "40px",
          color: "white",
          marginBottom: "40px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: "25px",
          alignItems: "center",
        }}
      >
        <div>
          <h1 style={{ fontSize: "2.8rem", marginBottom: "12px" }}>
            Knowledge Hub
          </h1>

          <p style={{ opacity: 0.9, lineHeight: 1.7 }}>
            Learn about e-waste, discover hidden valuable materials, and earn
            Eco Points while becoming a smarter recycler.
          </p>
        </div>

        <img
          src={heroRecycling}
          alt="E-waste Recycling"
          style={{
            width: "100%",
            height: "230px",
            objectFit: "cover",
            borderRadius: "24px",
          }}
        />
      </div>

      {/* Featured Section */}

      <div
        style={{
          background: "white",
          borderRadius: "28px",
          padding: "28px",
          marginBottom: "40px",
          boxShadow: "0 12px 30px rgba(0,0,0,.08)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: "25px",
          alignItems: "center",
        }}
      >
        <img
          src={recyclingPlant}
          alt="Recycling Plant"
          style={{
            width: "100%",
            height: "230px",
            objectFit: "cover",
            borderRadius: "20px",
          }}
        />

        <div>
          <span
            style={{
              background: "#DCFCE7",
              color: "#166534",
              padding: "6px 12px",
              borderRadius: "999px",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            Featured • +25 Eco Points
          </span>

          <h2 style={{ margin: "18px 0 12px" }}>
            How E-Waste Can Become a Valuable Resource
          </h2>

          <p style={{ color: "#64748B", lineHeight: 1.7 }}>
            Discover how valuable metals like Gold, Copper and Lithium are
            recovered through responsible recycling while reducing pollution and
            landfill waste.
          </p>

          <button
            onClick={() =>
              window.open(
                "https://ewastemonitor.info/the-global-e-waste-monitor-2024/",
                "_blank"
              )
            }
            style={{
              marginTop: "22px",
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
      </div>

      {/* Official Awareness Gallery */}

      {/* Official Awareness Gallery */}

<div style={{ marginBottom: "50px" }}>
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "18px",
      flexWrap: "wrap",
      gap: "10px",
    }}
  >
    <h2 style={{ margin: 0 }}>Official Awareness Gallery</h2>

    <span
      style={{
        background: "#DCFCE7",
        color: "#166534",
        padding: "6px 12px",
        borderRadius: "999px",
        fontSize: "13px",
        fontWeight: "600",
      }}
    >
      CPCB • MPCB • Mission LiFE
    </span>
  </div>

  <div
    style={{
      position: "relative",
      background: "#F7FAF8",
      borderRadius: "24px",
      overflow: "hidden",
      boxShadow: "0 12px 28px rgba(0,0,0,.08)",
      border: "1px solid #E5E7EB",
    }}
  >
    <div
      style={{
        height: "420px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "28px",
      }}
    >
      <img
  src={gallery[currentSlide].image}
  alt={gallery[currentSlide].title}
  style={{
    maxWidth: "100%",
    maxHeight: "100%",
    width: "auto",
    height: "auto",
    objectFit: "contain",
    borderRadius: "16px",
    display: "block",
    margin: "0 auto",
  }}
/>
    </div>

    <div
      style={{
        padding: "22px",
        background: "white",
        borderTop: "1px solid #E5E7EB",
      }}
    >
      <h3 style={{ margin: "0 0 8px", color: "#0F172A" }}>
        {gallery[currentSlide].title}
      </h3>

      <button
        onClick={() =>
          window.open(gallery[currentSlide].link, "_blank")
        }
        style={{
          border: "none",
          background: "linear-gradient(135deg,#0F766E,#22C55E)",
          color: "white",
          padding: "12px 18px",
          borderRadius: "12px",
          fontWeight: "600",
          cursor: "pointer",
        }}
      >
        View Official Source
      </button>
    </div>

    <button
      onClick={() =>
        setCurrentSlide(
          currentSlide === 0
            ? gallery.length - 1
            : currentSlide - 1
        )
      }
      style={{
        position: "absolute",
        left: "18px",
        top: "50%",
        transform: "translateY(-50%)",
        width: "46px",
        height: "46px",
        borderRadius: "50%",
        border: "none",
        background: "rgba(255,255,255,.95)",
        cursor: "pointer",
        boxShadow: "0 4px 12px rgba(0,0,0,.15)",
      }}
    >
      <ChevronLeft size={22} />
    </button>

    <button
      onClick={() =>
        setCurrentSlide((currentSlide + 1) % gallery.length)
      }
      style={{
        position: "absolute",
        right: "18px",
        top: "50%",
        transform: "translateY(-50%)",
        width: "46px",
        height: "46px",
        borderRadius: "50%",
        border: "none",
        background: "rgba(255,255,255,.95)",
        cursor: "pointer",
        boxShadow: "0 4px 12px rgba(0,0,0,.15)",
      }}
    >
      <ChevronRight size={22} />
    </button>
  </div>

  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "10px",
      marginTop: "18px",
    }}
  >
    {gallery.map((_, i) => (
      <button
        key={i}
        onClick={() => setCurrentSlide(i)}
        style={{
          width: currentSlide === i ? "30px" : "10px",
          height: "10px",
          borderRadius: "999px",
          border: "none",
          cursor: "pointer",
          background:
            currentSlide === i ? "#0F766E" : "#CBD5E1",
          transition: ".3s",
        }}
      />
    ))}
  </div>
</div>
            {/* Quick Facts */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "18px",
          marginBottom: "45px",
        }}
      >
        {[
          {
            icon: <Battery color="#16A34A" size={28} />,
            title: "60+ Elements",
            text: "A smartphone contains over 60 different elements.",
          },
          {
            icon: <Globe color="#16A34A" size={28} />,
            title: "62 Million Tonnes",
            text: "Global e-waste reached 62 million tonnes in 2022.",
          },
          {
            icon: <Recycle color="#16A34A" size={28} />,
            title: "22.3% Recycled",
            text: "Only 22.3% was formally documented as recycled.",
          },
          {
            icon: <Leaf color="#16A34A" size={28} />,
            title: "Recover Precious Metals",
            text: "Gold, Copper and Lithium can be recovered through proper recycling.",
          },
        ].map((fact) => (
          <div
            key={fact.title}
            style={{
              background: "white",
              borderRadius: "22px",
              padding: "22px",
              boxShadow: "0 8px 20px rgba(0,0,0,.06)",
            }}
          >
            {fact.icon}

            <h3 style={{ margin: "14px 0 8px" }}>{fact.title}</h3>

            <p style={{ color: "#64748B", lineHeight: 1.5 }}>{fact.text}</p>
          </div>
        ))}
      </div>
      

      <h2 style={{ marginBottom: "22px" }}>Learn & Earn</h2>

      {/* Learn & Earn */}

<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(290px,1fr))",
    gap: "24px",
  }}
>
  {knowledge.map((article) => {
    const articleImages = {
      Safety: cpcbEWaste,
      Materials: materialsPhone,
      Environment: environmentEWaste,
      Guide: devicePrepare,
      Government: cpcbRepair,
      Recycling: recyclingPlant,
      Awareness: mpcbAwareness,
    };

    const articleImage =
      articleImages[article.category] || recyclingPlant;

    return (
      <div
        key={article.id}
        style={{
          background: "white",
          borderRadius: "24px",
          overflow: "hidden",
          boxShadow: "0 10px 25px rgba(0,0,0,.08)",
          transition: "all .25s ease",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-6px)";
          e.currentTarget.style.boxShadow =
            "0 18px 35px rgba(0,0,0,.12)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow =
            "0 10px 25px rgba(0,0,0,.08)";
        }}
      >
        <img
          src={articleImage}
          alt={article.title}
          style={{
            width: "100%",
            height: "190px",
            objectFit: "cover",
          }}
        />

        <div style={{ padding: "24px" }}>
          <div
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "16px",
              background:
                "linear-gradient(135deg,#0F766E,#22C55E)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              marginBottom: "16px",
            }}
          >
            <BookOpen size={26} />
          </div>

          <span
            style={{
              background: "#ECFDF5",
              color: "#166534",
              padding: "6px 12px",
              borderRadius: "999px",
              fontSize: "13px",
              fontWeight: "600",
            }}
          >
            {article.category}
          </span>

          <h3 style={{ margin: "16px 0 10px" }}>
            {article.title}
          </h3>

          <p
            style={{
              color: "#64748B",
              lineHeight: 1.6,
              minHeight: "52px",
            }}
          >
            {article.summary}
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "18px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <Clock size={16} color="#64748B" />

              <span
                style={{
                  color: "#64748B",
                  fontSize: "14px",
                }}
              >
                {article.readTime}
              </span>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <Gift size={16} color="#22C55E" />

              <span
                style={{
                  color: "#16A34A",
                  fontWeight: "700",
                }}
              >
                +{article.points}
              </span>
            </div>
          </div>

          <button
            onClick={() => openArticle(article)}
            style={{
              width: "100%",
              marginTop: "22px",
              border: "none",
              background:
                "linear-gradient(135deg,#0F766E,#22C55E)",
              color: "white",
              padding: "13px",
              borderRadius: "14px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Read Article
          </button>
        </div>
      </div>
    );
  })}
</div>

      {/* Bottom CTA */}

      <div
        style={{
          marginTop: "50px",
          background: "linear-gradient(135deg,#062F2B,#0F766E)",
          borderRadius: "28px",
          padding: "34px",
          color: "white",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "14px" }}>Learn. Recycle. Earn.</h2>

        <p
          style={{
            opacity: 0.9,
            maxWidth: "620px",
            margin: "0 auto 24px",
            lineHeight: 1.7,
          }}
        >
          Every article you explore helps you understand responsible e-waste
          disposal while preparing you to recycle through verified CPCB and
          MPCB collection centers.
        </p>

        <button
          onClick={() =>
            window.open(
              "https://ewastemonitor.info/the-global-e-waste-monitor-2024/",
              "_blank"
            )
          }
          style={{
            border: "none",
            background: "white",
            color: "#0F766E",
            padding: "14px 24px",
            borderRadius: "14px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Explore More Research
        </button>
      </div>
    </div>
  );
}