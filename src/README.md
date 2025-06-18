# Structure du projet

## Organisation des dossiers

### `/src/actions`

Contient toutes les actions par type de fonctionnalité :

- `chefs.actions.ts` - Actions liées aux chefs
- `[type].actions.ts` - Futures actions par type

### `/src/types`

Contient toutes les définitions de types par domaine :

- `chefs.types.ts` - Types liés aux chefs
- `[type].types.ts` - Futurs types par domaine

### `/src/components`

Organisation hiérarchique des composants :

#### `/src/components/ui`

Composants UI de base réutilisables :

- `Button.tsx` - Composant bouton avec variantes, tailles et état de chargement
- `Input.tsx` - Composant input avec gestion d'erreurs et texte d'aide
- `Badge.tsx` - Composant badge avec variantes et tailles
- `Card.tsx` - Composant carte avec sous-composants (Header, Content, Footer)
- `Avatar.tsx` - Composant avatar avec image ou initiales
- `Rating.tsx` - Composant d'affichage des notes avec étoiles
- `StatCard.tsx` - Composant de carte statistique avec variantes colorées
- `Breadcrumb.tsx` - Composant de fil d'ariane pour la navigation
- `Title.tsx` - Composant de titre avec niveaux et sous-titre

#### `/src/components/forms`

Composants de formulaires (vide pour l'instant, à utiliser selon les besoins)

#### `/src/components/complex`

Composants complexes organisés par domaine métier :

##### `/src/components/complex/chef`

Composants liés aux chefs (refactorisés avec les composants UI) :

- `ChefCard.tsx` - Carte de présentation d'un chef utilisant Card, Avatar, Rating, Badge
- `ChefsList.tsx` - Liste des chefs
- `ChefProfileHeader.tsx` - En-tête du profil chef utilisant Avatar et Rating
- `ChefProfileDetails.tsx` - Détails du profil chef utilisant Badge, StatCard et Button
- `ChefProfileNavigation.tsx` - Navigation du profil chef utilisant Breadcrumb

##### `/src/components/complex/navigation`

Composants de navigation et pagination :

- `Navigation.tsx` - Navigation principale
- `Pagination.tsx` - Composant de pagination

## Imports recommandés

```typescript
// Actions
import { getChefs, getChefBySlug } from "@/actions/chefs.actions";

// Types
import { ChefProfile, ChefResponse } from "@/types/chefs.types";

// Composants UI individuels
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardFooter } from "@/components/ui/Card";
import { Avatar } from "@/components/ui/Avatar";
import { Rating } from "@/components/ui/Rating";
import { Badge } from "@/components/ui/Badge";
import { StatCard } from "@/components/ui/StatCard";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Title } from "@/components/ui/Title";

// Composants complexes
import { ChefCard } from "@/components/complex/chef/ChefCard";
import { Pagination } from "@/components/complex/navigation/Pagination";
// etc...
```

## Composants UI disponibles

### Button

- Variantes : `primary`, `secondary`, `outline`, `ghost`
- Tailles : `sm`, `md`, `lg`
- État de chargement avec spinner

### Card

- Composant de base avec effet hover optionnel
- Sous-composants : `CardHeader`, `CardContent`, `CardFooter`

### Avatar

- Support image ou initiales
- Tailles : `sm`, `md`, `lg`, `xl`

### Rating

- Affichage d'étoiles avec demi-étoiles
- Tailles : `sm`, `md`, `lg`
- Option d'affichage de la valeur numérique

### Badge

- Variantes : `default`, `secondary`, `success`, `warning`, `danger`
- Tailles : `sm`, `md`

### StatCard

- Cartes pour statistiques avec icônes optionnelles
- Variantes colorées : `default`, `yellow`, `green`, `blue`, `red`

### Breadcrumb

- Navigation en fil d'ariane
- Support des icônes et séparateurs personnalisés

### Title

- Titres sémantiques (h1 à h6)
- Support des sous-titres

## Avantages de cette structure

1. **Séparation claire des responsabilités**
2. **Organisation par domaine métier**
3. **Composants UI réutilisables et cohérents**
4. **Facilité de maintenance**
5. **Imports explicites (pas de fichiers index.ts)**
6. **Design system unifié**
7. **Évolutivité du projet**

## Règles d'organisation

1. **Pas de fichiers `index.ts`** - Tous les imports sont explicites
2. **Utilisation de l'alias `@/`** pour tous les imports internes
3. **Organisation par domaine** dans les composants complexes
4. **Composants UI réutilisables** dans `/ui`
5. **Actions et types centralisés** par fonctionnalité
6. **Refactorisation avec les composants UI** pour la cohérence du design
