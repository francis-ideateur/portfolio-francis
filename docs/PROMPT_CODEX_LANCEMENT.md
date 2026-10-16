# Prompt à transmettre à Codex — Construction du MVP

Tu es chargé de développer le site portfolio personnel et entrepreneurial de **MOUTIMA OKA Francis**.

## Dépôt cible

- URL : `https://github.com/francis-ideateur/portfolio-francis`
- Branche par défaut : `main`
- Dépôt public déjà créé ; préserver son historique Git.

## Objectif prioritaire

Livrer rapidement un **MVP de portfolio bilingue FR/EN**, professionnel, rapide, responsive, destiné à être partagé au forum de la **ZLECAf**. Développer d'abord une version réellement exécutable et maintenable. La publication sur Vercel suivra, après validation des contacts, données publiques et accès au compte d'hébergement.

## Étape préalable

1. Vérifie que tu as accès au dépôt cible ; ouvre/clône le dépôt dans ton environnement. Si l'environnement ne te donne pas accès à GitHub, explique clairement comment choisir le dépôt dans Codex et n'invente pas une connexion.
2. Lis `README.md` et `.gitignore` existants.
3. Intègre les fichiers de spécifications fournis (`AGENTS.md` à la racine ; `CAHIER_DES_CHARGES_MVP.md`, `IDENTITE_VISUELLE.md`, `CONTENU_INITIAL.md` dans `docs/`). Si ces fichiers ne sont pas encore dans le dépôt, demande-les ou travaille à partir des exigences détaillées ci-dessous en signalant les documents manquants. Ne prétends jamais les avoir lus sans les avoir reçus.

## Contraintes techniques

- Next.js App Router, TypeScript strict, Tailwind CSS.
- Structure de contenu statique/typée, sans backend, compte utilisateur, CMS ou base de données.
- Français et anglais partout, bascule FR/EN, URL `/fr` et `/en` recommandées.
- Composants réutilisables, SEO multilingue de base, Open Graph, favicon.
- Mettre en place les scripts de lint, typecheck et build dans `package.json`.
- Préparer le déploiement Vercel ; ne pas exposer de secrets.

## Identité visuelle validée

**Option B — Premium & International.** Couleurs : navy `#0B1426`, navy secondaire `#14243A`, or champagne `#C5A46D`, ivoire `#F7F5F0`, gris bleuté `#A8B3C5`. Typographies Manrope (titres) et Inter (corps) avec fallbacks. Site élégant, sobre, accessible, avec beaucoup d'air ; l'or en accent seulement. Motion discrète et non bloquante. Préférer le texte/graphisme à une photo personnelle inventée.

## Structure MVP

1. **Accueil :** identité, positionnement « Entrepreneur en construction, créateur de projets et apprenant permanent », accroche « Des idées aux solutions concrètes », signature « La réussite est possible à celui qui tente », CTA vers projets et contact.
2. **À propos :** histoire à huit ans (petites voitures en fil de fer vendues à d'autres enfants), esprit de résolution de problèmes, importance de l'apprentissage, extraits d'un manifeste personnel à affiner.
3. **Projets :** architecture de fiches et statuts réels. Initiatives connues : Between, Parcelle pour tous, CODAB. **Ne pas inventer leur statut ni publier leur contenu sans validation.** Placer les fiches non validées en brouillon (`published: false`).
4. **Parcours :** structure extensible ; pas de diplômes, expériences, titres ou certificats inventés.
5. **Collaborer / Contact :** message d'ouverture à des partenaires, entrepreneurs, mentors et organisations ; les véritables coordonnées seront ajoutées après confirmation.
6. **En ce moment / Réflexions :** facultatif pour le MVP ; ne pas créer de faux articles.

## Contenu initial FR/EN

### FR
- Hero : « MOUTIMA OKA Francis » / « Des idées aux solutions concrètes. »
- Présentation : « Je suis un entrepreneur en construction, passionné par la création de projets et l'apprentissage continu. Je pars des difficultés du quotidien pour imaginer des solutions utiles. Sur ce portfolio, je partage mon cheminement, mes tentatives et ce que j'apprends en construisant. »
- Manifeste (intro) : « Je n'ai pas encore l'histoire d'un homme qui a réussi. J'ai celle d'un homme qui essaie. »
- CTA : « Découvrir mes projets » / « Me contacter ».

### EN
- Hero: “MOUTIMA OKA Francis” / “Turning ideas into practical solutions.”
- Introduction: “I am an aspiring entrepreneur with a passion for building projects and learning continuously. Everyday challenges inspire me to explore useful solutions. Through this portfolio, I share my journey, my experiments, and what I learn along the way.”
- Manifesto opening: “I do not yet have the story of a man who has succeeded. I have the story of a man who is trying.”
- CTAs: “Explore my projects” / “Get in touch”.

## Interdictions

- Ne jamais inventer réalisations, revenus, investisseurs, diplômes, clients, récompenses, témoignages, photos personnelles ou partenariats.
- Ne pas afficher des liens `#` inertes ou des coordonnées non approuvées. Les contacts manquants doivent être configurables et clairement signalés comme points bloquants avant lancement.
- Ne pas prétendre qu'un domaine ou un déploiement existe avant vérification.
- Ne pas ajouter de fonctionnalités hors MVP qui retarderaient la mise en ligne.

## Critères de livraison

- Pages fonctionnelles en FR/EN, smartphone et desktop.
- Liens internes, navigation et changement de langue testés.
- Pages accessibles au clavier, contrastes lisibles, aucune erreur console bloquante.
- `npm run lint`, `npm run typecheck` et `npm run build` passent (ou signaler précisément les blocages).
- README actualisé avec installation, commandes, architecture, traduction, modification des contenus et déploiement Vercel.
- Liste séparée des données nécessitant validation avant publication.

## Résultat demandé

Effectue le développement dans le dépôt lié, avec des commits clairs (ou une branche/PR si ton environnement l'impose). Fournis ensuite :
1. Un récapitulatif de ce qui a été implémenté.
2. Les commandes/tests réellement exécutés et leurs résultats.
3. Les informations manquantes pour publication.
4. Les étapes exactes pour prévisualiser localement et publier sur Vercel.

**Priorité absolue :** rendre rapidement disponible une première version de qualité, fidèle à la réalité de Francis, puis l'améliorer après le forum.
