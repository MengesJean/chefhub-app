import { getChefs } from "./actions/chefs.action";
import { ChefsList } from "./components/ChefsList";
import { Navigation } from "./components/Navigation";
import { Pagination } from "./components/Pagination";

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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Liste des Chefs
          </h1>
          <p className="text-gray-600">
            Découvrez tous nos chefs talentueux ({chefsData.total} chefs au
            total)
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <ChefsList chefs={chefsData} />
          <Pagination paginationData={chefsData} />
        </div>
      </div>
    </div>
  );
}
