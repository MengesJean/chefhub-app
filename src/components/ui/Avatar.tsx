interface AvatarProps {
  src?: string;
  alt: string;
  initials?: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export function Avatar({
  src,
  alt,
  initials,
  size = "md",
  className = "",
}: AvatarProps) {
  const sizeClasses = {
    sm: "w-8 h-8 text-sm",
    md: "w-12 h-12 text-lg",
    lg: "w-16 h-16 text-xl",
    xl: "w-32 h-32 text-4xl",
  };

  const baseClasses =
    "rounded-full overflow-hidden flex items-center justify-center";
  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;

  if (src) {
    return (
      <div className={classes}>
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </div>
    );
  }

  return (
    <div className={`${classes} bg-blue-500 text-white font-medium`}>
      <span className="font-bold">{initials}</span>
    </div>
  );
}
