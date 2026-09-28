---
title: "Faire référencer votre site de réservation sur Google grâce à Search Console"
description: "Qu'est-ce que Google Search Console ? Comment vérifier votre domaine à l'aide d'un enregistrement DNS, soumettre votre plan du site et demander à Google d'indexer votre site de réservation."
category: "growth"
articleId: "indexing-your-booking-site-on-google"
order: 3
updatedDate: 2026-09-28
locale: "fr"
---

Les voyageurs qui recherchent le nom de votre logement ou une location dans votre région devraient tomber sur votre propre site de réservation, et pas seulement sur votre annonce Airbnb ou Booking.com. Google Search Console est un outil gratuit qui vous permet d’indiquer à Google l’existence de votre site et d’analyser ses performances dans les résultats de recherche.

Ce guide nécessite environ 10 minutes de travail, puis quelques jours d'attente de la part de Google.

## Qu'est-ce que Google Search Console ?

Google Search Console est un service gratuit proposé par Google aux propriétaires de sites web. Une fois que vous avez prouvé que vous êtes bien le propriétaire de votre domaine, il vous permet de :

- Indiquer à Google quelles sont les pages de votre site, à l'aide d'un plan du site
- Demander à Google d'indexer une page immédiatement, plutôt que d'attendre qu'elle soit découverte
- Découvrir quelles recherches font apparaître votre site, à quelle fréquence et combien de personnes cliquent dessus
- Recevoir une alerte lorsque Google ne parvient pas à lire l'une de vos pages

Search Console n'influe pas en soi sur votre classement. Elle permet simplement à Google de répertorier vos pages et vous indique ce qui fonctionne.

## Avant de commencer

Il vous faut deux choses :

