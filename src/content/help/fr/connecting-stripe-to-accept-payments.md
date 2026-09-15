---
title: "Configurer Stripe pour accepter les paiements en ligne"
description: "Comment associer un compte Stripe à votre boutique en ligne Ownia afin que les visiteurs puissent régler leurs réservations directes, et à quoi s'attendre lors de la configuration."
category: "payments"
articleId: "connecting-stripe-to-accept-payments"
order: 1
updatedDate: 2026-09-15
locale: "fr"
---

Ownia ne conserve pas votre argent. Chaque réservation est traitée par Stripe, et les fonds sont versés directement sur votre propre compte bancaire — Ownia prélève automatiquement sa commission forfaitaire de 5 % au moment du paiement, sans facture distincte à régler.

Pour accepter une réservation directe payante, vous devez d'abord associer un compte Stripe à votre boutique en ligne.

## Où connecter Stripe

Accédez à **Boutique en ligne** dans la barre latérale, puis ouvrez l'onglet **Paiements**. Vous verrez alors une fiche **Stripe Connect** :

- Si rien n'est encore connecté, le message « Accepter les paiements en ligne » s'affiche, accompagné d'un bouton **Connecter Stripe**.
- Si vous avez commencé la configuration mais que vous ne l'avez pas terminée, le message « Terminez votre configuration Stripe » s'affiche, accompagné d'un bouton **Reprendre la configuration**.
- Une fois que tout a été vérifié, le message « Stripe connecté » s'affiche, accompagné d'un lien vers **Gérer les paiements sur Stripe**.

## Choisissez votre pays

Cliquez sur **Connecter Stripe** : vous serez alors invité à confirmer votre pays avant de poursuivre. Ce choix est important, car Stripe s'en sert pour déterminer les exigences en matière d'identité, de banque et de fiscalité qui s'appliquent à votre compte — **cette information ne pourra pas être modifiée ultérieurement** ; veillez donc à sélectionner le pays dans lequel vous exercez effectivement votre activité et où vous disposez d'un compte bancaire, et non pas simplement celui où se trouvent vos biens immobiliers.

Une fois ces informations confirmées, cliquez sur **Continuer vers Stripe** pour être redirigé vers le processus d'inscription de Stripe, où vous devrez saisir les informations relatives à votre entreprise ou à votre personne, vos coordonnées bancaires ainsi que les documents nécessaires à la vérification de votre identité.

## Configuration de finition

La configuration de Stripe peut prendre quelques minutes si vous avez vos coordonnées bancaires et votre pièce d'identité à portée de main. Une fois cette étape terminée, vous serez redirigé vers Ownia. Si Stripe a besoin d'informations supplémentaires (ce qui est courant et normal — cela fait partie des contrôles de conformité propres à Stripe), l'onglet « Paiements » affichera « Reprendre la configuration » jusqu'à ce que tout soit vérifié.

Vous pouvez à tout moment consulter le statut de la transaction, le calendrier des versements et l'historique des transactions directement depuis Stripe en cliquant sur le lien **Gérer les paiements sur Stripe**.

## Une fois connecté

Lorsque Stripe est activé, votre page de réservation peut accepter des paiements et la fonctionnalité [d'acompte de garantie](/fr/how-security-deposits-work/) est débloquée dans le même onglet « Paiements ». Les voyageurs paient la totalité du montant (ou selon vos [conditions d'annulation et de caution](/fr/setting-your-cancellation-policy/)) au moment de la réservation, et les versements sont crédités sur votre compte bancaire selon le calendrier de paiement habituel de Stripe pour votre pays.
