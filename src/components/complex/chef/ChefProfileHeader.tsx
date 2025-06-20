import { Avatar } from "@/components/ui/Avatar";
import { Rating } from "@/components/ui/Rating";
import { ChefLocation, ChefProfile } from "@/types/chefs.types";

interface ChefProfileHeaderProps {
  chef: ChefProfile;
}

export function ChefProfileHeader({ chef }: ChefProfileHeaderProps) {
  const initials = `${chef.firstname.charAt(0)}${chef.lastname.charAt(0)}`;

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-12 text-white">
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <Avatar
            src={chef.profile_image_url}
            alt={`${chef.firstname} ${chef.lastname}`}
            initials={initials}
            size="xl"
            className="bg-white/20"
          />
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
              {chef.locations && chef.locations.length > 0
                ? chef.locations
                    .map((location: ChefLocation) => location.city_name)
                    .join(", ")
                : "Non spécifié"}
            </span>
          </div>

          {/* Note et avis */}
          <div className="flex items-center justify-center md:justify-start space-x-4">
            <Rating
              rating={chef.average_rating}
              showValue
              size="lg"
              className="text-white"
            />

            <div className="border-l border-white/30 pl-4">
              <span className="text-lg">{chef.reviews_count} avis</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
