# Cahier des charges fonctionnel — Portfolio de MOUTIMA OKA Francis

**Version :** 0.1 — MVP avant le forum de la ZLECAf  
**Statut :** Proposition de cadrage, à valider par le porteur du projet  
**Responsable du développement :** Codex  
**Objectif :** publier rapidement un portfolio personnel et entrepreneurial de qualité, consultable sur mobile, puis l'améliorer en continu.

## 1. Vision et positionnement

Le site présente **MOUTIMA OKA Francis** en tant qu'entrepreneur en construction, créateur de projets et apprenant permanent. Il ne doit pas le présenter comme un dirigeant déjà couronné de succès ni inventer des entreprises, financements, partenaires, clients, métriques ou résultats.

Le site documente ce qu'il tente de construire, et pas seulement ce qu'il a accompli. Philosophie centrale : **« La réussite est possible à celui qui tente. »**

**Public prioritaire :** entrepreneurs, partenaires, investisseurs, organisations, entreprises, mentors et participants à des rencontres d'affaires dont le forum de la ZLECAf. **But du visiteur :** comprendre rapidement la personne, ses domaines d'intérêt, l'état réel des projets et les modalités de contact ou de collaboration.

**Territoire :** République du Congo comme point de départ, ouverture à l'Afrique et à l'international. Approche constructive et factuelle, sans exagération sur le Congo, l'Afrique ou les projets.

## 2. MVP : périmètre indispensable

### 2.1 Structure

Construire un site responsive avec un menu de navigation simple, au choix une page à sections ancrées ou plusieurs pages si cela n'alourdit pas le délai de livraison. Préférer la solution la plus simple et maintenable.

