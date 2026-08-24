import { deviceCategories } from "../../data/deviceCategories";
import CategoryCard from "../common/categorycard";

export default function DeviceCategories() {
  const handleCategoryClick = (category) => {
    console.log("Selected:", category.slug);

    // Later:
    // navigate(`/device-lookup?type=${category.slug}`)
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center text-gray-900">
        What would you like to recycle?
      </h2>

      <p className="text-center text-gray-600 mt-2">
        Choose your device to find recycling options and estimated value.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-5 mt-8">
        {deviceCategories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            onSelect={handleCategoryClick}
          />
        ))}
      </div>
    </section>
  );
}