import { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
  shadow?: "none" | "sm" | "md" | "lg";
}

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export function Card({
  children,
  hover = false,
  padding = "md",
  shadow = "sm",
  className = "",
  ...props
}: CardProps) {
  const baseClasses =
    "bg-white rounded-lg border border-gray-200 overflow-hidden transition-all duration-200";

  const hoverClasses = hover
    ? "hover:shadow-md hover:-translate-y-1 hover:border-gray-300 cursor-pointer transform"
    : "";

  const paddingClasses = {
    none: "",
    sm: "p-3",
    md: "p-4",
    lg: "p-6",
  };

  const shadowClasses = {
    none: "",
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
  };

  const classes = `${baseClasses} ${hoverClasses} ${paddingClasses[padding]} ${shadowClasses[shadow]} ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className = "" }: CardHeaderProps) {
  return (
    <div className={`px-6 py-4 border-b border-gray-200 ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({
  children,
  className = "",
  ...props
}: CardContentProps) {
  return (
    <div className={`p-4 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({
  children,
  className = "",
  ...props
}: CardFooterProps) {
  return (
    <div
      className={`px-4 py-3 bg-gray-50 border-t border-gray-100 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
