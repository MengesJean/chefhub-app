"use client";

import { GalleryImage, GalleryImageUrls } from "@/types/chefs.types";
import { useState } from "react";

interface ChefGalleryProps {
  galleryImages: GalleryImage[];
  chefName: string;
}

export function ChefGallery({ galleryImages, chefName }: ChefGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  if (!galleryImages || galleryImages.length === 0) {
    return null;
  }

  // Trier les images par ordre et mettre l'image featured en premier
  const sortedImages = [...galleryImages].sort((a, b) => {
    if (a.is_featured && !b.is_featured) return -1;
    if (!a.is_featured && b.is_featured) return 1;
    return a.order - b.order;
  });

  const openLightbox = (image: GalleryImage) => {
    console.log("Opening lightbox with image:", image);
    setSelectedImage(image);
  };

  const getImageSrc = (
    image: GalleryImage,
    size: keyof GalleryImageUrls = "xlarge"
  ): string | null => {
    // Essayer d'obtenir l'URL dans l'ordre de préférence
    const urls = image.image_urls;
    const src =
      urls[size] || urls.large || urls.medium || urls.small || urls.original;

    // Retourner null si aucune URL valide n'est trouvée ou si c'est une string vide
    return src && src.trim() !== "" ? src : null;
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="mt-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Galerie de {chefName}
          </h2>
          <span className="text-sm text-gray-500">
            {galleryImages.length} photo{galleryImages.length > 1 ? "s" : ""}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {sortedImages.map((image) => {
            const imageSrc = getImageSrc(image, "medium");

            // Ne pas rendre l'image si aucune URL valide n'est disponible
            if (!imageSrc) {
              return null;
            }

            return (
              <div
                key={image.id}
                className="relative group cursor-pointer overflow-hidden rounded-lg bg-gray-100 aspect-square"
                onClick={() => openLightbox(image)}
              >
                <img
                  src={imageSrc}
                  alt={image.display_title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Badge pour l'image mise en avant */}
                {image.is_featured && (
                  <div className="absolute top-2 left-2">
                    <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                      ⭐ Mise en avant
                    </span>
                  </div>
                )}

                {/* Overlay au hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </div>

                {/* Titre de l'image */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                  <p className="text-white text-sm font-medium truncate">
                    {image.display_title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative w-full h-full max-w-6xl max-h-full flex items-center justify-center">
            {/* Bouton fermer */}
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-20 bg-black/50 rounded-full p-2"
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Image en grand */}
            {(() => {
              const lightboxSrc = getImageSrc(selectedImage, "xlarge");
              if (!lightboxSrc) {
                return (
                  <div className="max-w-full max-h-full flex items-center justify-center z-10 text-white">
                    <div className="text-center">
                      <svg
                        className="w-16 h-16 mx-auto mb-4 opacity-50"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <p className="text-lg font-medium">
                        Image non disponible
                      </p>
                    </div>
                  </div>
                );
              }

              return (
                <img
                  src={lightboxSrc}
                  alt={selectedImage.display_title}
                  className="max-w-full max-h-full object-contain z-10"
                  onClick={(e) => e.stopPropagation()}
                  onError={(e) => {
                    // Fallback vers une taille plus petite si xlarge ne fonctionne pas
                    const target = e.target as HTMLImageElement;
                    const currentSrc = target.src;
                    console.log("Image error, current src:", currentSrc);

                    const largeSrc = getImageSrc(selectedImage, "large");
                    const mediumSrc = getImageSrc(selectedImage, "medium");
                    const smallSrc = getImageSrc(selectedImage, "small");

                    if (
                      currentSrc === selectedImage.image_urls.xlarge &&
                      largeSrc
                    ) {
                      target.src = largeSrc;
                    } else if (
                      currentSrc === selectedImage.image_urls.large &&
                      mediumSrc
                    ) {
                      target.src = mediumSrc;
                    } else if (
                      currentSrc === selectedImage.image_urls.medium &&
                      smallSrc
                    ) {
                      target.src = smallSrc;
                    }
                  }}
                />
              );
            })()}

            {/* Informations de l'image */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 z-10">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {selectedImage.display_title}
                  </h3>
                  {selectedImage.is_featured && (
                    <span className="inline-flex items-center text-sm text-yellow-600 mt-1">
                      ⭐ Image mise en avant
                    </span>
                  )}
                </div>
                <div className="text-sm text-gray-500">
                  Photo{" "}
                  {sortedImages.findIndex(
                    (img) => img.id === selectedImage.id
                  ) + 1}{" "}
                  sur {sortedImages.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
