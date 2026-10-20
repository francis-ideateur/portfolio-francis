# Livraison V1 — 17 octobre 2026

Branche : `feat/portfolio-v1`. Version développée et vérifiée localement ; aucun déploiement public effectué.

## Fonctionnalités livrées

- Next.js App Router, TypeScript strict, Tailwind CSS ; `/` redirige vers `/fr`, version anglaise sur `/en`.
- Identité navy, or champagne et ivoire ; Manrope et Inter hébergées localement ; monogramme graphique temporaire, sans photographie inventée.
- Accueil, présentation personnelle, introduction du manifeste, domaines explorés, parcours et collaboration.
- Navigation responsive, menu mobile défilable sur écran court, fermeture sur Échap/clic extérieur/départ du focus, lien d'évitement et focus visible.
- Bascule FR/EN conservant l'ancre, textes et métadonnées traduits, favicon et images Open Graph PNG.
- Données éditoriales séparées du JSX. Les trois initiatives non validées restent `published: false`, `stage: null` et absentes des pages. Contacts configurables ; l'email autorisé lors de la reprise est détaillé ci-dessous.
- Préparation Vercel, sans déploiement : déploiements Git automatiques désactivés, indexation désactivée par défaut, aucune URL canonique de production inventée.

## Vérifications initiales exécutées

Environnement : Windows, Node.js 24.19.0, npm 11.21.1, Next.js 16.4.2, ESLint 10.13.0. npm a été exécuté au moyen du lanceur pnpm fourni par l'environnement Codex ; les scripts du dépôt sont les commandes usuelles ci-dessous.

| Commande | Résultat |
| --- | --- |
| `npm install` | Dépendances installées ; `package-lock.json` versionné |
| `npm run lint` | Réussi, aucune erreur ni avertissement de lint |
| `npm run typecheck` | Réussi, génération des types Next.js et TypeScript strict |
| `npm test` | 13 tests réussis |
| `npm run build` | Réussi, pages FR/EN précompilées et route PNG Open Graph fonctionnelle |
| `npm ci --dry-run --ignore-scripts --no-audit --no-fund` | Résolution du verrou réussie ; ceci n'est pas une réinstallation complète |
| `npm audit --omit=dev` | Aucune vulnérabilité signalée dans les dépendances de production au moment du contrôle |
| `git diff --check` | Réussi |

Les tests unitaires couvrent les traductions, les statuts, l'exclusion des brouillons, les destinations de contact, l'approbation des coordonnées, les origines canoniques et les règles d'indexation.

Tests navigateur effectués avec Playwright et Microsoft Edge, sur la compilation de production locale :

- FR et EN aux largeurs 320, 390, 768 et 1440 px : aucun débordement horizontal.
- Menu ouvert/fermé, Échap et restitution du focus, fermeture en quittant le header au clavier, liens d'ancre et changement de langue : réussis.
- Écran paysage 568 × 320 px : menu défilable et lien de collaboration accessible.
- Langue du document HTML mise à jour après bascule, lien d'évitement vers le contenu, redirection racine et réponses 404 : réussis.
- Images de partage PNG, ressources des pages et ancres vérifiées ; projets brouillons et contacts non approuvés absents du rendu.
- Aucune erreur JavaScript bloquante ; les requêtes volontaires vers des pages absentes produisent les erreurs 404 attendues.
- Captures desktop/mobile inspectées visuellement. Contrastes des principales paires texte/fond vérifiés ; opacité des numéros de section retirée pour conserver leur contraste sur fond sombre.

Les captures et le script de contrôle navigateur propres à cet environnement restent dans les dossiers locaux ignorés `artifacts/` et `.tools/`. Aucun test sur appareil physique ni audit exhaustif avec lecteur d'écran n'est revendiqué.

## Suivi — ajout du contact autorisé

Francis a explicitement autorisé l'affichage de `francismoutima@gmail.com`. Le lien `mailto:francismoutima@gmail.com` est ajouté à la section collaboration avec des libellés français et anglais. Les autres contacts restent absents, et les projets non validés restent masqués.

