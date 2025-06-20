# 🎨 Malt Cook Design System

## Vue d'ensemble

Malt Cook est une plateforme de mise en relation avec des chefs cuisiniers freelances qui allie **élégance fine-dining** et **simplicité tech**. Ce design system reflète notre positionnement premium tout en gardant une approche accessible et moderne.

---

## 🎯 Positionnement & Valeurs

- **Élégance** : Inspiration fine-dining avec des détails soignés
- **Confiance** : Professionnalisme et fiabilité
- **Simplicité** : UX intuitive et fluide
- **Gourmandise** : Éveil des sens et appétit visuel

---

## 🎨 Palette de Couleurs

### Couleurs Primaires

```css
/* Gradient Bleu - Couleur signature */
--primary-50: #eff6ff;
--primary-100: #dbeafe;
--primary-200: #bfdbfe;
--primary-300: #93c5fd;
--primary-400: #60a5fa;
--primary-500: #3b82f6;
--primary-600: #2563eb; /* Base */
--primary-700: #1d4ed8; /* Base gradient */
--primary-800: #1e40af;
--primary-900: #1e3a8a;
```

### Couleurs Neutres

```css
/* Grays - Base du système */
--gray-50: #f9fafb; /* Backgrounds légers */
--gray-100: #f3f4f6; /* Cards, inputs */
--gray-200: #e5e7eb; /* Borders */
--gray-300: #d1d5db; /* Borders hover */
--gray-400: #9ca3af; /* Placeholders */
--gray-500: #6b7280; /* Body text secondaire */
--gray-600: #4b5563; /* Body text */
--gray-700: #374151; /* Body text primary */
--gray-800: #1f2937; /* Headings */
--gray-900: #111827; /* Headings primary */
```

### Couleurs Sémantiques

```css
/* Status & Feedback */
--success: #22c55e;
--success-light: #dcfce7;
--error: #ef4444;
--error-light: #fef2f2;
--warning: #f59e0b;
--warning-light: #fefbeb;
```

### Gradients

```css
--gradient-primary: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
--gradient-hero: linear-gradient(135deg, #2563eb 0%, #1d4ed8 50%, #1e40af 100%);
```

---

## ✍️ Typographie

### Familles de Police

- **Corps & Interface** : `Geist Sans` (Google Fonts)
- **Code & Statistiques** : `Geist Mono` (Google Fonts)
- **Fallback** : `system-ui, -apple-system, sans-serif`

### Échelle Typographique

```css
/* Headings */
h1: 36px (2.25rem) / Font-weight: 700 / Line-height: 1.2
h2: 30px (1.875rem) / Font-weight: 600 / Line-height: 1.3
h3: 24px (1.5rem) / Font-weight: 600 / Line-height: 1.3
h4: 20px (1.25rem) / Font-weight: 600 / Line-height: 1.4

/* Body */
Body: 16px (1rem) / Font-weight: 400 / Line-height: 1.6
Small: 14px (0.875rem) / Font-weight: 400 / Line-height: 1.5
```

---

## 🔘 Composants

### Buttons

#### Variants

- **Primary** : Gradient bleu + ombre, pour CTA principaux
- **Secondary** : Fond gris clair + bordure, pour actions secondaires
- **Ghost** : Transparent + hover gris, pour navigation
- **Outline** : Bordure + fond blanc, pour confirmations

#### States & Micro-interactions

- **Hover** : `transform: translateY(-2px)` + `shadow-md`
- **Active** : `transform: translateY(0)`
- **Loading** : Spinner + texte "Chargement..." pulsé
- **Disabled** : Opacité 50% + cursor interdit

#### Tailles

```css
Small: height 32px, padding 12px 16px, text 14px
Medium: height 40px, padding 16px 20px, text 16px
Large: height 48px, padding 24px 32px, text 16px
```

### Inputs

#### Structure

- **Label** : Police medium, couleur gray-700
- **Focus** : Border primary-600 + ring primary-100
- **Error** : Border error + icône + message descriptif
- **Icons** : Position left/right, couleur gray-400

#### States

- **Default** : Border gray-300
- **Hover** : Border gray-400
- **Focus** : Border primary-600 + ring
- **Error** : Border error + ring error/20
- **Disabled** : Background gray-50 + texte gray-500

### Badges

#### Style

- **Forme** : Pills complètement arrondis (rounded-full)
- **Usage** : Spécialités culinaires, statuts, catégories
- **Variants** : Default, Primary, Secondary, Success, Warning, Error

### Cards

#### Structure

- **Radius** : 12px (rounded-lg)
- **Border** : 1px solid gray-200
- **Shadow** : shadow-sm (repos) → shadow-md (hover)
- **Hover** : `translateY(-4px)` + border-gray-300

