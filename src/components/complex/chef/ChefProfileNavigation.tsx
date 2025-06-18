import { Breadcrumb } from "@/components/ui/Breadcrumb";

interface ChefProfileNavigationProps {
  chefName: string;
}

export function ChefProfileNavigation({
  chefName,
}: ChefProfileNavigationProps) {
  const breadcrumbItems = [
    {
      label: "Accueil",
      href: "/",
    },
    {
      label: "Chefs",
      href: "/chefs",
    },
    {
      label: chefName,
    },
  ];

  return <Breadcrumb items={breadcrumbItems} />;
}