Les 13 tests consignés ci-dessus correspondent à la livraison initiale. Après cette modification, la réinstallation complète via `npm ci`, le lint, le typage, les **14 tests** et la compilation de production ont réussi. Les exécutables locaux des scripts ont été lancés directement avec Node pour les contrôles de cette reprise ; les versions du verrou npm n'ont pas changé.

Les contrôles Edge/Playwright ont été relancés en FR/EN à 320, 390, 768 et 1440 px ainsi qu'en paysage 568 × 320 px : aucun débordement, navigation et changement de langue fonctionnels, un seul contact affiché avec la destination exacte `mailto:francismoutima@gmail.com`. Le message d'attente des coordonnées n'apparaît plus et les projets brouillons restent absents. Les captures du contact ont été inspectées. Ces contrôles vérifient l'affichage et la destination du lien, sans envoi d'email ni validation de sa réception.

Cette mise à jour ne publie pas le site et n'autorise aucun déploiement public.

## Suivi — Venique — 18 octobre 2026

Francis a fourni les contenus publics français et anglais de **Venique**, projet EdTech de gestion scolaire destiné d'abord à la République du Congo. Venique est désormais présenté dans les projets avec `published: true`, `stage: "development"` et le statut « En développement — modules fonctionnels testés localement » / “In development — functional modules tested locally”. Sa carte mène à une fiche détaillée sur `/fr/projects/venique` ou `/en/projects/venique`.

Les textes décrivent le problème, la solution envisagée, l'avancement réel, l'impact recherché et les perspectives. Les modules Django/PostgreSQL et les importations Excel des classes et des matières testés localement sont des faits rapportés par Francis. Aucun test de l'application Venique n'a été exécuté dans le cadre de cette modification du portfolio. Aucun déploiement commercial, usage généralisé, partenariat ou pilote déjà réalisé n'est ajouté au récit.

Les données publiques de Venique sont isolées dans `src/content/venique.ts`. L'accès aux détails dépend de la publication du projet. Between, Parcelle pour tous et CODAB restent des brouillons exclus du rendu. L'email autorisé reste le seul contact public. Le README et la liste de validation tiennent compte des nouvelles pages et des informations approuvées.

**Vérifications de cette reprise : réussies.** Lint sans erreur ni avertissement, génération des types Next.js et vérification TypeScript, **21 tests unitaires** et compilation de production ont réussi. Les exécutables locaux des scripts ont été lancés avec Node ; aucune dépendance ni version du verrou npm n'a changé. Les nouvelles pages FR/EN de Venique sont précompilées. Les avertissements déjà documentés concernant `metadataBase` et `globalNotFound` restent présents.

Les contrôles Edge/Playwright ont été relancés sur les accueils et les fiches Venique à 320, 390, 768 et 1440 px : aucun débordement horizontal. La carte, les six rubriques, le statut exact, le sommaire, les ancres, la bascule FR/EN conservant la fiche et l'ancre, le retour aux projets, l'accès au contact et le lien d'évitement clavier fonctionnent. Les contrôles du menu en paysage 568 × 320 px passent également. Les images Open Graph propres à Venique répondent en PNG et les captures ordinateur/mobile ont été inspectées. Les routes de brouillons, projet inconnu, langue inconnue et image de brouillon renvoient 404. L'indexation reste désactivée et le sitemap vide par défaut. Aucune erreur JavaScript bloquante ni ressource manquante inattendue n'a été relevée.

Une revue indépendante du diff n'a identifié aucun défaut actionnable. Ces vérifications portent sur le portfolio local ; elles ne remplacent pas la relecture éditoriale de Francis ni un contrôle sur smartphone physique. Les captures et résultats restent dans `artifacts/`, ignoré par Git.

Cette mise à jour prépare une relecture locale et n'autorise aucun déploiement public ni fusion.

## Suivi — Between — 19 octobre 2026

Francis a fourni les contenus publics français et anglais de **Between**, projet CivicTech d'information locale destiné d'abord à la République du Congo. Between est désormais présenté aux côtés de Venique avec `published: true`, `stage: "mvp"` et le statut exact « MVP fonctionnel testé localement — préparation du pilote » / “Locally tested functional MVP — preparing for pilot”. Sa carte mène à `/fr/projects/between` ou `/en/projects/between`. Le stade `mvp` distingue le produit fonctionnel testé localement d'un pilote encore à préparer.

