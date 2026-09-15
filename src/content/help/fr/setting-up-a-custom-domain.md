---
title: "Configurer un nom de domaine personnalisé pour votre page de réservation"
description: "Comment associer votre propre nom de domaine à votre boutique en ligne Ownia, y compris les enregistrements CNAME et DNS que vous devrez ajouter."
category: "growth"
articleId: "setting-up-a-custom-domain"
order: 1
updatedDate: 2026-09-15
locale: "fr"
---

Un nom de domaine personnalisé — `book.yourproperty.com` au lieu d'une URL Ownia générique — permet à votre page de réservation de ressembler à votre propre site web, tant au niveau de l'apparence que de l'expérience utilisateur. Il est donc recommandé de le faire avant de commencer à y rediriger du trafic depuis des publicités, les réseaux sociaux ou les moteurs de recherche.

## Où associer un nom de domaine

Accédez à **Boutique en ligne** → **Paramètres de la boutique** et recherchez la section **Domaine personnalisé**.

## Choisir un nom de domaine

Saisissez un sous-domaine tel que `www.yourdomain.com` ou `book.votredomaine.com`. Un domaine racine nu (simplement `votredomaine.com`, sans rien devant) n'est pas pris en charge — vous devrez utiliser un sous-domaine, ce qui constitue de toute façon généralement le choix le plus sûr et le plus flexible pour une configuration DNS.

Cliquez sur **Configurer**. Ownia générera les enregistrements DNS dont vous avez besoin.

## Ajout des enregistrements DNS

Un enregistrement **CNAME** (une paire nom/valeur) s'affichera, ainsi que, dans la plupart des cas, un enregistrement **TXT** servant à vérifier que vous êtes bien le propriétaire du domaine. Connectez-vous à l'interface où vous gérez le DNS de votre domaine — il s'agit généralement de votre registraire de domaine (GoDaddy, Namecheap, etc.) ou d'un fournisseur de DNS comme Cloudflare — et ajoutez les deux enregistrements exactement comme indiqué.

Voici quelques astuces pour gagner du temps :

- La propagation des modifications apportées au DNS peut prendre entre quelques minutes et quelques heures, selon votre fournisseur d'accès.
- Ne supprimez ni ne modifiez les enregistrements DNS existants qui ne concernent pas votre domaine ; contentez-vous d'ajouter les nouveaux enregistrements fournis par Ownia.
- Vérifiez bien que vous avez copié exactement la valeur de destination du CNAME ; un caractère en trop ou une faute de frappe est la raison la plus courante pour laquelle la vérification échoue.

## Vérification du nom de domaine

Une fois les enregistrements ajoutés, revenez à la section « Domaine personnalisé » et cliquez sur **Vérifiez dès maintenant**. Si la propagation du DNS n'est pas encore terminée, patientez un peu puis vérifiez à nouveau — il n'est pas nécessaire de reconfigurer quoi que ce soit entre-temps.

Une fois vérifiée, votre boutique en ligne est accessible via votre propre nom de domaine, et c'est celui-ci que vous devrez utiliser à l'avenir dans toutes vos actions marketing, publicités ou annonces que vous gérez — y compris les [liens de réservation directe que vous partagez au lieu de rediriger les voyageurs via Airbnb ou Booking.com](/fr/taking-direct-bookings-without-commission/).
