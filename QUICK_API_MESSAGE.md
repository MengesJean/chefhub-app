# 📨 Message Court pour l'Équipe API

## Version Email/Slack

```
🚨 Problème API - Endpoint /public/freelances/{slug}

Salut l'équipe API ! 👋

L'endpoint GET /public/freelances/{slug} ne retourne actuellement que :
• id, firstname, lastname, slug, created_at

Il nous manque les données critiques pour afficher les profils :
• ❌ profile_image_url
• ❌ locations (zones d'intervention)
• ❌ food_types (spécialités culinaires)
• ❌ average_rating & reviews_count
• ❌ gallery_images (portfolio)

Sans ça, les profils de chefs sont vides côté front 😕

Peux-tu enrichir cet endpoint avec les relations nécessaires ?
Ou faut-il créer un nouveau endpoint /freelances/{slug}/full ?

Merci ! 🙏

[Ton nom]
```

## Version Ticket Jira/GitHub

```
**Titre**: [API] Endpoint freelances/{slug} manque données du profil

**Description**:
L'endpoint GET /public/freelances/{slug} retourne seulement les champs de base mais pas les données nécessaires pour afficher un profil complet.

**Données manquantes**:
- profile_image_url
- locations[]
- food_types[]
- average_rating, reviews_count
- gallery_images[]

**Impact**: Profils de chefs vides sur l'interface utilisateur

**Priorité**: Haute - Bloquant pour le lancement

**Solution proposée**: Enrichir l'endpoint existant avec les relations
```

## Version Teams/Discord

```
Hey @backend-team ! 🔧

L'API /public/freelances/{slug} nous donne que le nom du chef mais aucune autre info (photo, localisation, spécialités, etc.)

Du coup les profils sont tout vides 😅

Vous pouvez enrichir l'endpoint ou on fait comment ?

Thx! 🚀
```
