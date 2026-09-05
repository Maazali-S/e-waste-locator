import { User, Leaf, Recycle, Cpu, Shield, Zap } from "lucide-react";

const avatars = [
  { name: "Tech Recycler", icon: <Cpu color="#0F766E"/> },
  { name: "Nature Guardian", icon: <Leaf color="#0F766E"/> },
  { name: "Green Explorer", icon: <Recycle color="#0F766E"/> },
  { name: "Battery Saver", icon: <Zap color="#0F766E"/> },
  { name: "Circuit Hero", icon: <Shield color="#0F766E"/> },
  { name: "Earth Protector", icon: <User color="#0F766E"/> },
];

export default function AvatarPicker({
  value,
  onChange,
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: "16px",
      }}
    >
      {avatars.map((avatar) => (
        <button
          key={avatar.name}
          onClick={() => onChange(avatar.name)}
          style={{
            border:
              value === avatar.name
                ? "2px solid #22C55E"
                : "1px solid #E5E7EB",
            borderRadius: "20px",
            padding: "22px 12px",
            background:
              value === avatar.name ? "#ECFDF5" : "white",
            cursor: "pointer",
          }}
        >
          <div style={{ marginBottom: "12px" }}>{avatar.icon}</div>

          <small>{avatar.name}</small>
        </button>
      ))}
    </div>
  );
}