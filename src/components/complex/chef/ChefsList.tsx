import { ChefCard } from "@/components/complex/chef/ChefCard";
import { ChefProfile } from "@/types/chefs.types";

interface ChefsListProps {
  chefs: ChefProfile[];
}

export function ChefsList({ chefs }: ChefsListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {chefs.map((chef) => (
        <ChefCard key={chef.id} chef={chef} />
      ))}
    </div>
  );
}
