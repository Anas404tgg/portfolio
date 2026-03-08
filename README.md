# Portfolio — Anas Boulif

> **Live:** [https://portfolio-anas-boulif.vercel.app](https://portfolio-anas-boulif.vercel.app)

Portfolio personnel moderne construit avec **Astro** et déployé sur **Vercel**. Thème sombre professionnel avec glassmorphism, animations fluides et design responsive.

## Structure du projet

```text
/
├── public/                  # Fichiers statiques (favicon, images)
├── src/
│   ├── components/          # Composants Astro réutilisables
│   │   ├── Header.astro     # Navigation sticky glassmorphism
│   │   ├── Hero.astro       # Section héro plein écran
│   │   ├── About.astro      # Cartes numérotées "À propos"
│   │   ├── Skills.astro     # Grille compétences techniques & soft
│   │   ├── Education.astro  # Timeline parcours académique
│   │   ├── Projects.astro   # Grille de projets avec tags
│   │   ├── Contact.astro    # Formulaire + infos de contact
│   │   ├── Footer.astro     # Pied de page 3 colonnes
│   │   └── BackToTop.astro  # Bouton retour en haut
│   ├── data/
│   │   └── portfolio.ts     # 📝 FICHIER UNIQUE DE DONNÉES
│   ├── layouts/
│   │   └── BaseLayout.astro # Layout principal (HTML, styles globaux)
│   └── pages/
│       └── index.astro      # Page d'entrée assemblant les sections
├── astro.config.mjs         # Configuration Astro + adaptateur Vercel
├── vercel.json              # Alias Vercel personnalisé
└── package.json
```

## Modifier le contenu

Toutes les informations du portfolio se trouvent dans un **seul fichier** :

```
src/data/portfolio.ts
```

Modifiez ce fichier pour mettre à jour :
- Informations personnelles (nom, titre, email, photo…)
- Statistiques clés
- Paragraphes "À propos"
- Compétences techniques et soft skills
- Parcours académique
- Expériences professionnelles (optionnel)
- Publications (optionnel)
- Certifications (optionnel)
- Projets
- Liens sociaux

Les sections sans données sont **automatiquement masquées** du site et de la navigation.

## Commandes

| Commande              | Action                                              |
| :-------------------- | :-------------------------------------------------- |
| `npm install`         | Installe les dépendances                            |
| `npm run dev`         | Lance le serveur de dev à `localhost:4321`           |
| `npm run build`       | Build le site statique dans `./dist/`               |
| `npm run preview`     | Prévisualise le build localement                    |
| `vercel --yes --prod` | Déploie en production sur Vercel                    |

## Technologies

- [Astro](https://astro.build) — Framework web statique
- [TypeScript](https://www.typescriptlang.org) — Typage fort
- [Vercel](https://vercel.com) — Hébergement et déploiement
- Icônes [Lucide](https://lucide.dev) — SVG inline (pas de dépendance)

## Licence

MIT