- **Un domaine personnalisé actif sur votre site de réservation Ownia.** Search Console ne fonctionne que pour un domaine dont vous êtes propriétaire. Si vous n'en avez pas encore configuré, suivez d'abord les instructions de [Configuration d'un domaine personnalisé pour votre page de réservation](/fr/setting-up-a-custom-domain/), puis attendez que son statut indique **Actif**.
- **Un compte Google.** N'importe quel compte Gmail ou Google Workspace convient.

Vous devrez également vous connecter à votre **gestionnaire DNS** : l'endroit où vous avez ajouté l'enregistrement CNAME pour votre domaine personnalisé. Il s'agit généralement de votre registraire de domaine (GoDaddy, Namecheap, OVHcloud, IONOS…) ou d'un fournisseur DNS tel que Cloudflare.

## Étape 1 : Ajoutez votre nom de domaine à Search Console

1. Rendez-vous sur [search.google.com/search-console](https://search.google.com/search-console) et connectez-vous.
2. Ouvrez le sélecteur de propriétés en haut à gauche et cliquez sur **Ajouter une propriété**.
3. Sélectionnez l'option **Domaine** (à gauche), et non « Préfixe d'URL ».
4. Saisissez votre **domaine racine**, sans `www.`, `book.` ni `https://`. Si votre site de réservation se trouve à l'adresse `www.villa-example.com`, saisissez `villa-example.com`.
5. Cliquez sur **Continuer**.

Une propriété de domaine couvre tous les sous-domaines ainsi que les protocoles `http` et `https` ; elle inclut donc votre site de réservation, quel que soit le sous-domaine utilisé.

Les menus de Search Console s'affichent dans la langue de votre compte Google ; par conséquent, les libellés exacts peuvent différer légèrement de ceux indiqués dans ce guide.

## Étape 2 : Copiez l'enregistrement de vérification

Google affiche désormais un **enregistrement TXT** commençant par `google-site-verification=`, suivi d'un long code. Cliquez sur **Copier**. Laissez cette fenêtre ouverte : vous y reviendrez pour cliquer sur **Vérifier**.

## Étape 3 : Ajoutez l'enregistrement TXT dans votre gestionnaire DNS

Dans votre gestionnaire DNS, ouvrez les paramètres DNS de votre domaine et ajoutez un nouvel enregistrement :

- **Type :** TXT
- **Nom / Hôte :** `@` (cela désigne le domaine racine lui-même ; certains fournisseurs préfèrent que ce champ reste vide)
- **Valeur / Contenu :** le texte complet `google-site-verification=…` que vous avez copié
- **TTL :** conserver la valeur par défaut

Où trouver cette option chez les principaux fournisseurs (les noms des menus peuvent varier légèrement au fil du temps) :

- **Cloudflare :** sélectionnez votre domaine, puis **DNS** → **Enregistrements** → **Ajouter un enregistrement**.
- **GoDaddy :** **Mes produits** → votre domaine → **DNS** → **Ajouter un nouvel enregistrement**.
- **Namecheap :** **Liste des noms de domaine** → **Gérer** à côté de votre nom de domaine → **DNS avancé** → **Ajouter un nouvel enregistrement** → **Enregistrement TXT**.
- **OVHcloud :** **Web Cloud** → **Noms de domaine** → votre domaine → **Zone DNS** → **Ajouter une entrée** → **TXT**. Ne remplissez pas le champ « sous-domaine ».
- **IONOS :** **Domaines et SSL** → votre domaine → **DNS** → **Ajouter un enregistrement** → **TXT**.
- **Squarespace Domains** (anciennement Google Domains) : votre domaine → **DNS** → **Paramètres DNS** → **Enregistrements personnalisés** → **Ajouter un enregistrement**.

Quelques conseils pour éviter les problèmes :

- **Ajoutez-les, ne les remplacez pas.** Si votre domaine comporte déjà des enregistrements TXT (pour la messagerie électronique, par exemple), conservez-les. Un domaine peut comporter plusieurs enregistrements TXT.
- **Ne modifiez pas l'enregistrement CNAME** que vous avez ajouté pour Ownia. Votre site de réservation en dépend.
- **Conservez l'enregistrement TXT après la vérification.** Google le vérifie à nouveau de temps à autre, et le supprimer annulera la vérification de votre domaine.

## Étape 4 : Vérifiez

Revenez à Search Console et cliquez sur **Vérifier**.

Les modifications du DNS prennent généralement quelques minutes, mais peuvent prendre jusqu'à 48 heures selon votre fournisseur d'accès. Si Google indique qu'il n'a pas pu trouver l'enregistrement, patientez un moment, puis cliquez à nouveau sur **Vérifier**. Vous n'avez pas besoin d'ajouter l'enregistrement deux fois.

## Étape 5 : Envoyez votre plan du site

Ownia génère automatiquement un plan du site pour votre site de réservation : une liste de vos pages que Google peut lire. Il est toujours disponible à l'adresse suivante :

`https://your-booking-domain/sitemap.xml`

Par exemple, `https://www.villa-example.com/sitemap.xml`. Vous trouverez également l'adresse exacte dans Ownia sous **Boutique en ligne** → **Promouvoir**, dans la fiche **Faites référencer votre site de réservation par Google**.

Dans la Search Console :

1. Cliquez sur **Plans du site** dans le menu de gauche.
2. Collez l'adresse complète du plan du site, y compris `https://`.
3. Cliquez sur **Envoyer**.

Le statut devrait passer à **Succès** d'ici quelques minutes à quelques heures. Le plan du site se met à jour automatiquement chaque fois que vous ajoutez ou supprimez un logement ; vous n'avez donc besoin de le soumettre qu'une seule fois.

## Étape 6 : Demandez l'indexation de vos pages principales

Pour accélérer le processus pour un tout nouveau site :

1. Collez l'adresse de la page d'accueil de votre site de réservation dans la barre de recherche située en haut de Search Console (cela ouvre la fonctionnalité **Inspection d'URL**).
2. Cliquez sur **Demander l'indexation**.
3. Répétez l'opération pour chaque page de logement si vous en avez plusieurs.

Vous n'avez pas besoin de répéter cette opération à chaque fois que vous modifiez une description : Google repasse de lui-même.

## À quoi s'attendre

- **Premières pages sur Google :** généralement quelques jours, parfois quelques semaines pour un nouveau domaine.
- **Données de recherche** dans le rapport **Performance** : elles apparaissent quelques jours après que votre site commence à apparaître dans les résultats.
- La mention **« Exclue par la balise 'noindex' »** dans le rapport **Pages** est normale pour certaines pages. Ownia exclut délibérément certaines pages de Google, telles que les livres d'accueil de vos voyageurs (qui contiennent des codes Wi-Fi) et les pages de confirmation de réservation.

## Foire aux questions

### Je n'ai pas de nom de domaine personnalisé. Puis-je quand même utiliser Search Console ?

Pas pour votre site de réservation lui-même : Search Console exige que vous prouviez que vous êtes bien le propriétaire du domaine, et `app.ownia.co` appartient à Ownia. Votre page de réservation Ownia figure toujours dans le plan du site d'Ownia, ce qui permet à Google de la trouver, mais vous ne recevrez pas les rapports de Search Console et ne pourrez pas demander son indexation. La configuration d'un domaine personnalisé est la solution pour bénéficier des deux.

### La vérification échoue sans cesse. Que dois-je vérifier ?

- Le type d'enregistrement est **TXT**, et non CNAME.
- Le nom est « @ » (ou vide), et non « www » ou « book ».
- La valeur correspond au texte complet, y compris « google-site-verification= », sans espaces ni guillemets supplémentaires ajoutés lors du copier-coller.
- Vous avez ajouté l'enregistrement auprès du fournisseur qui gère effectivement votre DNS. Si votre domaine utilise les serveurs de noms de Cloudflare, par exemple, les enregistrements ajoutés auprès de votre registraire sont ignorés.

### Est-ce que cela permettra à mon site d'apparaître en première position sur Google ?

Aucun outil ne peut garantir cela. Search Console permet de s'assurer que Google répertorie vos pages et vous montre comment les visiteurs vous trouvent. Pour améliorer votre référencement, il est important d'avoir un nom de propriété clair, des descriptions et des photos de qualité, ainsi que des liens vers votre site depuis vos annonces, vos réseaux sociaux et les sites web locaux.
