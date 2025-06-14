import Link from "next/link";

interface ChefProfileNavigationProps {
  chefName: string;
}

export function ChefProfileNavigation({
  chefName,
}: ChefProfileNavigationProps) {
  return (
    <nav className="mb-8">
      <div className="flex items-center space-x-2 text-sm">
        <Link
          href="/"
          className="text-gray-500 hover:text-gray-700 transition-colors"
        >
          Accueil
        </Link>

        <svg
          className="w-4 h-4 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>

        <Link
          href="/chefs"
          className="text-gray-500 hover:text-gray-700 transition-colors"
        >
          Chefs
        </Link>

        <svg
          className="w-4 h-4 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>

        <span className="text-gray-900 font-medium">{chefName}</span>
      </div>
    </nav>
  );
}
