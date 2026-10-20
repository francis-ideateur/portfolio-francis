# Portfolio de MOUTIMA OKA Francis

Première version du portfolio personnel et entrepreneurial de Francis : présentation, manifeste, projets, parcours et collaboration, en français et en anglais. Direction « Premium & International », bleu nuit, or champagne et ivoire, avec Manrope et Inter hébergées par l'application.

**Version à valider localement. Aucune publication publique du site n'est autorisée à ce stade.** Francis a autorisé l'affichage de son email `francismoutima@gmail.com` et fourni les contenus publics FR/EN de **Venique** et **Between**, désormais présentés avec leurs statuts réels. Le 20 octobre 2026, il a fourni et approuvé le portrait officiel ainsi que les nouveaux textes de collaboration FR/EN. Parcelle pour tous et CODAB restent des brouillons ; les validations restantes sont dans [VALIDATION_AVANT_PUBLICATION.md](docs/VALIDATION_AVANT_PUBLICATION.md).

Le [compte rendu de livraison V1](docs/LIVRAISON_V1.md) détaille les tests exécutés, les vérifications navigateur et les avertissements connus.

## Lancer le site localement

Prérequis : Node.js 22 LTS (22.13 ou plus récent) et npm. Depuis la racine du dépôt :

```sh
npm ci
npm run dev
```

