import Link from "next/link";
import { ReactNode } from "react";

interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: ReactNode;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: ReactNode;
  className?: string;
}

export function Breadcrumb({
  items,
  separator,
  className = "",
}: BreadcrumbProps) {
  const defaultSeparator = (
    <svg
      className="w-4 h-4 text-gray-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  );

  return (
    <nav className={`mb-8 ${className}`}>
      <div className="flex items-center space-x-2 text-sm">
        {items.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            {item.href ? (
              <Link
                href={item.href}
                className="text-gray-500 hover:text-gray-700 transition-colors flex items-center"
              >
                {item.icon && <span className="mr-1">{item.icon}</span>}
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-900 font-medium flex items-center">
                {item.icon && <span className="mr-1">{item.icon}</span>}
                {item.label}
              </span>
            )}

            {index < items.length - 1 && (
              <span>{separator || defaultSeparator}</span>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}
