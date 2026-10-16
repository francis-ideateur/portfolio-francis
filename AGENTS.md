# AGENTS.md — Consignes pour Codex

Ce dépôt contient le portfolio personnel et entrepreneurial de **MOUTIMA OKA Francis**.

## Mission

Construire et maintenir un portfolio professionnel, premium, bilingue français/anglais, adapté au mobile, publiable rapidement pour le forum de la **ZLECAf**. Le site documente un entrepreneur **en construction** et ses projets, pas une carrière de succès inventés.

## Documentation de référence

1. `docs/CAHIER_DES_CHARGES_MVP.md` — fonctionnalités, périmètre, critères d'acceptation.
2. `docs/IDENTITE_VISUELLE.md` — direction graphique, couleurs et ton.
3. `docs/CONTENU_INITIAL.md` — textes de départ et règles de validation des données.

En cas de conflit, privilégier la confidentialité, la véracité et le MVP fonctionnel. Signaler toute ambiguïté plutôt que fabriquer des faits.

## Technologies et structure

- Utiliser **Next.js App Router**, **TypeScript** strict et **Tailwind CSS**.
- Conserver la structure simple, orientée contenu, sans base de données, CMS, authentification, paiement ni serveur d'email pour la V1.
- Préférer des composants réutilisables et des données éditoriales dans des fichiers séparés du JSX.
- Routes recommandées : `/fr` et `/en`, avec redirection de `/` vers `/fr` (ou architecture équivalente très simple).
- Prévoir des traductions structurées ; aucun texte essentiel ne doit manquer dans une langue.
- Gérer les projets via un tableau typé comportant `stage` et `published`, sans publication automatique de brouillons.

## UI / accessibilité

- Palette : navy `#0B1426`, navy secondaire `#14243A`, or `#C5A46D`, ivoire `#F7F5F0`.
- Polices : Manrope (titres) et Inter (corps), avec fallbacks système.
- Composants : en-tête accessible, hero, présentations, projets, parcours, collaboration/contact, pied de page.
- Design mobile-first ; aucun overflow horizontal à 320 px ; interactions clavier ; balises sémantiques ; focus visible.
- Contrastes WCAG AA, images avec `alt`, respect `prefers-reduced-motion`.
- Éviter les animations et dépendances inutiles ; performance et simplicité avant effets visuels.

## Intégrité des contenus — impératif

- Ne **jamais** inventer chiffres de traction, partenariats, investisseurs, emplois, formations, certificats, réalisations ou compétences.
- Ne pas qualifier Francis de PDG/fondateur d'une société légalement établie sans preuve.
- Ne pas publier de coordonnées personnelles sans approbation explicite.
- Ne pas divulguer les détails confidentiels de projets ou des dossiers non publics.
- Les initiatives **Between**, **Parcelle pour tous**, **CODAB** sont connues, mais leurs statuts, descriptions publiques et liens **nécessitent validation** ; elles peuvent rester exclues du rendu public jusqu'à validation.
- Éviter les faux témoignages, badges, métriques et appels à financement non autorisés.
- Ne pas intégrer d'assets issus de recherches avec droits incertains ni de photo synthétique assimilée à Francis.
- Ne jamais inclure de secrets ou clés dans Git ; maintenir les fichiers `.env*` non destinés au dépôt hors versionnement.

## Qualité, livraison et rapport

Avant de conclure :
1. Installer les dépendances puis exécuter les scripts disponibles : lint, vérification des types, build.
2. Corriger les erreurs, vérifier les traductions et les liens.
3. Documenter les commandes et la procédure de déploiement Vercel dans `README.md`.
4. Produire un compte rendu clair : fichiers modifiés, fonctionnalités, tests réalisés, limites, données à confirmer.
5. Ne pas prétendre que le site est « déployé » sans URL HTTPS publique vérifiée.

## Méthode de travail

- Commencer par inspecter le dépôt et les documents ; ne pas écraser le travail existant sans raison.
- Réaliser de petits changements cohérents ; privilégier une V1 publiable avant les améliorations non essentielles.
- Si des données manquent, utiliser des contenus factuels de base et/ou des brouillons non publiés ; demander validation avant le lancement.
- Ne pas bloquer la création du squelette technique pour des informations éditoriales manquantes.
