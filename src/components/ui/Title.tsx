import { ReactNode, createElement } from "react";

interface TitleProps {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  subtitle?: string;
}

export function Title({
  children,
  level = 1,
  className = "",
  subtitle,
}: TitleProps) {
  const baseClasses = "font-bold text-gray-900";

  const levelClasses = {
    1: "text-4xl",
    2: "text-3xl",
    3: "text-2xl",
    4: "text-xl",
    5: "text-lg",
    6: "text-base",
  };

  const classes = `${baseClasses} ${levelClasses[level]} ${className}`;

  const tagName = `h${level}`;

  return (
    <div>
      {createElement(tagName, { className: classes }, children)}
      {subtitle && <p className="text-gray-600 mt-2">{subtitle}</p>}
    </div>
  );
}
