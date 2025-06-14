import { ChefLocation, ChefProfile, FoodType } from "../../types/chefs.types";

interface ChefProfileDetailsProps {
  chef: ChefProfile;
}

export function ChefProfileDetails({ chef }: ChefProfileDetailsProps) {
  return (
    <div className="px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Spécialités culinaires */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Spécialités culinaires
          </h2>

          {chef.food_types && chef.food_types.length > 0 ? (
            <div className="space-y-4">
              <div className="flex flex-wrap gap-3">
                {chef.food_types.map((foodType: FoodType) => (
                  <span
                    key={foodType.id}
                    className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800 border border-blue-200"
                  >
                    🍽️ {foodType.name}
                  </span>
                ))}
              </div>

              <p className="text-gray-600 text-sm mt-4">
                {chef.food_types.length} spécialité
                {chef.food_types.length > 1 ? "s" : ""} culinaire
                {chef.food_types.length > 1 ? "s" : ""} maîtrisée
                {chef.food_types.length > 1 ? "s" : ""}
              </p>
            </div>
          ) : (
            <p className="text-gray-500 italic">
              Aucune spécialité culinaire renseignée
            </p>
          )}
        </div>

        {/* Zones d&apos;intervention */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Zones d&apos;intervention
          </h2>

          {chef.locations && chef.locations.length > 0 ? (
            <div className="space-y-4">
              {chef.locations.map((location: ChefLocation, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 bg-gray-50 rounded-lg border border-gray-200"
                >
                  <div className="flex-shrink-0 mr-4">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>

                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">
                      {location.city_name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Latitude: {location.latitude} • Longitude:{" "}
                      {location.longitude}
                    </p>
                  </div>
                </div>
              ))}

              <p className="text-gray-600 text-sm">
                Disponible dans {chef.locations.length} zone
                {chef.locations.length > 1 ? "s" : ""}
              </p>
            </div>
          ) : (
            <p className="text-gray-500 italic">
              Aucune zone d&apos;intervention renseignée
            </p>
          )}
        </div>
      </div>

      {/* Section statistiques détaillées */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Statistiques et réputation
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg border border-yellow-200">
            <div className="text-3xl font-bold text-yellow-600 mb-2">
              {chef.average_rating.toFixed(1)} ★
            </div>
            <div className="text-sm text-yellow-700 font-medium">
              Note moyenne
            </div>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {chef.reviews_count}
            </div>
            <div className="text-sm text-green-700 font-medium">
              Avis client{chef.reviews_count > 1 ? "s" : ""}
            </div>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {chef.food_types?.length || 0}
            </div>
            <div className="text-sm text-blue-700 font-medium">
              Spécialité{(chef.food_types?.length || 0) > 1 ? "s" : ""}
            </div>
          </div>
        </div>
      </div>

      {/* Call to action */}
      <div className="mt-12 pt-8 border-t border-gray-200 text-center">
        <div className="bg-blue-50 rounded-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Intéressé par les services de {chef.firstname} ?
          </h3>
          <p className="text-gray-600 mb-6">
            Contactez ce chef pour discuter de vos besoins culinaires
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Contacter le chef
          </button>
        </div>
      </div>
    </div>
  );
}
