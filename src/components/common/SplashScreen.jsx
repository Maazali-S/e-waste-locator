import splashVideo from "../../assets/splash.mp4";

export default function SplashScreen({ onFinish }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#041A18",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        animation: "fadeIn .3s ease",
      }}
    >
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
      `}</style>

      <video
        autoPlay
        muted
        playsInline
        onEnded={onFinish}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <source src={splashVideo} type="video/mp4" />
      </video>
    </div>
  );
}