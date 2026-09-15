---
title: "Synchronisation des calendriers d'Airbnb, de Booking.com et d'autres services via iCal"
description: "Comment exporter votre agenda Ownia vers d'autres plateformes et importer des agendas externes, pour éviter tout double emploi."
category: "calendar"
articleId: "syncing-calendars-via-ical"
order: 1
updatedDate: 2026-09-15
locale: "fr"
---

Si vous publiez une annonce sur Airbnb, Booking.com ou tout autre site en plus de votre boutique en ligne Ownia, il est indispensable que ces calendriers communiquent entre eux. Sinon, vous risquez une double réservation : un voyageur pourrait réserver les mêmes dates sur deux plateformes en même temps.

Ownia gère cela via iCal, le format standard de flux de calendrier pris en charge par toutes les principales plateformes de réservation. Les disponibilités sont synchronisées dans les deux sens ; en revanche, les tarifs, les détails du logement et les informations sur les clients ne sont pas synchronisés via iCal et sont gérés séparément sur chaque plateforme.

## Où trouver la synchronisation du calendrier

Ouvrez la propriété que vous souhaitez synchroniser à partir de **Propriétés**, puis accédez à sa section **iCal Sync**. Vous verrez deux parties : **Exporter votre agenda** et **Importer des calendriers externes**.

## Exporter votre calendrier Ownia

Sous **Exporter votre agenda**, copiez le lien unique vers le calendrier généré par Ownia pour ce bien. Collez-le dans les paramètres d'importation du calendrier de la plateforme externe :

- **Airbnb** : Disponibilité → Importer un calendrier
- **Booking.com** : Calendrier → iCal

Cela permet à Airbnb ou à Booking.com de bloquer toutes les dates déjà réservées via votre boutique en ligne Ownia.

## Importation de calendriers externes

Sous **Importer des calendriers externes**, ajoutez l'URL du flux iCal de chaque plateforme sur laquelle vous êtes référencé (Airbnb et Booking.com fournissent tous deux leur propre lien de calendrier exportable dans leurs paramètres de calendrier). Ownia bloque automatiquement ces dates sur votre boutique en ligne.

Vous pouvez ajouter plusieurs calendriers externes par établissement — par exemple, vos flux Airbnb et Booking.com — et Ownia les regroupera.

## À quelle fréquence la synchronisation a-t-elle lieu ?

Les calendriers importés sont actualisés automatiquement toutes les 2 heures environ. Si vous venez d'effectuer une réservation sur une autre plateforme et que vous souhaitez que votre calendrier Ownia l'affiche immédiatement, il n'est généralement pas nécessaire de lancer manuellement une « synchronisation immédiate » : prévoyez simplement un petit délai et évitez de confirmer manuellement une demande pour le jour même sur une deuxième plateforme tant que la synchronisation n'a pas eu le temps de s'effectuer.

## Remarque sur ce qu'iCal ne fait pas

La synchronisation via iCal concerne uniquement les disponibilités. Elle ne transfère pas le prix par nuit, la description de votre établissement ni les coordonnées des clients d'une plateforme à l'autre : chaque plateforme nécessite toujours la configuration directe de ses propres tarifs et du contenu de son annonce.
