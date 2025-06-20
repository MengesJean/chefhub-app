# 🚨 Rapport de Bug API - Données Chef Incomplètes

## 📋 Résumé du Problème

L'endpoint `GET /public/freelances/{slug}` ne retourne pas toutes les données nécessaires pour afficher correctement le profil d'un chef sur l'interface utilisateur.

## 🔍 Données Actuellement Retournées

```json
{
  "id": 32,
  "firstname": "Adrienne",
  "lastname": "Cousin",
  "slug": "adrienne-cousin",
  "created_at": "2025-06-20T20:10:40.000000Z"
}
```

## ❌ Données Manquantes Critiques

Pour afficher correctement un profil de chef, nous avons besoin des champs suivants :

### 🖼️ Image de Profil

```json
{
  "profile_image_url": "string|null"
}
```

### 🗺️ Localisations / Zones d'Intervention

```json
{
  "locations": [
    {
      "city_name": "string",
      "latitude": "number",
      "longitude": "number"
    }
  ]
}
```

### 🍽️ Spécialités Culinaires

```json
{
  "food_types": [
    {
      "id": "string",
      "name": "string"
    }
  ]
}
```

### ⭐ Évaluations et Avis

```json
{
  "average_rating": "number|null",
  "reviews_count": "number|null"
}
```

### 📸 Galerie d'Images

```json
{
  "gallery_images": [
    {
      "id": "number",
      "image_urls": {
        "thumbnail": "string",
        "small": "string",
        "medium": "string",
        "large": "string",
        "xlarge": "string",
        "original": "string"
      },
      "display_title": "string",
      "order": "number",
      "is_featured": "boolean"
    }
  ],
  "gallery_images_count": "number|null"
}
```

## 🎯 Structure de Réponse Attendue

```json
{
  "id": 32,
  "firstname": "Adrienne",
  "lastname": "Cousin",
  "slug": "adrienne-cousin",
  "profile_image_url": "https://example.com/images/adrienne.jpg",
  "created_at": "2025-06-20T20:10:40.000000Z",

  "locations": [
    {
      "city_name": "Paris",
      "latitude": 48.8566,
      "longitude": 2.3522
    }
  ],

  "food_types": [
    {
      "id": "1",
      "name": "Cuisine française"
    },
    {
      "id": "2",
      "name": "Pâtisserie"
    }
  ],

  "average_rating": 4.5,
  "reviews_count": 23,

  "gallery_images": [
    {
      "id": 1,
      "image_urls": {
        "thumbnail": "https://example.com/thumb.jpg",
        "small": "https://example.com/small.jpg",
        "medium": "https://example.com/medium.jpg",
        "large": "https://example.com/large.jpg",
        "xlarge": "https://example.com/xlarge.jpg",
        "original": "https://example.com/original.jpg"
      },
      "display_title": "Tarte aux fruits",
      "order": 1,
      "is_featured": true
    }
  ],
  "gallery_images_count": 5
}
```

## 🔄 Endpoints Concernés

- **Principal**: `GET /public/freelances/{slug}` - Profil individuel
- **Secondaire**: `GET /public/freelances?page={page}` - Liste (à vérifier si même problème)

## 💡 Solutions Proposées

### Option 1 : Enrichir l'endpoint existant

Modifier `GET /public/freelances/{slug}` pour inclure toutes les relations nécessaires.

### Option 2 : Créer un endpoint dédié

Créer `GET /public/freelances/{slug}/full` qui retourne le profil complet.

### Option 3 : Endpoints séparés

- `GET /public/freelances/{slug}/locations`
- `GET /public/freelances/{slug}/specialties`
- `GET /public/freelances/{slug}/gallery`
- `GET /public/freelances/{slug}/reviews`

## 🚨 Impact sur l'UX

Sans ces données, l'interface affiche :

- ❌ Profil vide (pas de photo, localisation, spécialités)
- ❌ Pas de galerie de réalisations
- ❌ Aucune indication de qualité (notes/avis)
- ❌ Expérience utilisateur dégradée

## ⏱️ Urgence

**Priorité Haute** - Ces données sont essentielles pour le lancement de la plateforme.

## 🔧 Workaround Temporaire

En attendant, nous utilisons des données de démonstration pour les tests d'interface, mais cela doit être résolu avant la mise en production.

---

**Contact** : [Votre nom/équipe]  
**Date** : [Date du jour]  
**Version API** : [Si applicable]
