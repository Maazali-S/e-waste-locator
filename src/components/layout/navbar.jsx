import { Recycle } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-green-100">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

        <div className="flex items-center gap-2">
          <Recycle className="text-green-600" size={26}/>
          <div>
            <h1 className="font-bold text-xl text-green-700">EcoLoop</h1>
            <p className="text-xs text-gray-500">
              Recycle Today, Better Tomorrow
            </p>
          </div>
        </div>

        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <a href="/">Home</a>
          <a href="/facility">Find Facility</a>
          <a href="/lookup">Device Lookup</a>
          <a href="/knowledge">Knowledge Hub</a>
          <a href="/rewards">Rewards</a>
        </div>

        <button className="bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition">
          Find Nearby
        </button>

      </div>
    </nav>
  );
}