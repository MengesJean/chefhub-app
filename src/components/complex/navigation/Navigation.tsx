import Link from "next/link";

export function Navigation() {
  return (
    <nav className="mb-8">
      <div className="flex items-center space-x-4">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 transition-colors"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Retour à l&apos;accueil
        </Link>

        <span className="text-gray-300">|</span>

        <span className="text-sm text-gray-600">Liste des chefs</span>
      </div>
    </nav>
  );
}
