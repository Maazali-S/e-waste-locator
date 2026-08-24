import { howEcoLoopWorks } from "../../data/howitworks";
import StepCard from "../common/stepcard";

export default function HowEcoLoopWorks() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          How EcoLoop Works
        </h2>

        <p className="text-gray-600 mt-2">
          Recycling your e-waste is simple.
        </p>
      </div>

      <div className="mt-10 flex flex-col md:flex-row items-center gap-8 md:gap-0">
        {howEcoLoopWorks.map((step, index) => (
          <div key={step.id} className="contents">
            <StepCard step={step} />

            {index < howEcoLoopWorks.length - 1 && (
              <div className="hidden md:block text-gray-300 text-2xl px-4">
                →
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}