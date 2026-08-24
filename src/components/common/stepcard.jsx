export default function StepCard({ step }) {
  const Icon = step.icon;

  return (
    <div className="flex flex-col items-center text-center flex-1">
      <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center">
        <Icon size={30} className="text-green-600" />
      </div>

      <h3 className="mt-4 font-bold text-gray-900">
        {step.title}
      </h3>

      <p className="mt-2 text-sm text-gray-600 max-w-xs">
        {step.description}
      </p>
    </div>
  );
}