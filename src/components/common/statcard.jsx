export default function StatCard({ stat }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center hover:shadow-md transition">
      <h3 className="text-3xl font-bold text-gray-900">
        {stat.value}
      </h3>

      <p className="mt-2 font-semibold text-gray-800">
        {stat.label}
      </p>

      <p className="mt-1 text-sm text-gray-500">
        {stat.description}
      </p>
    </div>
  );
}