Les six rubriques reprennent la présentation, le problème, la solution développée, l'avancement réel, l'impact recherché et les perspectives. Le périmètre décrit comprend la publication par des organisations autorisées, la consultation publique, la pertinence selon des contextes déclarés, les corrections et la distribution contrôlée par email. Le développement Django/PostgreSQL et les tests locaux avec des données de démonstration sont des faits rapportés par Francis. Aucun test de l'application Between ni envoi d'email n'a été exécuté dans le cadre de cette mise à jour du portfolio. Aucune adoption publique, distribution commerciale à grande échelle ou expérimentation déjà menée avec des utilisateurs et organisations réels n'est revendiquée.

Les données publiques de Between sont isolées dans `src/content/between.ts`. Venique reste affiché ; Parcelle pour tous et CODAB restent les deux brouillons exclus du rendu et des routes de détail. Aucun lien de démonstration n'est inventé. Le contact approuvé reste `francismoutima@gmail.com`. Le README et la liste de validation tiennent compte des deux projets et des nouvelles routes.

**Vérifications de cette reprise : réussies.** Le lint (sans erreur ni avertissement), la génération des types Next.js, TypeScript strict, les **26 tests unitaires** et la compilation de production ont réussi. Les exécutables des scripts ont été lancés directement avec Node. Aucune dépendance ni version du verrou npm n'a changé. Les deux fiches Between sont précompilées, comme celles de Venique. Les avertissements connus `metadataBase` et `globalNotFound` restent présents.

Les contrôles Edge/Playwright ont réussi sur les accueils, Venique et Between en FR/EN à 320, 390, 768 et 1440 px, sans débordement horizontal. Les deux cartes, les six rubriques de chaque fiche, les statuts exacts, le sommaire, les ancres, la bascule de langue conservant fiche et ancre, le retour aux projets, l'accès au contact, le lien d'évitement et le clavier fonctionnent. Le menu d'accueil a également été vérifié en paysage 568 × 320 px. Les images de partage propres à Between répondent en PNG ; les captures de la carte, de la fiche ordinateur/mobile et de l'image Open Graph ont été inspectées.

Parcelle pour tous et CODAB restent absents du rendu et leurs routes renvoient 404, comme les projets inconnus et les images de brouillons. Le sitemap reste vide par défaut ; un test vérifie qu'une activation explicite du référencement ne retient que les six pages approuvées (accueils, Venique et Between dans les deux langues). Aucune erreur JavaScript bloquante ni ressource manquante inattendue n'a été relevée. Une revue indépendante du diff n'a identifié aucun défaut concret. Les résultats et captures sont conservés localement dans `artifacts/`, ignoré par Git ; aucun test sur appareil physique n'est revendiqué.

Cette mise à jour prépare une relecture locale et n'autorise aucun déploiement public ni fusion.

## Suivi — Portrait et collaboration — 20 octobre 2026

Francis a fourni l'image « Avatar élégant en costume bleu nuit.png » et explicitement demandé son utilisation comme photo officielle du portfolio. Le fichier est conservé à l'identique dans `public/images/francis-portrait.png` (PNG, 1254 × 1254 px, 2 126 274 octets), sans nouvelle génération ni retouche. Le hero FR/EN utilise ce portrait comme présence visuelle principale, avec un texte alternatif traduit. Le monogramme MOF reste dans l'en-tête et le pied de page. L'import statique avec `next/image` permet la génération de tailles et formats adaptés à l'écran ; le cadrage est responsive.

La section collaboration reprend les nouveaux textes fournis par Francis dans les deux langues : « Les idées avancent aussi par la rencontre. » / “Ideas also grow through connection.”, trois paragraphes et une invitation finale. Les textes explicitent les échanges recherchés avec des entrepreneurs, établissements, organisations et partenaires autour de l'éducation numérique, de l'information locale et de l'expérimentation. Le contact approuvé reste `francismoutima@gmail.com`. Aucun partenariat existant n'est ajouté au récit.

