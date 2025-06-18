interface RatingProps {
  rating: number;
  maxRating?: number;
  size?: "sm" | "md" | "lg";
  showValue?: boolean;
  className?: string;
}

export function Rating({
  rating,
  maxRating = 5,
  size = "md",
  showValue = false,
  className = "",
}: RatingProps) {
  const sizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-xl",
  };

  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Étoiles pleines
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className="text-yellow-400">
          ★
        </span>
      );
    }

    // Demi-étoile
    if (hasHalfStar) {
      stars.push(
        <span key="half" className="text-yellow-400">
          ☆
        </span>
      );
    }

    // Étoiles vides
    const remainingStars = maxRating - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="text-gray-300">
          ☆
        </span>
      );
    }

    return stars;
  };

  return (
    <div className={`flex items-center space-x-1 ${className}`}>
      <div className={`flex items-center space-x-1 ${sizeClasses[size]}`}>
        {renderStars()}
      </div>
      {showValue && (
        <span className={`font-medium text-gray-900 ml-2 ${sizeClasses[size]}`}>
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
}
