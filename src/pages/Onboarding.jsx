
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Target,
  Trophy,
  Recycle,
  Calendar,
  Camera,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ShieldCheck,
} from "lucide-react";

import ProgressBar from "../components/onboarding/ProgressBar";
import StepCard from "../components/onboarding/StepCard";
import OptionCard from "../components/onboarding/OptionCard";
import AvatarPicker from "../components/onboarding/AvatarPicker";
import PickTheme from "../components/onboarding/picktheme";
import { onboardingSteps } from "../data/onboardingSteps";

export default function Onboarding() {
  const navigate = useNavigate();

  const [step, setStep] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [data, setData] = useState({
    name: "",
    avatar: "",
    theme: "Forest",
    mission: [],
    frequency: "First Time",
    weeklyGoal: 2,
    photo: null,
    email: "",
    password: "",
    confirmPassword: "",
  });

  const missions = [
    { title: "Earn Rewards", icon: <Trophy color="#16A34A" /> },
    { title: "Protect Nature", icon: <Recycle color="#16A34A" /> },
    { title: "Reduce E-Waste", icon: <Target color="#16A34A" /> },
    { title: "Learn Recycling", icon: <Sparkles color="#16A34A" /> },
  ];

  const frequencies = [
    "First Time",
    "Monthly",
    "Every Few Months",
    "Regular Recycler",
  ];

  const toggleMission = (mission) => {
    setData((prev) => ({
      ...prev,
      mission: prev.mission.includes(mission)
        ? prev.mission.filter((m) => m !== mission)
        : [...prev.mission, mission],
    }));
  };

  const next = () => {
    if (step === onboardingSteps.length - 1) {
      navigate("/dashboard", { replace: true });
      return;
    }

    if (
      step === 6 &&
      (!data.email ||
        !data.password ||
        data.password !== data.confirmPassword)
    ) {
      return;
    }

    setStep(step + 1);
  };

  const back = () => {
    if (step === 0) {
      navigate("/");
      return;
    }
    setStep(step - 1);
  };

  const themeColors = {
    Forest: {
      primary: "#22C55E",
      secondary: "#0F766E",
      bg: "radial-gradient(circle at top,#DCFCE7 0%,#F8FCFA 55%,white 100%)",
    },

    Ocean: {
      primary: "#2563EB",
      secondary: "#1D4ED8",
      bg: "radial-gradient(circle at top,#DBEAFE 0%,#F8FBFF 55%,white 100%)",
    },

    Sunset: {
      primary: "#F97316",
      secondary: "#EA580C",
      bg: "radial-gradient(circle at top,#FFEDD5 0%,#FFF7ED 55%,white 100%)",
    },

    Midnight: {
      primary: "#1F2937",
      secondary: "#111827",
      bg: "radial-gradient(circle at top,#374151 0%,#111827 100%)",
    },
  };

  const currentTheme = themeColors[data.theme];

  const titles = [
    "Welcome to EcoLoop",
    "What should we call you?",
    "Choose your Eco Avatar",
    "Pick your Theme",
    "What's your mission?",
    "Build your Eco Streak",
    "Secure Your Account",
    "You're Ready!",
  ];

  const subtitles = [
    "Let's build your eco identity in under a minute.",
    "This is how we'll greet you on your dashboard.",
    "Choose an avatar that represents your eco personality.",
    "Pick a look that matches your vibe.",
    "Tell us what motivates you most.",
    "Help us personalize your experience.",
    "Create your EcoLoop account to save your progress.",
    "Your EcoLoop profile is ready.",
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: currentTheme.bg,
        transition: "all .5s ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "350px",
          height: "350px",
          background: currentTheme.primary + "20",
          borderRadius: "50%",
          top: "-120px",
          left: "-120px",
          filter: "blur(40px)",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "300px",
          height: "300px",
          background: currentTheme.secondary + "18",
          borderRadius: "50%",
          bottom: "-120px",
          right: "-120px",
          filter: "blur(50px)",
        }}
      />

      <div style={{ width: "100%", maxWidth: "700px", zIndex: 2 }}>
        <ProgressBar current={step} total={onboardingSteps.length} />

        <StepCard title={titles[step]} subtitle={subtitles[step]}>
          {/* STEP 0 */}

          {step === 0 && (
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  margin: "0 auto 25px",
                  background: `linear-gradient(135deg,${currentTheme.primary},${currentTheme.secondary})`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: `0 20px 40px ${currentTheme.primary}55`,
                }}
              >
                <Recycle size={70} color="white" />
              </div>

              <h2 style={{ color: currentTheme.secondary }}>
                Earn Rewards. Save the Planet.
              </h2>

              <p style={{ color: "#64748B" }}>
                Every recycled device brings you closer to rewards and a greener
                future.
              </p>
            </div>
          )}

          {/* STEP 1 */}

          {step === 1 && (
            <input
              placeholder="Enter your name"
              value={data.name}
              onChange={(e) =>
                setData({ ...data, name: e.target.value })
              }
              style={{
                width: "100%",
                padding: "18px",
                borderRadius: "18px",
                border: "1px solid #D1D5DB",
                fontSize: "18px",
                outline: "none",
              }}
            />
          )}

          {/* STEP 2 */}

          {step === 2 && (
            <>
              <AvatarPicker
                value={data.avatar}
                onChange={(avatar) =>
                  setData({ ...data, avatar })
                }
              />

              <label
                style={{
                  marginTop: "25px",
                  display: "flex",
                  justifyContent: "center",
                  gap: "10px",
                  cursor: "pointer",
                  color: currentTheme.secondary,
                  fontWeight: "600",
                }}
              >
                <Camera />
                Upload your own photo

                <input
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={(e) =>
                    setData({
                      ...data,
                      photo: e.target.files?.[0] || null,
                    })
                  }
                />
              </label>

              {data.photo && (
                <p
                  style={{
                    textAlign: "center",
                    color: currentTheme.primary,
                    marginTop: "10px",
                  }}
                >
                  {data.photo.name}
                </p>
              )}
            </>
          )}

          {/* STEP 3 */}

          {step === 3 && (
            <PickTheme
              value={data.theme}
              onChange={(theme) =>
                setData({ ...data, theme })
              }
            />
          )}

          {/* STEP 4 */}

          {step === 4 && (
            <div style={{ display: "grid", gap: "16px" }}>
              {missions.map((mission) => (
                <OptionCard
                  key={mission.title}
                  title={mission.title}
                  icon={mission.icon}
                  selected={data.mission.includes(mission.title)}
                  onClick={() => toggleMission(mission.title)}
                />
              ))}
            </div>
          )}

          {/* STEP 5 */}

          {step === 5 && (
            <>
              <div style={{ display: "grid", gap: "15px" }}>
                {frequencies.map((freq) => (
                  <OptionCard
                    key={freq}
                    title={freq}
                    icon={<Calendar color="#16A34A" />}
                    selected={data.frequency === freq}
                    onClick={() =>
                      setData({ ...data, frequency: freq })
                    }
                  />
                ))}
              </div>

              <div style={{ marginTop: "35px" }}>
                <strong>Weekly Goal</strong>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "15px",
                  }}
                >
                  {[1, 2, 3, 4].map((goal) => (
                    <button
                      key={goal}
                      onClick={() =>
                        setData({
                          ...data,
                          weeklyGoal: goal,
                        })
                      }
                      style={{
                        width: "70px",
                        height: "70px",
                        borderRadius: "18px",
                        border:
                          data.weeklyGoal === goal
                            ? `2px solid ${currentTheme.primary}`
                            : "1px solid #D1D5DB",
                        background:
                          data.weeklyGoal === goal
                            ? currentTheme.primary + "20"
                            : "white",
                        cursor: "pointer",
                        fontSize: "22px",
                        fontWeight: "700",
                      }}
                    >
                      {goal}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* STEP 6 */}

          {step === 6 && (
            <div style={{ display: "grid", gap: "18px" }}>
              <div style={{ position: "relative" }}>
                <Mail
                  size={20}
                  color="#64748B"
                  style={{
                    position: "absolute",
                    left: "18px",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  value={data.email}
                  onChange={(e) =>
                    setData({ ...data, email: e.target.value })
                  }
                  style={{
                    width: "100%",
                    padding: "18px 18px 18px 52px",
                    borderRadius: "18px",
                    border: "1px solid #D1D5DB",
                    fontSize: "16px",
                    outline: "none",
                  }}
                />
              </div>

              <div style={{ position: "relative" }}>
                <Lock
                  size={20}
                  color="#64748B"
                  style={{
                    position: "absolute",
                    left: "18px",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={data.password}
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                  style={{
                    width: "100%",
                    padding: "18px 52px",
                    borderRadius: "18px",
                    border: "1px solid #D1D5DB",
                    fontSize: "16px",
                    outline: "none",
                  }}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: "absolute",
                    right: "16px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                  }}
                >
                  {showPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>

              <div style={{ position: "relative" }}>
                <Lock
                  size={20}
                  color="#64748B"
                  style={{
                    position: "absolute",
                    left: "18px",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                />

                <input
                  type={showConfirm ? "text" : "password"}
                  placeholder="Confirm Password"
                  value={data.confirmPassword}
                  onChange={(e) =>
                    setData({
                      ...data,
                      confirmPassword: e.target.value,
                    })
                  }
                  style={{
                    width: "100%",
                    padding: "18px 52px",
                    borderRadius: "18px",
                    border:
                      data.confirmPassword &&
                      data.password !== data.confirmPassword
                        ? "1px solid #EF4444"
                        : "1px solid #D1D5DB",
                    fontSize: "16px",
                    outline: "none",
                  }}
                />

                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  style={{
                    position: "absolute",
                    right: "16px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                  }}
                >
                  {showConfirm ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>

              <div>
                <div
                  style={{
                    height: "8px",
                    borderRadius: "999px",
                    background: "#E5E7EB",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width:
                        data.password.length >= 8
                          ? "100%"
                          : data.password.length >= 5
                          ? "65%"
                          : data.password.length > 0
                          ? "35%"
                          : "0%",
                      height: "100%",
                      background:
                        data.password.length >= 8
                          ? "#16A34A"
                          : data.password.length >= 5
                          ? "#F59E0B"
                          : "#EF4444",
                      transition: ".3s",
                    }}
                  />
                </div>

                <p
                  style={{
                    marginTop: "8px",
                    color: "#64748B",
                    fontSize: "14px",
                  }}
                >
                  Password strength:{" "}
                  <strong>
                    {data.password.length >= 8
                      ? "Strong"
                      : data.password.length >= 5
                      ? "Medium"
                      : "Weak"}
                  </strong>
                </p>
              </div>
            </div>
          )}

          {/* STEP 7 */}

          {step === 7 && (
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "130px",
                  height: "130px",
                  borderRadius: "50%",
                  margin: "0 auto 25px",
                  background:
                    "linear-gradient(135deg,#22C55E,#0F766E)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: `0 20px 40px ${currentTheme.primary}55`,
                }}
              >
                <ShieldCheck size={55} color="white" />
              </div>

              <h2 style={{ color: currentTheme.secondary }}>
                Welcome, {data.name || "Eco Hero"}!
              </h2>

              <p style={{ color: "#64748B" }}>
                Your account is ready. Your Eco Points, streaks, and recycling
                history will be saved securely.
              </p>

              <div
                style={{
                  marginTop: "30px",
                  background: "#F8FAFC",
                  borderRadius: "22px",
                  padding: "25px",
                  textAlign: "left",
                }}
              >
                <p><strong>Name:</strong> {data.name || "Not set"}</p>
                <p><strong>Avatar:</strong> {data.avatar || "Custom"}</p>
                <p><strong>Theme:</strong> {data.theme}</p>
                <p><strong>Goal:</strong> {data.weeklyGoal} devices/week</p>
                <p><strong>Email:</strong> {data.email}</p>
              </div>
            </div>
          )}

          {/* NAVIGATION */}

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "40px",
            }}
          >
            <button
              onClick={back}
              style={{
                width: "55px",
                height: "55px",
                borderRadius: "50%",
                border: "1px solid #D1D5DB",
                background: "white",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 0,
              }}
            >
              <ArrowLeft
                size={22}
                style={{ transform: "translateX(-1px)" }}
              />
            </button>

            <button
              onClick={next}
              style={{
                padding: "16px 28px",
                borderRadius: "999px",
                border: "none",
                background:
                  "linear-gradient(135deg,#22C55E,#0F766E)",
                color: "white",
                cursor: "pointer",
                display: "flex",
                gap: "10px",
                alignItems: "center",
                fontWeight: "700",
                boxShadow: "0 12px 28px rgba(34,197,94,.35)",
              }}
            >
              {step === 6
                ? "Create Account"
                : step === onboardingSteps.length - 1
                ? "Enter EcoLoop"
                : "Continue"}

              <ArrowRight size={18} />
            </button>
          </div>
        </StepCard>
      </div>
    </div>
  );
}