**Vérifications de cette reprise : réussies.** Le lint (sans erreur ni avertissement), la génération des types Next.js, TypeScript strict, les **26 tests unitaires** et la compilation de production ont réussi. Les exécutables des scripts ont été lancés directement avec Node. Aucune dépendance ni version du verrou npm n'a changé. Les avertissements connus `metadataBase` et `globalNotFound` restent présents.

Les contrôles Edge/Playwright du portrait et de la collaboration passent en FR/EN à 320, 390, 680, 681, 768 et 1440 px : aucun débordement horizontal, portrait carré sans déformation, position à côté du texte sur ordinateur et entre l'identité et l'introduction sur mobile. Les trois paragraphes, les titres et les invitations sont strictement comparés aux textes fournis ; le contact conserve sa destination exacte. Le texte alternatif change avec la langue, le portrait est préchargé et ses dimensions sont réservées. Les images optimisées répondent en WebP : **22 684 octets à 640 px** pour le mobile et **53 718 octets à 1080 px** pour l'ordinateur, mesurés avec un ratio de pixels de 2. L'original de 2 126 274 octets reste inchangé (égalité SHA-256 vérifiée).

Les contrôles généraux de navigation, ancres, menu mobile, Échap, focus clavier, bascule de langue et lien d'évitement passent, y compris le menu paysage 568 × 320 px. Les deux projets approuvés restent visibles, les brouillons absents, l'indexation désactivée et les images Open Graph disponibles. Aucune erreur JavaScript ni ressource manquante inattendue sur les accueils ; les routes volontairement absentes renvoient les réponses 404 attendues.

Nouvelles captures produites et inspectées dans `artifacts/` : `fr-home-mobile.png` (viewport 390 × 900 px), `fr-home-desktop.png`, les équivalents EN et les captures `fr-collaboration-*` / `en-collaboration-*`. Les contrôles sont conservés dans `portrait-results.json` et `browser-results.json` du même dossier local ignoré. Une revue indépendante n'a identifié aucun défaut concret. Ces vérifications dans un navigateur de bureau avec différentes tailles d'écran ne constituent pas un test sur smartphone physique ni une mesure complète des Core Web Vitals.

L'autorisation d'intégrer le portrait et les textes est acquise. La relecture de leur rendu final précède la décision de publication ; aucun déploiement public ni fusion n'est autorisé par cette mise à jour.

## Avertissements et limites connus

- Sans `SITE_URL`, Next.js signale l'absence de `metadataBase` et utilise localhost pour résoudre les images de partage locales. Configurer l'origine HTTPS réelle avant la publication, puis reconstruire. Le site reste `noindex` tant que le lancement n'est pas autorisé.
- Next.js signale l'utilisation de `experimental.globalNotFound`, employé pour la page 404 globale avec le layout multilingue.
- npm signale des plages de peer dependencies encore limitées à ESLint 9 dans certains plugins inclus par Next.js. Installation, résolution du verrou et lint fonctionnent avec ESLint 10 ; [Next.js documente cette compatibilité](https://nextjs.org/docs/app/api-reference/config/eslint).
- L'audit complet signale cinq entrées de sévérité haute dans une même chaîne de dépendances de développement : plugin ESLint Next → fast-glob → micromatch → braces. L'alerte concerne un déni de service par motifs profondément imbriqués ; [l'avis amont n'indique pas encore de version corrigée](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm). Aucun downgrade automatique du framework n'a été appliqué. Cette chaîne n'appartient pas aux dépendances de production.

## Avant publication

Valider ensemble l'apparence et les textes FR/EN, dont le hero avec portrait, la collaboration et le rendu des fiches Venique et Between fournis par Francis. Vérifier le lien vers l'email déjà approuvé avant lancement. Confirmer les descriptions et statuts de Parcelle pour tous et CODAB avant de les afficher ; ces deux brouillons peuvent rester masqués pendant ce travail. Valider tout nouveau fait de parcours, la version longue du manifeste, toute autre photo et l'URL finale.

La procédure locale et les étapes futures Vercel sont dans [README.md](../README.md). La liste de validation est dans [VALIDATION_AVANT_PUBLICATION.md](VALIDATION_AVANT_PUBLICATION.md). Aucune publication, fusion ou activation des déploiements automatiques n'a été effectuée.
