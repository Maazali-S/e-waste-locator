import { useState, useMemo } from "react";
import BackButton from "../components/common/BackButton";
import {
  Search,
  Gift,
  Leaf,
  TriangleAlert,
  ScanSearch,
} from "lucide-react";

import { devices } from "../data/devices";
import CameraScanner from "../components/common/CameraScanner";
import { detectDevice } from "../utils/detectDevice";
import { calculatePoints } from "../utils/pointsCalculator";
import { user } from "../data/user";

export default function DeviceLookup() {
  const [query, setQuery] = useState("");
  const [capturedImage, setCapturedImage] = useState(null);
  const [detectedDevice, setDetectedDevice] = useState(null);
  const [needsConfirmation, setNeedsConfirmation] = useState(false);
  const [aiGuess, setAiGuess] = useState("");
  const [condition, setCondition] = useState("Good");

  const filtered = devices.filter((device) =>
    device.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleCapture = (image) => {
    setCapturedImage(image);
    setDetectedDevice(null);
    setNeedsConfirmation(false);

    const img = new Image();
    img.src = image;

    img.onload = async () => {
      const predictions = await detectDevice(img);

      if (!predictions.length) {
        setAiGuess("Nothing Detected");
        setNeedsConfirmation(true);
        return;
      }

      const best = predictions[0];

      const mapping = {
        cell_phone: "Smartphone",
        laptop: "Laptop",
        keyboard: "Keyboard",
        mouse: "Mouse",
        remote: "Remote",
      };

      const mappedName = mapping[best.class];
      const confidence = Math.round(best.score * 100);

      if (!mappedName || confidence < 65) {
        setAiGuess(`${best.class} (${confidence}%)`);
        setNeedsConfirmation(true);
        return;
      }

      const device = devices.find((d) => d.name === mappedName);

      setDetectedDevice({
        ...device,
        confidence,
      });
    };
  };

  const selectDevice = (device) => {
    setDetectedDevice({
      ...device,
      confidence: 100,
    });

    setNeedsConfirmation(false);
  };

  // Calculate Eco Points dynamically
  const pointsResult = useMemo(() => {
    if (!detectedDevice) return null;

    return calculatePoints({
      basePoints: detectedDevice.points,
      condition,
      streak: user.streak,
      firstRecycle: user.firstRecycle,
      weekend:
        new Date().getDay() === 0 || new Date().getDay() === 6,
    });
  }, [detectedDevice, condition]);

  return (
    <div
      style={{
        padding: "40px 8%",
        minHeight: "100vh",
        background: "#F8FCFA",
        fontFamily: "Poppins, sans-serif",
      }}
    > <BackButton />
      <h1 style={{ fontSize: "3rem" }}>Device Lookup</h1>

      <p style={{ color: "#64748B", marginBottom: "30px" }}>
        Search or scan an electronic device to discover its recycling value.
      </p>

      {/* Search + Camera */}

      <div
        style={{
          display: "flex",
          gap: "15px",
          flexWrap: "wrap",
          marginBottom: "35px",
        }}
      >
        <div
          style={{
            flex: 1,
            minWidth: "250px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            background: "white",
            padding: "16px",
            borderRadius: "18px",
            boxShadow: "0 8px 25px rgba(0,0,0,.06)",
          }}
        >
          <Search color="#0F766E" />

          <input
            placeholder="Search device..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              border: "none",
              outline: "none",
              flex: 1,
              background: "transparent",
              fontSize: "16px",
            }}
          />
        </div>

        <CameraScanner onCapture={handleCapture} />
      </div>

      {/* AI Result */}

      {capturedImage && detectedDevice && (
        <div
          style={{
            background: "white",
            borderRadius: "28px",
            padding: "24px",
            marginBottom: "35px",
            boxShadow: "0 12px 30px rgba(0,0,0,.08)",
          }}
        >
          <h2 style={{ marginBottom: "20px" }}>
            AI Detection Result ({detectedDevice.confidence}%)
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(300px,1fr))",
              gap: "24px",
            }}
          >
            <img
              src={capturedImage}
              alt="Captured"
              style={{
                width: "100%",
                borderRadius: "18px",
                objectFit: "cover",
              }}
            />

            <div>
              <h2>{detectedDevice.name}</h2>

              <p>
                Estimated Value:{" "}
                <strong>{detectedDevice.value}</strong>
              </p>

              {/* Eco Points */}

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#16A34A",
                  marginTop: "12px",
                }}
              >
                <Gift size={18} />
                +{pointsResult?.total ?? detectedDevice.points} Eco Points
              </div>

              {/* Device Condition */}

              <div style={{ marginTop: "20px" }}>
                <strong>Device Condition</strong>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2,1fr)",
                    gap: "10px",
                    marginTop: "12px",
                  }}
                >
                  {[
                    "Excellent",
                    "Good",
                    "Damaged",
                    "Scrap",
                  ].map((item) => (
                    <button
                      key={item}
                      onClick={() => setCondition(item)}
                      style={{
                        padding: "12px",
                        borderRadius: "12px",
                        border:
                          condition === item
                            ? "2px solid #22C55E"
                            : "1px solid #D1D5DB",
                        background:
                          condition === item
                            ? "#DCFCE7"
                            : "white",
                        cursor: "pointer",
                        fontWeight: "600",
                      }}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bonus Breakdown */}

              {pointsResult?.bonuses.length > 0 && (
                <div
                  style={{
                    marginTop: "12px",
                    background: "#ECFDF5",
                    padding: "12px",
                    borderRadius: "12px",
                  }}
                >
                  <strong>Bonus Breakdown</strong>

                  {pointsResult.bonuses.map((bonus) => (
                    <div
                      key={bonus}
                      style={{
                        color: "#166534",
                        marginTop: "6px",
                      }}
                    >
                      {bonus}
                    </div>
                  ))}
                </div>
              )}

              {/* CO2 Saved */}

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginTop: "10px",
                  color: "#0F766E",
                }}
              >
                <Leaf size={18} />
                CO₂ Saved: {detectedDevice.co2}
              </div>

              {/* Recoverable Materials */}

              <div style={{ marginTop: "20px" }}>
                <strong>Recoverable Materials</strong>

                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                    flexWrap: "wrap",
                    marginTop: "8px",
                  }}
                >
                  {detectedDevice.materials.map((m) => (
                    <span
                      key={m}
                      style={{
                        background: "#DCFCE7",
                        padding: "8px 12px",
                        borderRadius: "999px",
                      }}
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hazards */}

              <div style={{ marginTop: "20px" }}>
                <strong>Hazards</strong>

                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                    flexWrap: "wrap",
                    marginTop: "8px",
                  }}
                >
                  {detectedDevice.hazards.map((h) => (
                    <span
                      key={h}
                      style={{
                        background: "#FEE2E2",
                        color: "#991B1B",
                        padding: "8px 12px",
                        borderRadius: "999px",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <TriangleAlert size={14} />
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Manual Confirmation */}

      {capturedImage && needsConfirmation && (
        <div
          style={{
            background: "white",
            borderRadius: "28px",
            padding: "24px",
            marginBottom: "35px",
            boxShadow: "0 12px 30px rgba(0,0,0,.08)",
          }}
        >
          <h2>Confirm your device</h2>

          <p style={{ color: "#64748B" }}>
            AI guessed: <strong>{aiGuess}</strong>. Select the
            correct device.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(140px,1fr))",
              gap: "16px",
              marginTop: "24px",
            }}
          >
            {devices.map((device) => (
              <button
                key={device.id}
                onClick={() => selectDevice(device)}
                style={{
                  background: "white",
                  border: "2px solid #DCFCE7",
                  borderRadius: "18px",
                  padding: "18px",
                  cursor: "pointer",
                  fontWeight: "600",
                  transition: ".2s",
                }}
              >
                {device.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Search Results */}

      <h2 style={{ marginBottom: "20px" }}>
        <ScanSearch
          size={24}
          style={{ display: "inline" }}
        />{" "}
        Search Results
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(300px,1fr))",
          gap: "24px",
        }}
      >
        {filtered.map((device) => (
          <div
            key={device.id}
            style={{
              background: "white",
              borderRadius: "22px",
              padding: "24px",
              boxShadow: "0 10px 25px rgba(0,0,0,.08)",
            }}
          >
            <h3>{device.name}</h3>

            <p>Estimated Value: {device.value}</p>

            <div
              style={{
                color: "#16A34A",
                marginTop: "8px",
              }}
            >
              +{device.points} Eco Points
            </div>

            <div
              style={{
                color: "#0F766E",
                marginTop: "8px",
              }}
            >
              CO₂ Saved: {device.co2}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}