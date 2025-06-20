"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Stepper } from "@/components/ui/Stepper";
import Link from "next/link";
import { useState } from "react";

const onboardingSteps = [
  {
    id: "account",
    title: "Compte",
    description: "Informations de base",
    icon: <span className="text-lg">👤</span>,
  },
  {
    id: "location",
    title: "Localisation",
    description: "Zones d'intervention",
    icon: <span className="text-lg">📍</span>,
  },
  {
    id: "visuals",
    title: "Visuels",
    description: "Photos & galerie",
    icon: <span className="text-lg">📸</span>,
  },
  {
    id: "profile",
    title: "Profil Pro",
    description: "Spécialités & tarifs",
    icon: <span className="text-lg">👨‍🍳</span>,
  },
];

export default function SignUpPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    // Step 1: Account
    email: "",
    firstname: "",
    lastname: "",
    password: "",
    confirmPassword: "",
    // Step 2: Location
    address: "",
    city: "",
    zones: [] as string[],
    // Step 3: Visuals
    profileImage: null as File | null,
    galleryImages: [] as File[],
    // Step 4: Profile
    specialties: [] as string[],
    bio: "",
    hourlyRate: "",
    siret: "",
    availability: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const nextStep = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulation API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    if (currentStep === onboardingSteps.length - 1) {
      // Final submission
      console.log("Complete form data:", formData);
      alert("Inscription réussie ! Bienvenue dans la communauté Malt Cook 🎉");
    } else {
      nextStep();
    }

    setIsLoading(false);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0: // Account
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Créez votre compte chef
              </h2>
              <p className="text-gray-600">
                Rejoignez plus de 500 chefs qui font confiance à Malt Cook
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Prénom"
                placeholder="Votre prénom"
                value={formData.firstname}
                onChange={(e) =>
                  setFormData({ ...formData, firstname: e.target.value })
                }
                error={errors.firstname}
                fullWidth
              />
              <Input
                label="Nom"
                placeholder="Votre nom"
                value={formData.lastname}
                onChange={(e) =>
                  setFormData({ ...formData, lastname: e.target.value })
                }
                error={errors.lastname}
                fullWidth
              />
            </div>

            <Input
              label="Email professionnel"
              type="email"
              placeholder="chef@exemple.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              error={errors.email}
              fullWidth
              icon={<span className="text-lg">✉️</span>}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Mot de passe"
                type="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                error={errors.password}
                fullWidth
              />
              <Input
                label="Confirmer le mot de passe"
                type="password"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
                error={errors.confirmPassword}
                fullWidth
              />
            </div>

            <div className="bg-primary-50 p-4 rounded-lg border border-primary-200">
              <p className="text-sm text-primary-700">
                <span className="font-medium">💡 Astuce :</span> Utilisez votre
                email professionnel pour renforcer la confiance avec vos futurs
                clients.
              </p>
            </div>
          </div>
        );

      case 1: // Location
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Où intervenez-vous ?
              </h2>
              <p className="text-gray-600">
                Définissez vos zones d'intervention pour toucher plus de clients
              </p>
            </div>

            <Input
              label="Adresse principale"
              placeholder="123 Rue de la Gastronomie, 75001 Paris"
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
              error={errors.address}
              fullWidth
              icon={<span className="text-lg">🏠</span>}
            />

            <Input
              label="Ville principale"
              placeholder="Paris"
              value={formData.city}
              onChange={(e) =>
                setFormData({ ...formData, city: e.target.value })
              }
              error={errors.city}
              fullWidth
              icon={<span className="text-lg">🏙️</span>}
            />

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Zones d'intervention supplémentaires
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  "Paris Centre",
                  "Banlieue Ouest",
                  "Banlieue Est",
                  "Banlieue Nord",
                  "Banlieue Sud",
                  "Île-de-France",
                ].map((zone) => (
                  <label
                    key={zone}
                    className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:border-primary-300 cursor-pointer transition-colors"
                  >
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-primary-600 focus:ring-primary-600"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setFormData({
                            ...formData,
                            zones: [...formData.zones, zone],
                          });
                        } else {
                          setFormData({
                            ...formData,
                            zones: formData.zones.filter((z) => z !== zone),
                          });
                        }
                      }}
                    />
                    <span className="text-sm text-gray-700">{zone}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        );

      case 2: // Visuals
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Montrez votre talent
              </h2>
              <p className="text-gray-600">
                Ajoutez vos plus belles créations pour séduire vos clients
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Photo de profil
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary-400 transition-colors">
                  <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">👨‍🍳</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    Glissez votre photo ici ou cliquez pour parcourir
                  </p>
                  <Button variant="outline" size="sm">
                    Choisir une photo
                  </Button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Galerie de créations (optionnel)
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary-400 transition-colors">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">📸</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    Ajoutez vos plus belles réalisations (max 10 photos)
                  </p>
                  <Button variant="outline" size="sm">
                    Ajouter des photos
                  </Button>
                </div>
              </div>
            </div>
          </div>
        );

      case 3: // Profile
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Finalisez votre profil
              </h2>
              <p className="text-gray-600">
                Dernières informations pour compléter votre présentation
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Spécialités culinaires
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  "Cuisine française",
                  "Cuisine italienne",
                  "Cuisine asiatique",
                  "Pâtisserie",
                  "Cuisine fusion",
                  "Cuisine végétarienne",
                ].map((specialty) => (
                  <label
                    key={specialty}
                    className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:border-primary-300 cursor-pointer transition-colors"
                  >
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-primary-600 focus:ring-primary-600"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setFormData({
                            ...formData,
                            specialties: [...formData.specialties, specialty],
                          });
                        } else {
                          setFormData({
                            ...formData,
                            specialties: formData.specialties.filter(
                              (s) => s !== specialty
                            ),
                          });
                        }
                      }}
                    />
                    <span className="text-sm text-gray-700">{specialty}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Présentez-vous
              </label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-primary-600 resize-none"
                rows={4}
                placeholder="Parlez de votre parcours, votre passion, votre style culinaire..."
                value={formData.bio}
                onChange={(e) =>
                  setFormData({ ...formData, bio: e.target.value })
                }
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Tarif horaire (€)"
                type="number"
                placeholder="45"
                value={formData.hourlyRate}
                onChange={(e) =>
                  setFormData({ ...formData, hourlyRate: e.target.value })
                }
                error={errors.hourlyRate}
                fullWidth
                icon={<span className="text-lg">💰</span>}
              />
              <Input
                label="SIRET (optionnel)"
                placeholder="12345678901234"
                value={formData.siret}
                onChange={(e) =>
                  setFormData({ ...formData, siret: e.target.value })
                }
                error={errors.siret}
                fullWidth
                icon={<span className="text-lg">🏢</span>}
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Link href="/" className="inline-flex items-center space-x-2 mb-8">
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-lg">👨‍🍳</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Malt Cook</span>
          </Link>
        </div>

        {/* Stepper */}
        <div className="mb-12">
          <Stepper
            steps={onboardingSteps}
            currentStep={currentStep}
            orientation="horizontal"
          />
        </div>

        {/* Main Content */}
        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit}>
              {renderStepContent()}

              {/* Actions */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
                <div className="flex space-x-3">
                  {currentStep > 0 && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={prevStep}
                      disabled={isLoading}
                    >
                      Précédent
                    </Button>
                  )}
                </div>

                <div className="flex space-x-3">
                  <Button
                    type="submit"
                    isLoading={isLoading}
                    className="min-w-[120px]"
                  >
                    {currentStep === onboardingSteps.length - 1
                      ? "Créer mon compte"
                      : "Continuer"}
                  </Button>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-sm text-gray-500">
            Déjà inscrit ?{" "}
            <Link
              href="/auth/signin"
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              Se connecter
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
