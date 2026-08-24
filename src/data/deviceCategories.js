import {
  Smartphone,
  Laptop,
  BatteryCharging,
  Plug,
  Cpu,
} from "lucide-react";

export const deviceCategories = [
  {
    id: 1,
    name: "Phone",
    icon: Smartphone,
    color: "text-green-600",
    slug: "phone",
  },
  {
    id: 2,
    name: "Laptop",
    icon: Laptop,
    color: "text-blue-600",
    slug: "laptop",
  },
  {
    id: 3,
    name: "Battery",
    icon: BatteryCharging,
    color: "text-yellow-500",
    slug: "battery",
  },
  {
    id: 4,
    name: "Charger",
    icon: Plug,
    color: "text-purple-600",
    slug: "charger",
  },
  {
    id: 5,
    name: "Others",
    icon: Cpu,
    color: "text-emerald-600",
    slug: "others",
  },
];