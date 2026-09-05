import { Search, MapPin } from "lucide-react";
import heroBin from "../../assets/hero-bin.png";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.05] tracking-tight text-black">
            Your Old Device
            <br />
            Can Build a <span className="text-green-600">Better</span>
            <br />
            <span className="text-green-600">Tomorrow.</span>
          </h1>

          <p className="text-gray-700 mt-5 text-lg max-w-xl">
            Find certified e-waste recycling centers, learn your device's value,
            and earn Eco Points.
          </p>

          {/* Search Bar */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <div className="flex items-center bg-white shadow-md rounded-xl px-4 py-3 flex-1 border border-gray-100">
              <Search className="text-gray-400" size={20} />
              <input
                className="ml-3 outline-none w-full text-gray-900 placeholder:text-gray-400"
                placeholder="Search city or location"
              />
            </div>

            <button className="bg-green-600 text-white px-5 py-3 rounded-xl font-medium hover:bg-green-700 transition flex items-center justify-center gap-2">
              <MapPin size={18} />
              Use My Location
            </button>
          </div>

          {/* Popular Cities */}
          <div className="mt-5 flex items-center gap-3 flex-wrap">
            <span className="text-gray-500 text-sm font-medium">
              Popular:
            </span>

            {["Pune", "Mumbai", "Bangalore", "Delhi"].map((city) => (
              <button
                key={city}
                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-green-500 hover:text-green-600 hover:bg-green-50 transition"
              >
                {city}
              </button>
            ))}
          </div>
        </div>

        {/* Right Hero Image */}
        <div className="flex justify-center">
          <img
            src={heroBin}
            alt="Green recycling bin filled with electronic devices"
            className="w-full max-w-[500px] object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}