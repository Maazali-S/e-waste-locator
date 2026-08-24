import { impactStats } from "../../data/impactstats";
import StatCard from "../common/statcard";

export default function ImpactStats() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Our Impact
        </h2>

        <p className="text-gray-600 mt-2">
          Together, we're making a difference.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-8">
        {impactStats.map((stat) => (
          <StatCard
            key={stat.id}
            stat={stat}
          />
        ))}
      </div>
    </section>
  );
}