#### Micro-interactions ChefCard

- **Avatar** : Ring color animation sur hover
- **Badges** : Color shift vers primary-200
- **Bouton "Voir"** : Fade-in + slide-up sur hover groupe

---

## 📐 Espacements & Grilles

### Design Tokens

```css
--spacing-xs: 4px;
--spacing-sm: 8px;
--spacing-md: 16px;
--spacing-lg: 24px;
--spacing-xl: 32px;
--spacing-2xl: 48px;
--spacing-3xl: 64px;
```

### Grid System

- **Mobile** : 1 colonne (< 640px)
- **Tablet** : 2-3 colonnes (≥ 768px)
- **Desktop** : 3-4 colonnes (≥ 1024px)
- **Large** : 4+ colonnes (≥ 1280px)

### Breakpoints

```css
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

---

## 🎭 Micro-interactions

### Durées d'Animation

```css
--duration-fast: 150ms;
--duration-normal: 200ms;
--duration-slow: 300ms;
--duration-slower: 500ms;
```

### Easing Functions

```css
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
```

### Animations Signature

- **fadeIn** : Opacity 0→1 + translateY 10px→0
- **slideIn** : Opacity 0→1 + translateX -10px→0
- **bounce-subtle** : Animation bounce adoucie
- **hover-lift** : translateY -2px + shadow augmentée

---

## 🎨 Iconographie

### Style

- **Type** : Semi-flat, style moderne et sobre
- **Univers** : Gastronomie (chef, ustensiles, ingrédients)
- **Taille** : 16px, 20px, 24px (multiples de 4)
- **Couleurs** : gray-400 (repos), primary-600 (actif)

### Exemples d'usage

- 👨‍🍳 Chef / Profil
- ⚡ Rapidité / Process
- 🏆 Excellence / Qualité
- 🛡️ Sécurité / Garantie
- 💼 Professionnel / B2B

---

## ♿ Accessibilité

### Contraste

- **AA** : Ratio 4.5:1 minimum (texte normal)
- **AAA** : Ratio 7:1 recommandé (titres)
- **Large text** : Ratio 3:1 minimum

### Focus Management

- **Ring** : 3px solid primary-600/20
- **Offset** : 2px
- **Visible** : Tous les éléments interactifs

### Semantic HTML

- Balises appropriées (button, nav, main, section)
- ARIA labels pour composants complexes
- Skip links pour navigation clavier

---

## 📱 Responsive Design

### Approche Mobile-First

1. **Mobile** : Design de base, menus burger
2. **Tablet** : Adaptation layout, navigation horizontale
3. **Desktop** : Pleine largeur, interactions avancées

### Composants Adaptatifs

- **Stepper** : Vertical (mobile) → Horizontal (desktop)
- **Navigation** : Burger (mobile) → Header complet
- **Cards** : 1 col → 2-4 cols selon breakpoint

---

## 🚀 Implémentation Technique

### Stack

- **Framework** : Next.js 15 + TypeScript
- **Styling** : Tailwind CSS v4
- **Fonts** : Google Fonts (Geist family)
- **Icons** : Lucide React (recommandé)

### Design Tokens (CSS Variables)

Tous les tokens sont définis dans `globals.css` et mappés vers Tailwind via `@theme inline`.

### Performance

- **Images** : Next/Image avec lazy loading
- **Fonts** : Preload + font-display: swap
- **Bundle** : Composants tree-shakable

---

## 📋 Checklist Qualité

### Design Consistency

- [ ] Couleurs respectent la palette définie
- [ ] Espacements utilisent les tokens (multiples of 4/8)
- [ ] Typographie suit l'échelle établie
- [ ] Radius cohérents (lg = 12px)

### Interactions

- [ ] Hover states sur tous les éléments cliquables
- [ ] Focus visible et accessible
- [ ] Loading states pour actions async
- [ ] Feedback visuel pour form validation

### Responsive

- [ ] Testé sur mobile, tablet, desktop
- [ ] Touch targets ≥ 44px sur mobile
- [ ] Débordements gérés (text truncation)
- [ ] Images optimisées par breakpoint

---

## 🎯 Prochaines Étapes

1. **Phase 1** ✅ : Tokens + composants atoms (Button, Input, Badge)
2. **Phase 2** 🚧 : Molécules (ChefCard, Stepper, Navigation)
3. **Phase 3** : Organismes (Hero, ChefGallery, Forms)
4. **Phase 4** : Templates (Pages complètes)
5. **Phase 5** : Testing + Documentation interactive

---

_Design System Malt Cook v1.0 - Créé pour une expérience culinaire d'exception_ 🍽️
