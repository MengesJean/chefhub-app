import { ChefResponse } from "../types/chefs.types";
import { ChefCard } from "./ChefCard";

interface ChefsListProps {
  chefs: ChefResponse;
}

export function ChefsList({ chefs }: ChefsListProps) {
  if (chefs.data.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="mx-auto max-w-md">
          <div className="mx-auto h-12 w-12 text-gray-400">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <h3 className="mt-4 text-lg font-medium text-gray-900">
            Aucun chef trouvé
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            Il n&apos;y a actuellement aucun chef enregistré dans la base de
            données.
          </p>
        </div>
      </div>
    );
  }

  // Calculer les statistiques pour la section résumé
  const averageRating =
    chefs.data
      .filter((chef) => chef.reviews_count > 0)
      .reduce((sum, chef) => sum + chef.average_rating, 0) /
      chefs.data.filter((chef) => chef.reviews_count > 0).length || 0;

  const totalReviews = chefs.data.reduce(
    (sum, chef) => sum + chef.reviews_count,
    0
  );
  const totalSpecialties = chefs.data.reduce(
    (sum, chef) => sum + (chef.food_types?.length || 0),
    0
  );

  return (
    <div className="p-6">
      {/* Résumé rapide */}
      <div className="mb-8 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="text-center p-4 bg-blue-50 rounded-lg">
          <div className="text-2xl font-bold text-blue-600">{chefs.total}</div>
          <div className="text-sm text-blue-700">
            Chef{chefs.total > 1 ? "s" : ""} au total
          </div>
        </div>

        <div className="text-center p-4 bg-yellow-50 rounded-lg">
          <div className="text-2xl font-bold text-yellow-600">
            {averageRating > 0 ? averageRating.toFixed(1) : "-"} ★
          </div>
          <div className="text-sm text-yellow-700">Note moyenne</div>
        </div>

        <div className="text-center p-4 bg-green-50 rounded-lg">
          <div className="text-2xl font-bold text-green-600">
            {totalReviews}
          </div>
          <div className="text-sm text-green-700">Avis total</div>
        </div>

        <div className="text-center p-4 bg-purple-50 rounded-lg">
          <div className="text-2xl font-bold text-purple-600">
            {totalSpecialties}
          </div>
          <div className="text-sm text-purple-700">Spécialités</div>
        </div>
      </div>

      {/* Grille des chefs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {chefs.data.map((chef) => (
          <ChefCard key={chef.id} chef={chef} />
        ))}
      </div>
    </div>
  );
}
