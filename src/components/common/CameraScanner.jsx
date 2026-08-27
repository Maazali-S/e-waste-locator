import { useRef, useState } from "react";
import { Camera, X, ScanLine } from "lucide-react";

export default function CameraScanner({ onCapture }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [open, setOpen] = useState(false);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "environment",
          width: { ideal: 1280 },
          height: { ideal: 720 },
        },
      });

      setOpen(true);

      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.onloadedmetadata = () => {
            videoRef.current.play();
          };
        }
      }, 50);
    } catch (err) {
      console.error(err);
      alert("Camera permission denied or camera unavailable.");
    }
  };

  const stopCamera = () => {
    const stream = videoRef.current?.srcObject;
    if (stream) stream.getTracks().forEach((t) => t.stop());
    setOpen(false);
  };

  const capture = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0);

    onCapture(canvas.toDataURL("image/png"));
    stopCamera();
  };

  return (
    <>
      <style>{`
        @keyframes scanMove{
          0%{top:20%;}
          100%{top:80%;}
        }

        @keyframes glow{
          0%,100%{box-shadow:0 0 12px #22C55E;}
          50%{box-shadow:0 0 28px #22C55E;}
        }
      `}</style>

      <button
        onClick={startCamera}
        style={{
          background: "linear-gradient(135deg,#0F766E,#22C55E)",
          color: "white",
          border: "none",
          padding: "14px 22px",
          borderRadius: "14px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          fontWeight: "600",
        }}
      >
        <Camera size={20} />
        Scan Device
      </button>

      {open && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,.88)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              width: "92%",
              maxWidth: "560px",
              background: "#111827",
              borderRadius: "24px",
              padding: "20px",
              color: "white",
            }}
          >
            <h2 style={{ textAlign: "center", marginBottom: "16px" }}>
              Scan Your Device
            </h2>

            <div
              style={{
                position: "relative",
                borderRadius: "18px",
                overflow: "hidden",
              }}
            >
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                style={{
                  width: "100%",
                  display: "block",
                }}
              />

              {/* Scanner Box */}
              <div
                style={{
                  position: "absolute",
                  top: "20%",
                  left: "18%",
                  width: "64%",
                  height: "60%",
                  animation: "glow 2s infinite",
                }}
              >
                {/* Corners */}
                {[
                  { top: 0, left: 0 },
                  { top: 0, right: 0 },
                  { bottom: 0, left: 0 },
                  { bottom: 0, right: 0 },
                ].map((c, i) => (
                  <div
                    key={i}
                    style={{
                      position: "absolute",
                      width: "28px",
                      height: "28px",
                      borderColor: "#22C55E",
                      borderStyle: "solid",
                      borderWidth: `${
                        c.top === 0 ? "4px" : "0"
                      } ${c.right === 0 ? "4px" : "0"} ${
                        c.bottom === 0 ? "4px" : "0"
                      } ${c.left === 0 ? "4px" : "0"}`,
                      ...c,
                    }}
                  />
                ))}

                {/* Animated Scan Line */}
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: "#22C55E",
                    boxShadow: "0 0 15px #22C55E",
                    animation: "scanMove 2s linear infinite alternate",
                  }}
                />
              </div>
            </div>

            <p
              style={{
                textAlign: "center",
                marginTop: "14px",
                color: "#A7F3D0",
              }}
            >
              Align your device inside the green frame
            </p>

            <div
              style={{
                display: "flex",
                gap: "12px",
                marginTop: "18px",
              }}
            >
              <button
                onClick={capture}
                style={{
                  flex: 1,
                  background: "#22C55E",
                  color: "white",
                  border: "none",
                  padding: "14px",
                  borderRadius: "14px",
                  cursor: "pointer",
                  fontWeight: "600",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <ScanLine size={18} />
                Capture
              </button>

              <button
                onClick={stopCamera}
                style={{
                  width: "56px",
                  background: "#374151",
                  color: "white",
                  border: "none",
                  borderRadius: "14px",
                  cursor: "pointer",
                }}
              >
                <X />
              </button>
            </div>

            <canvas ref={canvasRef} style={{ display: "none" }} />
          </div>
        </div>
      )}
    </>
  );
}