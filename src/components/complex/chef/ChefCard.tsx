import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
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
    <Link href={`/chefs/${chef.slug}`} className="block">
      <Card hover className="h-full">
        <CardContent className="space-y-4">
          {/* Header avec avatar et nom */}
          <div className="flex items-center space-x-4">
            <Avatar
              src={chef.profile_image_url}
              alt={`${chef.firstname} ${chef.lastname}`}
              initials={initials}
              size="md"
            />

            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900">
                {chef.firstname} {chef.lastname}
              </h3>
              <p className="text-sm text-gray-500">
                {chef.locations
                  .map((location) => location.city_name)
                  .join(", ")}
              </p>
            </div>
          </div>

          {/* Spécialités culinaires */}
          {chef.food_types && chef.food_types.length > 0 && (
            <div>
              <div className="flex flex-wrap gap-2">
                {chef.food_types.slice(0, 3).map((foodType: FoodType) => (
                  <Badge key={foodType.id} variant="default" size="sm">
                    {foodType.name}
                  </Badge>
                ))}
                {chef.food_types.length > 3 && (
                  <Badge variant="secondary" size="sm">
                    +{chef.food_types.length - 3}
                  </Badge>
                )}
              </div>
            </div>
          )}
        </CardContent>

        <CardFooter className="flex items-center justify-between">
          <Rating rating={chef.average_rating} showValue size="sm" />
          <div className="text-sm text-gray-500">{chef.reviews_count} avis</div>
        </CardFooter>
      </Card>
    </Link>
  );
}