Ouvrir [http://127.0.0.1:3000](http://127.0.0.1:3000). La racine redirige vers `/fr` ; `/en` donne accès à la version anglaise. Les fiches sont accessibles depuis les projets ou directement sur `/fr/projects/venique`, `/en/projects/venique`, `/fr/projects/between` et `/en/projects/between`. Les commandes de développement et de prévisualisation écoutent uniquement l'ordinateur local. Arrêter le serveur avec `Ctrl+C`.

L'installation requiert un accès au registre npm. Aucune clé API ni variable d'environnement n'est nécessaire pour consulter la version locale.

## Commandes de vérification

```sh
npm run lint
npm run typecheck
npm test
npm run build
npm start
```

| Commande | Rôle |
| --- | --- |
| `npm ci` | Installer les versions fixées dans `package-lock.json` |
| `npm run dev` | Démarrer Next.js en développement |
| `npm run lint` | Vérifier le code avec ESLint, sans avertissement accepté |
| `npm run typecheck` | Générer les types Next.js et vérifier TypeScript sans émission |
| `npm test` | Exécuter les tests de contenu et de configuration avec le runner Node.js via `tsx` |
| `npm run build` | Compiler la version de production |
| `npm start` | Prévisualiser la compilation de production localement |

Exécuter `npm start` après un build réussi, avec le serveur de développement arrêté pour libérer le port 3000. Ces commandes sont une procédure reproductible ; leurs résultats effectifs doivent être consignés dans le compte rendu de livraison.

Compléter les contrôles automatiques par une vérification de `/fr`, `/en` et des fiches Venique et Between dans les deux langues à 320 px et sur ordinateur : chargement et cadrage du portrait, textes de collaboration, menu mobile, navigation clavier, focus visible, ancres, changement de langue, accès aux détails et retour au portfolio, absence de débordement et de lien inerte.

## Architecture

- **Next.js App Router**, React, TypeScript strict et Tailwind CSS.
- `src/app/` : routes, mise en page, styles et métadonnées.
- `src/components/` : composants de présentation et navigation réutilisables.
- `src/content/portfolio.ts` : textes FR/EN et données éditoriales typées.
- `src/content/venique.ts` : contenu public approuvé de Venique en français et en anglais.
- `src/content/between.ts` : contenu public approuvé de Between en français et en anglais.
- `public/images/francis-portrait.png` : portrait officiel fourni et approuvé par Francis.
- `src/lib/` : règles de configuration du site et du référencement.
- `docs/` : cahier des charges, identité visuelle, contenu source et validations.
- `vercel.json` : framework Next.js et désactivation des déploiements Git automatiques.

La V1 utilise des données locales au dépôt, sans base de données, CMS, authentification, paiement ou serveur d'email. Le portrait fourni par Francis est l'élément visuel principal du hero dans les deux langues ; le monogramme MOF reste dans l'en-tête et le pied de page.

L'image source « Avatar élégant en costume bleu nuit.png » est conservée à l'identique dans `public/images/francis-portrait.png` (PNG, 1254 × 1254 px, 2 126 274 octets). Aucune nouvelle génération ni retouche n'a été effectuée. Son import statique avec `next/image` permet de servir des tailles et formats optimisés selon l'écran, avec un cadrage responsive et un texte alternatif traduit.

## Modifier les contenus

Lire [AGENTS.md](AGENTS.md) et [CONTENU_INITIAL.md](docs/CONTENU_INITIAL.md) avant toute modification. Mettre à jour les deux langues dans `src/content/portfolio.ts` ; le typage commun aide à conserver les mêmes éléments en français et en anglais.

Les initiatives Parcelle pour tous et CODAB restent des brouillons : `published: false`, statut `stage: null` tant qu'il n'est pas confirmé. Pour publier une fiche, obtenir l'accord de Francis sur son titre, son statut réel, son résumé et sa problématique FR/EN, son périmètre public et ses éventuels liens. Renseigner seulement ces informations validées, puis activer `published`. Le filtre exclut les fiches sans statut reconnu ou sans traduction complète.

Venique est le premier projet dont le contenu public a été fourni par Francis : `published: true`, `stage: "development"`. Sa carte mène à une fiche détaillée dans chaque langue. Les textes de `src/content/venique.ts` décrivent une application de gestion scolaire en développement, destinée d'abord à la République du Congo, avec des modules Django/PostgreSQL et des importations Excel de classes et de matières testés localement. Ces informations proviennent de Francis ; les tests de ce dépôt vérifient le portfolio, pas l'application Venique. Aucun déploiement commercial, établissement utilisateur, partenariat ou pilote déjà réalisé n'est revendiqué. L'accès aux détails reste soumis aux règles de publication : conserver les deux traductions complètes et ne pas rendre un brouillon accessible par son URL.

Between dispose également de contenus publics fournis par Francis : `published: true`, `stage: "mvp"`, avec le statut exact « MVP fonctionnel testé localement — préparation du pilote » / “Locally tested functional MVP — preparing for pilot”. Les textes de `src/content/between.ts` présentent une plateforme CivicTech d'information locale, destinée d'abord à la République du Congo, avec publication par des organisations autorisées, consultation publique, pertinence selon les contextes déclarés, corrections et distribution contrôlée par email. Francis rapporte un MVP Django/PostgreSQL testé localement avec des données de démonstration. Le pilote avec des utilisateurs et organisations réels reste une prochaine étape ; aucune adoption publique ni distribution commerciale à grande échelle n'est revendiquée. Les tests de ce dépôt ne vérifient pas l'application Between et n'envoient aucun email. Aucun lien de démonstration n'a été fourni.

Les contacts du tableau `contacts` doivent être explicitement approuvés avant d'être affichés. Renseigner `id`, `kind` (`email`, `linkedin` ou `whatsapp`), `label.fr`, `label.en` et `href`, puis définir `approved: true` après accord. Les destinations acceptées sont un email `mailto:`, un profil HTTPS LinkedIn `/in/…` ou un lien HTTPS `wa.me/…` avec numéro international. Tant qu'aucun contact n'est approuvé, la section collaboration affiche un message informatif ; elle n'envoie aucun message et ne présente aucune coordonnée inventée.

Le contact actuellement approuvé est `francismoutima@gmail.com`, avec la destination `mailto:francismoutima@gmail.com` et des libellés FR/EN. Ce lien permet de préparer un email dans l'application de messagerie du visiteur ; le site n'envoie aucun message lui-même.

Les textes de collaboration fournis par Francis le 20 octobre 2026 sont conservés dans les deux langues : un titre, trois paragraphes et une invitation finale. Ils précisent les échanges recherchés autour de Venique et Between, sans annoncer de partenariat déjà conclu.

Le manifeste affiche uniquement l'introduction disponible. La version longue, les diplômes, dates, postes, réalisations, métriques et témoignages attendent leurs validations. Un brouillon masqué sur le site n'est pas confidentiel s'il est enregistré dans ce dépôt public : ne jamais y ajouter de notes sensibles ou de coordonnées privées.

## Référencement et variables

Copier au besoin `.env.example` vers `.env.local` et renseigner les valeurs approuvées. Les fichiers d'environnement locaux sont ignorés par Git ; ne jamais y substituer un secret dans un fichier versionné.

| Variable | Valeur initiale | Usage |
| --- | --- | --- |
| `SITE_URL` | Vide | Origine HTTPS réelle et validée du site public, sans chemin, paramètres ni fragment |
| `ALLOW_INDEXING` | `false` | Activer explicitement avec `true` uniquement pour le lancement public approuvé |

Par défaut, les pages demandent `noindex, nofollow`, `robots.txt` interdit l'exploration et le sitemap est vide. Aucune URL canonique de démonstration n'est inventée. L'indexation nécessite `ALLOW_INDEXING=true`, une origine HTTPS valide et, sur Vercel, l'environnement `Production`. Les métadonnées sont traduites et chaque langue dispose d'une image de partage Open Graph. Les changements de variables demandent une nouvelle compilation.

`noindex` et `robots.txt` orientent les moteurs de recherche : ils ne protègent pas l'accès aux pages. La validation actuelle se fait en local.

## Publier sur Vercel après accord explicite

**Procédure future uniquement : ne pas l'exécuter avant la validation de Francis.** `vercel.json` fixe `git.deploymentEnabled` à `false` pour empêcher les déploiements automatiques issus des branches Git. Cela ne bloque pas une publication manuelle depuis Vercel. [Documentation de cette option](https://vercel.com/docs/project-configuration/git-configuration).

1. Valider les contenus et au moins un contact fonctionnel à l'aide de la [liste de publication](docs/VALIDATION_AVANT_PUBLICATION.md), puis relancer lint, typage, tests et build. Faire relire et fusionner la pull request dans `main` après accord.
2. Après autorisation de publication, ouvrir **Add New… → Project** dans Vercel, connecter le compte GitHub autorisé et importer `francis-ideateur/portfolio-francis`. [Créer un projet Vercel](https://vercel.com/docs/projects/managing-projects).
3. Sélectionner **Next.js**, la racine du dépôt (`./`), Node.js **22.x**, `npm ci` pour l'installation et `npm run build` pour la compilation. Conserver la sortie détectée par Next.js. Vérifier que la branche de production est `main`. [Configuration du build](https://vercel.com/docs/builds/configure-a-build).
4. Pour la première publication autorisée, garder `ALLOW_INDEXING=false`. Si l'origine définitive n'est pas encore connue, laisser `SITE_URL` vide. Cliquer sur **Deploy** déclenche la mise en ligne ; ne le faire qu'après accord explicite.
5. Relever l'URL HTTPS réellement attribuée, ou configurer le domaine approuvé, puis vérifier le site et les contacts sur mobile et ordinateur. Dans **Settings → Environment Variables**, définir `SITE_URL` avec cette origine. Après validation du lancement, définir `ALLOW_INDEXING=true` pour **Production uniquement**, puis redéployer. Conserver `false` pour Preview et Development. [Variables Vercel par environnement](https://vercel.com/docs/environment-variables).
6. Vérifier `/fr`, `/en`, `/fr/projects/venique`, `/en/projects/venique`, `/fr/projects/between`, `/en/projects/between`, la redirection de `/`, les métadonnées traduites, les URLs canoniques, `robots.txt` et `sitemap.xml` sur l'URL effective. Préparer le QR code seulement après cette vérification.

Les déploiements Git peuvent rester désactivés pour une publication manuelle maîtrisée. Si Francis autorise ensuite les publications automatiques, remplacer la valeur `false` de `git.deploymentEnabled` par `true` dans `vercel.json`, faire relire ce changement et le fusionner. Les pushes sur la branche de production pourront alors publier automatiquement ; les autres branches pourront créer des prévisualisations. Ne pas activer cette option pendant la validation initiale.

## Documents de référence

- [Cahier des charges du MVP](docs/CAHIER_DES_CHARGES_MVP.md)
- [Identité visuelle](docs/IDENTITE_VISUELLE.md)
- [Contenu initial](docs/CONTENU_INITIAL.md)
- [Mission de lancement](docs/PROMPT_CODEX_LANCEMENT.md)
- [Données et contrôles à valider avant publication](docs/VALIDATION_AVANT_PUBLICATION.md)
