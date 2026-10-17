# Validation avant publication

Cette liste distingue les informations encore à approuver des contrôles techniques à refaire avant le lancement. La V1 peut être exécutée et relue localement sans ces contenus secondaires. Aucune case non cochée ne constitue une validation et aucun déploiement public n'est autorisé par ce document.

## Données à faire approuver par Francis

| Élément | État de la V1 | Décision attendue |
| --- | --- | --- |
| Contact public | Email `francismoutima@gmail.com` explicitement autorisé par Francis, affiché en FR/EN | Vérifier le lien `mailto:francismoutima@gmail.com` avant lancement ; tout autre contact nécessite une approbation |
| Between | Brouillon, non publié, statut inconnu | Confirmer le statut réel, les textes FR/EN, les détails publics et les liens éventuels |
| Parcelle pour tous | Brouillon, non publié, statut inconnu | Confirmer le statut réel, les textes FR/EN, les détails publics et les liens éventuels |
| CODAB | Brouillon, non publié, statut inconnu | Confirmer la mission publique et le statut ; aucun titre de société constituée n'est présumé |
| Présentation FR/EN | Base issue des documents fournis | Relire le positionnement, les textes, le récit à huit ans et les traductions |
| Manifeste | Introduction disponible uniquement | Approuver la traduction de l'introduction ; fournir et approuver le texte long avant son ajout |
| Parcours | Informations factuelles de base | Fournir et valider les dates, institutions, diplômes, expériences ou réalisations avant leur ajout |
| Portrait et signe personnel | Monogramme temporaire, pas de portrait | Fournir une photo autorisée si souhaité ; confirmer les droits et le texte alternatif |
| Adresse du site | Aucune URL publique présumée | Choisir le domaine ou accepter l'adresse Vercel effectivement attribuée |
| Forum et QR code | Aucune participation ni date inventée | Confirmer l'échéance utile ; produire le QR code après vérification de l'URL finale |

Les projets et le manifeste long peuvent rester non publiés. Le canal de contact approuvé est l'email `francismoutima@gmail.com`. Les contrôles navigateur portent sur l'affichage et la destination du lien, sans envoi de message ni validation de sa réception.

## Accord éditorial et publication

- [ ] Francis a relu les versions française et anglaise et approuvé les informations rendues publiques.
- [x] Francis a autorisé la publication de l'email `francismoutima@gmail.com` comme contact public.
- [x] Le lien e-mail autorisé est affiché en FR/EN avec la destination exacte, vérifiée dans le navigateur local ; aucun email de test n'a été envoyé.
- [ ] Chaque projet publié a un statut confirmé et un contenu public approuvé ; les autres restent exclus.
- [ ] Les éventuels nouveaux éléments de parcours sont justifiés.
- [ ] Le dépôt et les ressources publiques ne contiennent aucune donnée privée ou confidentielle. `published: false` ne rend pas le code d'un dépôt public privé.
- [ ] Francis a donné l'accord explicite pour publier cette version sur Vercel.

## Contrôles techniques avant la mise en ligne

- [ ] `npm ci`, `npm run lint`, `npm run typecheck`, `npm test` et `npm run build` terminent sans erreur ; les résultats sont consignés.
- [ ] La compilation de production est consultable avec `npm start`.
- [ ] `/` mène à `/fr` ; `/fr` et `/en` présentent toutes les sections dans la langue attendue.
- [ ] Menu mobile, changement de langue, liens d'ancrage et contacts fonctionnent.
- [ ] Aucun débordement horizontal à 320 px ; lecture confortable sur smartphone et ordinateur.
- [ ] Parcours clavier, focus visible, contrastes et préférence de mouvement réduit sont vérifiés.
- [ ] Aucun lien factice, erreur console bloquante ou texte secondaire essentiel non traduit.
- [ ] Les champs `SITE_URL` et `ALLOW_INDEXING` sont configurés selon l'environnement ; les prévisualisations restent sans indexation.
- [ ] Le maintien ou l'activation ultérieure des déploiements Git automatiques fait l'objet d'une décision explicite.

## Après la publication autorisée

- [ ] L'URL HTTPS effective, les routes FR/EN et les liens de contact sont vérifiés.
- [ ] Les métadonnées, liens canoniques, partage social, `robots.txt` et sitemap utilisent le domaine approuvé.
- [ ] Le site est testé sur un smartphone réel.
- [ ] L'URL finale vérifiée est utilisée pour le QR code et les supports du forum.

La réussite des tests locaux ne prouve ni l'existence d'une URL publique ni la validation des contenus. La procédure Vercel est décrite dans le [README](../README.md).
