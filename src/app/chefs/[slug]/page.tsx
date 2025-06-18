import { getChefBySlug } from "@/actions/chefs.actions";
import { ChefProfileDetails } from "@/components/complex/chef/ChefProfileDetails";
import { ChefProfileHeader } from "@/components/complex/chef/ChefProfileHeader";
import { ChefProfileNavigation } from "@/components/complex/chef/ChefProfileNavigation";
import { notFound } from "next/navigation";

interface ChefProfilePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ChefProfilePage({
  params,
}: ChefProfilePageProps) {
  const { slug } = await params;
  const chef = await getChefBySlug(slug);

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
