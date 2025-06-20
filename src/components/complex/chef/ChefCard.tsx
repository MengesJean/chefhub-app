import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardFooter } from "@/components/ui/Card";
import { Rating } from "@/components/ui/Rating";
import { ChefProfile, FoodType } from "@/types/chefs.types";
import Link from "next/link";

interface ChefCardProps {
  chef: ChefProfile;
}

export function ChefCard({ chef }: ChefCardProps) {
  const initials = `${chef.firstname.charAt(0)}${chef.lastname.charAt(0)}`;

  return (
    <div className="group relative">
      <Link href={`/chefs/${chef.slug}`} className="block">
        <Card
          hover
          shadow="sm"
          padding="none"
          className="h-full overflow-hidden bg-white border border-gray-200 group-hover:border-gray-300 transition-all duration-300"
        >
          <CardContent className="p-6 space-y-4">
            {/* Header avec avatar et nom */}
            <div className="flex items-center space-x-4">
              <Avatar
                src={chef.profile_image_url}
                alt={`${chef.firstname} ${chef.lastname}`}
                initials={initials}
                size="md"
                className="ring-2 ring-gray-100 group-hover:ring-primary-200 transition-all duration-200"
              />

              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-700 transition-colors duration-200 truncate">
                  {chef.firstname} {chef.lastname}
                </h3>
                <p className="text-sm text-gray-500 truncate">
                  {chef.locations
                    .map((location) => location.city_name)
                    .join(", ")}
                </p>
              </div>
            </div>

            {/* Spécialités culinaires */}
            {chef.food_types && chef.food_types.length > 0 && (
              <div className="space-y-2">
                <div className="flex flex-wrap gap-2">
                  {chef.food_types.slice(0, 3).map((foodType: FoodType) => (
                    <Badge
                      key={foodType.id}
                      variant="primary"
                      size="sm"
                      className="group-hover:bg-primary-200 group-hover:text-primary-900 transition-colors duration-200"
                    >
                      {foodType.name}
                    </Badge>
                  ))}
                  {chef.food_types.length > 3 && (
                    <Badge
                      variant="secondary"
                      size="sm"
                      className="group-hover:bg-gray-200 transition-colors duration-200"
                    >
                      +{chef.food_types.length - 3}
                    </Badge>
                  )}
                </div>
              </div>
            )}
          </CardContent>

          <CardFooter className="px-6 py-4 bg-gray-50 border-t border-gray-100 group-hover:bg-primary-50 transition-colors duration-200">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center space-x-3">
                <Rating
                  rating={chef.average_rating}
                  showValue
                  size="sm"
                  className="text-amber-400"
                />
                <div className="text-sm text-gray-500">
                  ({chef.reviews_count} avis)
                </div>
              </div>

              {/* Bouton "Voir" qui apparaît au hover */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out">
                <Button
                  size="sm"
                  variant="primary"
                  className="text-xs px-3 py-1 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-200"
                >
                  Voir
                </Button>
              </div>
            </div>
          </CardFooter>
        </Card>
      </Link>
    </div>
  );
}
