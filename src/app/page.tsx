import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Navigation */}
      <nav className="relative z-10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
              <span className="text-2xl">👨‍🍳</span>
            </div>
            <span className="text-white font-bold text-xl">Malt Cook</span>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/chefs"
              className="text-white/90 hover:text-white transition-colors"
            >
              Découvrir les chefs
            </Link>
            <Button variant="secondary" size="sm">
              Connexion
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Title */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Trouvez le chef parfait
              <br />
              <span className="text-white/90">pour vos événements</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Découvrez des chefs talentueux pour vos repas d'entreprise,
              événements privés et occasions spéciales.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-in">
            <Link href="/chefs">
              <Button size="lg" className="min-w-[200px]">
                <span className="mr-2">👨‍🍳</span>
                Découvrir les chefs
              </Button>
            </Link>
            <Button variant="secondary" size="lg" className="min-w-[200px]">
              <span className="mr-2">💼</span>
              Devenir chef partenaire
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                500+
              </div>
              <div className="text-white/80">Chefs certifiés</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                10k+
              </div>
              <div className="text-white/80">Événements réussis</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                4.9★
              </div>
              <div className="text-white/80">Note moyenne</div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="relative z-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi choisir Malt Cook ?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une expérience culinaire d'exception, de la sélection à la
              dégustation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Chefs d&apos;exception
              </h3>
              <p className="text-gray-600">
                Tous nos chefs sont sélectionnés pour leur talent, leur
                professionnalisme et leur passion.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Réservation simple
              </h3>
              <p className="text-gray-600">
                Trouvez et réservez votre chef en quelques clics. Process simple
                et transparent.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Garantie qualité
              </h3>
              <p className="text-gray-600">
                Assurance complète et satisfaction garantie pour tous vos
                événements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Prêt à vivre une expérience culinaire unique ?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Rejoignez des milliers de clients satisfaits qui font confiance à
            Malt Cook
          </p>
          <Link href="/chefs">
            <Button size="lg" className="animate-bounce-subtle">
              Commencer maintenant
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-lg">👨‍🍳</span>
            </div>
            <span className="font-bold text-lg">Malt Cook</span>
          </div>

          <div className="text-center text-gray-400">
            <p>&copy; 2024 Malt Cook. Tous droits réservés.</p>
            <p className="mt-2">
              La plateforme de référence pour trouver les meilleurs chefs
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
