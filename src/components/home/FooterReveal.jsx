export default function FooterReveal() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "70vh",
        background: "linear-gradient(135deg, #041B16 0%, #0B3B2E 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "-28px",
        overflow: "hidden",
      }}
    >
      {/* Background Glow */}
      <div
        style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "rgba(34,197,94,0.12)",
          filter: "blur(100px)",
          top: "-150px",
          right: "-120px",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "rgba(15,118,110,0.15)",
          filter: "blur(90px)",
          bottom: "-120px",
          left: "-80px",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          color: "white",
          maxWidth: "760px",
          padding: "40px",
        }}
      >
        <span
          style={{
            display: "inline-block",
            padding: "8px 18px",
            borderRadius: "999px",
            background: "rgba(255,255,255,.12)",
            backdropFilter: "blur(8px)",
            marginBottom: "22px",
            fontWeight: "600",
          }}
        >
          Join India's Green Movement
        </span>

        <h1
          style={{
            fontSize: "clamp(2.8rem,6vw,5rem)",
            lineHeight: 1.05,
            marginBottom: "18px",
            fontWeight: "700",
          }}
        >
          Join the EcoLoop Community
        </h1>

        <p
          style={{
            fontSize: "1.1rem",
            opacity: 0.9,
            lineHeight: 1.8,
            marginBottom: "32px",
          }}
        >
          Every recycled device helps recover valuable materials, reduce
          pollution, and build a cleaner future for everyone.
        </p>

        <button
          style={{
            border: "none",
            padding: "16px 36px",
            borderRadius: "999px",
            background: "linear-gradient(135deg,#0F766E,#22C55E)",
            color: "white",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
            boxShadow: "0 10px 30px rgba(34,197,94,.35)",
            transition: "all .25s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-3px)";
            e.currentTarget.style.boxShadow =
              "0 14px 36px rgba(34,197,94,.45)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow =
              "0 10px 30px rgba(34,197,94,.35)";
          }}
        >
          Start Your Eco Journey
        </button>
      </div>
    </section>
  );
}