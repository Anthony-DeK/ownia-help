---
title: "Einrichten einer benutzerdefinierten Domain für Ihre Buchungsseite"
description: "So verknüpfen Sie Ihre eigene Domain mit Ihrem Ownia-Webshop, einschließlich der CNAME- und DNS-Einträge, die Sie hinzufügen müssen."
category: "growth"
articleId: "setting-up-a-custom-domain"
order: 1
updatedDate: 2026-09-15
locale: "de"
---

Eine eigene Domain – `book.yourproperty.com` anstelle einer generischen Ownia-URL – sorgt dafür, dass Ihre Buchungsseite wie Ihre eigene Website aussieht und sich auch so anfühlt. Es lohnt sich, dies zu tun, bevor Sie über Anzeigen, soziale Medien oder Suchmaschinen Besucher auf die Seite leiten.

## Wo kann man eine Domain verknüpfen?

Gehen Sie zu **Webshop** → **Shop-Einstellungen** und suchen Sie den Abschnitt **Benutzerdefinierte Domain**.

## Auswahl einer Domain

Geben Sie eine Subdomain ein, z. B. `www.yourdomain.com` oder `book.yourdomain.com`. Eine reine Root-Domain (also nur `yourdomain.com` ohne Vorangestelltes) wird nicht unterstützt – Sie benötigen eine Subdomain, was bei einer DNS-Konfiguration ohnehin in der Regel die sicherere und flexiblere Wahl ist.

Klicken Sie auf **Konfigurieren**. Ownia generiert die benötigten DNS-Einträge.

## Hinzufügen der DNS-Einträge

Ihnen wird ein **CNAME**-Eintrag (ein Name-Wert-Paar) und in den meisten Fällen ein **TXT**-Eintrag angezeigt, mit dem überprüft wird, ob Sie tatsächlich der Eigentümer der Domain sind. Melden Sie sich bei dem Anbieter an, bei dem Sie das DNS für Ihre Domain verwalten – in der Regel ist dies Ihr Domain-Registrar (GoDaddy, Namecheap usw.) oder ein DNS-Anbieter wie Cloudflare – und fügen Sie beide Einträge genau wie angegeben hinzu.

Ein paar Tipps, mit denen man hier Zeit sparen kann:

- Je nach Anbieter kann es zwischen einigen Minuten und einigen Stunden dauern, bis DNS-Änderungen wirksam werden.
- Löschen oder bearbeiten Sie keine bestehenden DNS-Einträge Ihrer Domain, die nicht damit in Zusammenhang stehen – fügen Sie lediglich die neuen Einträge hinzu, die Ownia Ihnen zur Verfügung stellt.
- Vergewissern Sie sich noch einmal, dass Sie den Zielwert des CNAME-Eintrags exakt kopiert haben; ein zusätzliches Zeichen am Ende oder ein Tippfehler sind die häufigsten Gründe dafür, dass die Verifizierung fehlschlägt.

## Überprüfung der Domain

Sobald Sie die Einträge hinzugefügt haben, kehren Sie zum Abschnitt „Benutzerdefinierte Domain“ zurück und klicken Sie auf **Jetzt prüfen**. Falls die DNS-Änderungen noch nicht vollständig übernommen wurden, warten Sie einen Moment und überprüfen Sie es erneut – in der Zwischenzeit müssen Sie keine weiteren Einstellungen vornehmen.

Nach der Verifizierung ist Ihr Webshop unter Ihrer eigenen Domain erreichbar, und diese sollten Sie künftig in allen von Ihnen kontrollierten Marketingmaßnahmen, Anzeigen oder Einträgen verwenden – einschließlich der [Direktbuchungslinks, die Sie weitergeben, anstatt Gäste über Airbnb oder Booking.com weiterzuleiten](/de/taking-direct-bookings-without-commission/).