1. **Accueil** : nom et positionnement ; phrase fondatrice ; texte de présentation en 2 à 4 phrases ; boutons « Découvrir mes projets » et « Entrer en contact » ; aperçus des initiatives ; indication claire que le portfolio évolue.
2. **À propos** : histoire entrepreneuriale (fabrication et vente de petites voitures en fil de fer à l'âge de 8 ans) ; motivation pour résoudre des problèmes ; rapport à l'apprentissage, à l'échec et à la transmission ; extrait du manifeste et possibilité de lire sa version longue.
3. **Projets** : cartes pour initiatives attestées par le propriétaire, avec titre, résumé, problématique, statut explicite et niveau de détail public ; page/section détaillée uniquement si le contenu est disponible. Statuts à prévoir : idée, exploration, en conception, en développement, pilote, réalisé, en pause, abandonné/non abouti. Ne jamais choisir un statut par supposition.
4. **Parcours / apprentissage** : chronologie courte, expériences et compétences ; n'afficher diplômes, certificats, dates et institutions qu'après vérification par le propriétaire ; ne pas inventer de parcours.
5. **Collaborer / Contact** : proposition claire d'échanges (partenariat, échange entrepreneurial, mentorat, projet commun, opportunité professionnelle) ; liens validés par le propriétaire (email, LinkedIn, WhatsApp) ; éviter un formulaire qui exigerait un backend pour le MVP.

Les **Réflexions** peuvent être représentées au lancement par une section courte « En ce moment / Ce que j'apprends », ou être ajoutées après publication. Ne pas publier d'articles fictifs.

### 2.2 Bilinguisme

- Site intégralement utilisable en **français** et en **anglais**, avec commutateur de langue visible ; le français est la langue par défaut.
- Ne pas mélanger les langues dans une même version de page. Prévoir la traduction des menus, textes, métadonnées et boutons.
- Traductions naturelles et correctes, pas de faux contenu ajouté pour équilibrer les deux langues.

### 2.3 Fonctions transversales

- Navigation utilisable au clavier, contraste suffisant, alternative textuelle des images et balises sémantiques.
- Mise en page soignée sur smartphones, tablettes et ordinateurs ; navigation mobile testée.
- Chargement rapide : images optimisées, peu de dépendances et pas d'animations bloquantes.
- SEO de base : titre, description, métadonnées de partage (Open Graph), `robots.txt`, sitemap si pertinent, favicon.
- Liens externes vérifiés, pas de liens factices ; contact accessible en 1 à 2 clics.
- Rendre les informations personnelles faciles à modifier dans le code.
- **Confidentialité :** aucune idée sensible, donnée personnelle non approuvée, clé API ou mot de passe dans le dépôt public.

## 3. Direction de contenu

**Ton :** première personne, professionnel mais humain, ambitieux sans prétention, transparent sur les essais et les échecs. **Motto :** « La réussite est possible à celui qui tente. »

**Positionnement provisoire à valider :** « Entrepreneur, créateur de projets et apprenant permanent. »

**Manifeste :** première version déjà rédigée au cours de la préparation. Ne pas le réinventer ni en extraire de prétendus accomplissements ; intégrer une version validée par le propriétaire lors du développement.

**Initiatives connues à examiner avant publication :** Between ; Parcelle pour tous ; CODAB (« Le Congo d'abord »). Leur nature, statut, degré de confidentialité et contenu public restent **à confirmer**. Ne pas les afficher comme des sociétés déjà créées ou des produits déjà lancés.

**Visuels :** photo personnelle uniquement fournie ou approuvée par le propriétaire ; prévoir un substitut graphique élégant en son absence. Ne pas générer de faux logos de partenaires ou de photos de réalisations.

## 4. Choix techniques proposés (à valider)

- Next.js (App Router), TypeScript, Tailwind CSS.
- Pages statiques/compilées autant que possible, sans base de données ni interface d'administration pour le MVP.
- Traductions dans des fichiers structurés simples.
- Versionnement GitHub, déploiement Vercel.
- README (installation, développement, build, déploiement), `.gitignore` adapté et `AGENTS.md` avec règles pour Codex.
- Eviter les bibliothèques et services externes inutiles à la version 1.

## 5. Critères d'acceptation du MVP

- [ ] Le site se lance localement avec des commandes indiquées dans le README.
- [ ] La compilation de production s'exécute sans erreur.
- [ ] L'accueil répond clairement en moins de quelques secondes de lecture à « Qui est Francis ? », « Que construit-il ? » et « Comment le contacter ? ».
- [ ] La navigation fonctionne sur téléphone et ordinateur sans débordement horizontal.
- [ ] Français et anglais fonctionnent sur toutes les sections publiées.
- [ ] Les projets affichent des statuts véridiques ; les contenus confidentiels et faits non validés restent exclus.
- [ ] Au moins un contact public est opérationnel après confirmation.
- [ ] Les métadonnées de recherche et de partage sont configurées.
- [ ] Le dépôt GitHub ne contient aucun secret ni donnée privée non validée.
- [ ] Une URL publique HTTPS est disponible et testée sur mobile.
- [ ] Un QR code correspondant à l'URL publique pourra être préparé pour le forum.

## 6. Hors périmètre de la première publication

Tableau de bord administrateur, authentification, base de données, CMS, blog complet, newsletter, paiement, statistiques marketing avancées, formulaires complexes, comptes utilisateurs, animations lourdes, preuve de réalisations non disponibles. Les ajouter uniquement si un besoin réel se confirme.

## 7. Éléments à confirmer avant publication

1. **Identité visuelle :** orientation esthétique, palette, photographie et éventuel logo.
2. **Projets publics :** liste exacte, statut, descriptions autorisées et détails à garder privés.
3. **Contacts publics :** adresse email, lien LinkedIn et éventuellement WhatsApp (numéro déjà utilisé publiquement sur des supports, à reconfirmer pour le site).
4. **Parcours :** expériences, compétences, certificats et dates vérifiées.
5. **URL finale :** nom de domaine éventuel ; lien Vercel temporaire acceptable pour le forum.
6. **Date du forum / échéance :** à confirmer pour ajuster le découpage de livraison.
7. **Repository :** vérifier dans GitHub l'URL et le nom exact de la branche avant de brancher Codex (l'interface peut traduire les noms).

## 8. Étapes de livraison

**Lot 1 :** projet initial, design responsive, navigation, accueil, à propos, projets prudents, contact et bilinguisme.  
**Lot 2 :** contenu validé, tests, SEO, déploiement HTTPS et QR code.  
**Lot 3 :** enrichissement des études de cas, réflexions, chronologies, espace « En ce moment » et outil de mise à jour des contenus si nécessaire.

---

**Principe de décision :** privilégier un site publié rapidement, fidèle à la réalité et facile à améliorer, plutôt qu'un site complexe dont la mise en ligne est retardée.
