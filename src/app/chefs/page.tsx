import { getChefs } from "@/actions/chefs.actions";
import { ChefsList } from "@/components/complex/chef/ChefsList";
import { Navigation } from "@/components/complex/navigation/Navigation";
import { Pagination } from "@/components/complex/navigation/Pagination";
import { Title } from "@/components/ui/Title";

interface ChefsPageProps {
  searchParams: Promise<{
    page?: string;
  }>;
}

export default async function ChefsPage({ searchParams }: ChefsPageProps) {
  const { page } = await searchParams;
  const currentPage = parseInt(page || "1");
  const chefsData = await getChefs(currentPage);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Navigation />

        <div className="mb-8">
          <Title
            level={1}
            subtitle={`Découvrez tous nos chefs talentueux (${chefsData.total} chefs au total)`}
          >
            Liste des Chefs
          </Title>
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <ChefsList chefs={chefsData.data} />
          <Pagination paginationData={chefsData} />
        </div>
      </div>
    </div>
  );
}
