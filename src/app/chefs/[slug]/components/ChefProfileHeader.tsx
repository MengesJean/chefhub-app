import { ChefLocation, ChefProfile } from "../../types/chefs.types";

interface ChefProfileHeaderProps {
  chef: ChefProfile;
}

export function ChefProfileHeader({ chef }: ChefProfileHeaderProps) {
  // Fonction pour afficher les étoiles
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className="text-yellow-400 text-xl">
          ★
        </span>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" className="text-yellow-400 text-xl">
          ☆
        </span>
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="text-gray-300 text-xl">
          ☆
        </span>
      );
    }

    return stars;
  };

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-12 text-white">
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <div className="w-32 h-32 rounded-full overflow-hidden">
            <img
              src={chef.profile_image_url}
              alt={`${chef.firstname} ${chef.lastname}`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Informations principales */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-2">
            {chef.firstname} {chef.lastname}
          </h1>

          {/* Localisation */}
          <div className="flex items-center justify-center md:justify-start mb-4">
            <svg
              className="w-5 h-5 mr-2"
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
            <span className="text-lg">
              {chef.locations
                .map((location: ChefLocation) => location.city_name)
                .join(", ")}
            </span>
          </div>

          {/* Note et avis */}
          <div className="flex items-center justify-center md:justify-start space-x-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                {renderStars(chef.average_rating)}
              </div>
              <span className="text-xl font-semibold">
                {chef.average_rating.toFixed(1)}
              </span>
            </div>

            <div className="border-l border-white/30 pl-4">
              <span className="text-lg">{chef.reviews_count} avis</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
