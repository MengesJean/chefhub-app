import { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon?: ReactNode;
  variant?: "default" | "yellow" | "green" | "blue" | "red";
  className?: string;
}

export function StatCard({
  title,
  value,
  icon,
  variant = "default",
  className = "",
}: StatCardProps) {
  const variantClasses = {
    default: "from-gray-50 to-gray-100 border-gray-200 text-gray-600",
    yellow: "from-yellow-50 to-yellow-100 border-yellow-200 text-yellow-600",
    green: "from-green-50 to-green-100 border-green-200 text-green-600",
    blue: "from-blue-50 to-blue-100 border-blue-200 text-blue-600",
    red: "from-red-50 to-red-100 border-red-200 text-red-600",
  };

  const textVariantClasses = {
    default: "text-gray-700",
    yellow: "text-yellow-700",
    green: "text-green-700",
    blue: "text-blue-700",
    red: "text-red-700",
  };

  return (
    <div
      className={`text-center p-6 bg-gradient-to-br ${variantClasses[variant]} rounded-lg border ${className}`}
    >
      {icon && <div className="flex justify-center mb-2">{icon}</div>}
      <div
        className={`text-3xl font-bold mb-2 ${
          variant !== "default"
            ? variantClasses[variant].split(" ")[2]
            : "text-gray-600"
        }`}
      >
        {value}
      </div>
      <div className={`text-sm font-medium ${textVariantClasses[variant]}`}>
        {title}
      </div>
    </div>
  );
}
