import { notFound } from "next/navigation";
import { getChefBySlug } from "../actions/chefs.action";
import { ChefProfileDetails } from "./components/ChefProfileDetails";
import { ChefProfileHeader } from "./components/ChefProfileHeader";
import { ChefProfileNavigation } from "./components/ChefProfileNavigation";

interface ChefProfilePageProps {
  params: {
    slug: string;
  };
}

export default async function ChefProfilePage({
  params,
}: ChefProfilePageProps) {
  const { slug } = await params;
  const chef = await getChefBySlug(slug);
  console.log(chef);
  if (!chef) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ChefProfileNavigation
          chefName={`${chef.firstname} ${chef.lastname}`}
        />

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <ChefProfileHeader chef={chef} />
          <ChefProfileDetails chef={chef} />
        </div>
      </div>
    </div>
  );
}
