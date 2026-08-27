import { Recycle, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Find Facility", path: "/find-facility" },
    { name: "Device Lookup", path: "/device-lookup" },
    { name: "Knowledge Hub", path: "/knowledge-hub" },
    { name: "Rewards", path: "/rewards" },
    { name: "Dashboard", path: "/dashboard" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-green-100">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

        <Link to="/" className="flex items-center gap-2">
          <Recycle className="text-green-600" size={28}/>
          <div>
            <h1 className="font-bold text-xl text-green-700">EcoLoop</h1>
            <p className="text-xs text-gray-500">Recycle Today, Better Tomorrow</p>
          </div>
        </Link>

        <div className="hidden lg:flex gap-2 bg-white p-2 rounded-full shadow-md">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                location.pathname === link.path
                  ? "bg-green-600 text-white shadow-lg"
                  : "text-gray-700 hover:bg-green-50 hover:text-green-700"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 rounded-full bg-white shadow"
        >
          {open ? <X/> : <Menu/>}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-green-100">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={`block px-6 py-4 transition ${
                location.pathname === link.path
                  ? "bg-green-600 text-white"
                  : "hover:bg-green-50"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}