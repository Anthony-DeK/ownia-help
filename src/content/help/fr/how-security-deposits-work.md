---
title: "Comment fonctionnent les dépôts de garantie ?"
description: "Comment la fonctionnalité de caution d'Ownia autorise et débite la carte d'un client, et comment l'activer pour un établissement."
category: "payments"
articleId: "how-security-deposits-work"
order: 2
updatedDate: 2026-09-15
locale: "fr"
---

Les cautions vous permettent de vous prémunir contre les dégâts ou les frais de ménage supplémentaires sans, dans la plupart des cas, demander au client de payer quoi que ce soit à l'avance.

## Activer un dépôt

Les dépôts de garantie sont configurés pour chaque bien immobilier. Rendez-vous dans **Boutique en ligne** → **Paiements** ; vous trouverez la fiche **Caution** juste en dessous de Stripe Connect. Elle reste désactivée tant que votre [compte Stripe n'est pas actif](/fr/connecting-stripe-to-accept-payments/), car les dépôts sont prélevés via le même compte connecté que les paiements habituels.

Définissez un **Montant du dépôt**. Laissez ce champ vide pour désactiver complètement les acomptes pour ce bien immobilier.

## Comment fonctionne concrètement cette prise ?

Ownia ne prélève pas le montant de l'acompte au moment de la réservation. À la place :

1. La caution est **autorisée** (bloquée) sur la carte de crédit du client **un jour avant le départ**, et non au moment de la réservation.
2. Si aucune transaction n'est détectée, la réserve est simplement levée : le client n'est jamais débité et le montant redevient disponible sur sa carte.
3. Si vous devez prélever tout ou partie de la caution en raison de dommages ou d'un problème survenu pendant le séjour, le montant correspondant est prélevé sur cette même retenue.

Comme la réservation est bloquée juste avant le départ et non au moment de la réservation, les clients ne voient pas apparaître sur leur carte un montant important en attente pendant toute la durée de leur séjour, mais seulement pendant le dernier jour environ.

## Ce que cela signifie pour les clients

Votre confirmation de réservation et tout message destiné aux clients doivent indiquer clairement qu’une préautorisation sera effectuée. Il arrive parfois que des clients nous contactent pour s’enquérir d’une préautorisation inconnue sur leur carte à l’approche de la date de départ ; le fait de savoir qu’il s’agit de la préautorisation d’Ownia/Stripe permet d’y répondre rapidement, sans que cela ne devienne un casse-tête pour le service client.

## Paramètres associés

Les cautions ne sont pas liées à votre [politique d'annulation](/fr/setting-your-cancellation-policy/) : la caution sert à couvrir les éventuels dommages survenus pendant le séjour, tandis que la politique d'annulation régit les remboursements en cas d'annulation par le client avant son arrivée.
