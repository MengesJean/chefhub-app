import Link from "next/link";
import { ChefProfile, FoodType } from "../types/chefs.types";

interface ChefCardProps {
  chef: ChefProfile;
}

export function ChefCard({ chef }: ChefCardProps) {
  const initials = `${chef.firstname.charAt(0)}${chef.lastname.charAt(0)}`;

  // Fonction pour afficher les étoiles
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className="text-yellow-400">
          ★
        </span>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" className="text-yellow-400">
          ☆
        </span>
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="text-gray-300">
          ☆
        </span>
      );
    }

    return stars;
  };

  return (
    <Link
      href={`/chefs/${chef.slug}`}
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200 block"
    >
      <div className="space-y-4">
        {/* Header avec avatar et nom */}
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-medium overflow-hidden">
            {chef.profile_image_url ? (
              <img
                src={chef.profile_image_url}
                alt={`${chef.firstname} ${chef.lastname}`}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-blue-500 flex items-center justify-center">
                <span className="text-lg">{initials}</span>
              </div>
            )}
          </div>

          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900">
              {chef.firstname} {chef.lastname}
            </h3>
            <p className="text-sm text-gray-500">
              {chef.locations.map((location) => location.city_name).join(", ")}
            </p>
          </div>
        </div>

        {/* Spécialités culinaires */}
        {chef.food_types && chef.food_types.length > 0 && (
          <div>
            <div className="flex flex-wrap gap-2">
              {chef.food_types.slice(0, 3).map((foodType: FoodType) => (
                <span
                  key={foodType.id}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                >
                  {foodType.name}
                </span>
              ))}
              {chef.food_types.length > 3 && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                  +{chef.food_types.length - 3}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Note et avis */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <div className="flex items-center space-x-1">
            {renderStars(chef.average_rating)}
            <span className="text-sm font-medium text-gray-900 ml-2">
              {chef.average_rating.toFixed(1)}
            </span>
          </div>

          <div className="text-sm text-gray-500">{chef.reviews_count} avis</div>
        </div>
      </div>
    </Link>
  );
}
