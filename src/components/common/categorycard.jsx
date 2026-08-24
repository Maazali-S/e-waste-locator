export default function CategoryCard({ category, onSelect }) {
  const Icon = category.icon;

  return (
    <button
      onClick={() => onSelect?.(category)}
      className="bg-white rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition p-5 flex flex-col items-center justify-center gap-3 border border-gray-100 min-h-[120px]"
    >
      <Icon size={34} className={category.color} />
      <span className="font-medium text-gray-800">{category.name}</span>
    </button>
  );
}