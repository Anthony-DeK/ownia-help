---
title: "So lassen Sie Ihre Buchungsseite mit der Search Console bei Google indexieren"
description: "Was die Google Search Console ist, wie Sie Ihre Domain mithilfe eines DNS-Eintrags verifizieren, Ihre Sitemap einreichen und Google bitten können, Ihre Buchungsseite zu indexieren."
category: "growth"
articleId: "indexing-your-booking-site-on-google"
order: 3
updatedDate: 2026-09-28
locale: "de"
---

Gäste, die nach dem Namen Ihrer Unterkunft oder nach einer Unterkunft in Ihrer Gegend suchen, sollten auf Ihre eigene Buchungsseite stoßen und nicht nur auf Ihr Inserat bei Airbnb oder Booking.com. Die Google Search Console ist ein kostenloses Tool, mit dem Sie Google mitteilen können, dass Ihre Website existiert, und sehen können, wie sie in den Suchergebnissen abschneidet.

Die Umsetzung dieser Anleitung dauert etwa 10 Minuten, danach muss man noch ein paar Tage auf Google warten.

## Was ist die Google Search Console?

Die Google Search Console ist ein kostenloser Dienst von Google für Website-Betreiber. Sobald Sie nachgewiesen haben, dass Sie Eigentümer Ihrer Domain sind, können Sie damit:

- Teilen Sie Google mithilfe einer Sitemap mit, welche Seiten Ihre Website enthält
- Bitten Sie Google, eine Seite sofort zu indexieren, anstatt darauf zu warten, dass sie entdeckt wird
- Sehen Sie, bei welchen Suchanfragen Ihre Website angezeigt wird, wie oft dies geschieht und wie viele Nutzer darauf klicken
- Lassen Sie sich benachrichtigen, wenn Google eine Ihrer Seiten nicht lesen kann

Die Search Console beeinflusst Ihr Ranking nicht direkt. Sie sorgt dafür, dass Google Ihre Seiten erkennt, und zeigt Ihnen, was gut funktioniert.

## Bevor Sie beginnen

Du brauchst zwei Dinge:

- **Eine aktive benutzerdefinierte Domain auf Ihrer Ownia-Buchungsseite.** Die Search Console funktioniert nur für eine Domain, deren Eigentümer Sie sind. Wenn Sie noch keine eingerichtet haben, befolgen Sie zunächst die Anleitung [Einrichten einer benutzerdefinierten Domain für Ihre Buchungsseite](/de/setting-up-a-custom-domain/) und warten Sie, bis der Status **Aktiv** angezeigt wird.
- **Ein Google-Konto.** Jedes Gmail- oder Google Workspace-Konto ist geeignet.

Außerdem müssen Sie sich bei Ihrem **DNS-Manager** anmelden: Dort haben Sie den CNAME-Eintrag für Ihre benutzerdefinierte Domain hinzugefügt. In der Regel handelt es sich dabei um Ihren Domain-Registrar (GoDaddy, Namecheap, OVHcloud, IONOS…) oder einen DNS-Anbieter wie Cloudflare.

## Schritt 1: Domain zur Search Console hinzufügen

1. Rufen Sie [search.google.com/search-console](https://search.google.com/search-console) auf und melden Sie sich an.
2. Öffnen Sie die Immobilienauswahl oben links und klicken Sie auf **Immobilie hinzufügen**.
3. Wählen Sie die Option **Domain** (auf der linken Seite) und nicht „URL-Präfix“.
4. Geben Sie Ihre **Root-Domain** ein, ohne `www.`, `book.` oder `https://`. Wenn Ihre Buchungsseite unter `www.villa-example.com` zu finden ist, geben Sie `villa-example.com` ein.
5. Klicken Sie auf **Weiter**.

Eine Domain-Unterkunft umfasst alle Subdomains sowie sowohl `http` als auch `https`; sie schließt also Ihre Buchungsseite ein, unabhängig davon, welche Subdomain diese verwendet.

Die Menüs der Search Console werden in der Sprache Ihres Google-Kontos angezeigt, daher können die genauen Bezeichnungen geringfügig von denen in dieser Anleitung abweichen.

## Schritt 2: Verifizierungseintrag kopieren

Google zeigt nun einen **TXT-Eintrag** an, der mit `google-site-verification=` beginnt, gefolgt von einem langen Code. Klicken Sie auf **Kopieren**. Lassen Sie dieses Fenster geöffnet: Sie werden später darauf zurückkommen, um auf **Überprüfen** zu klicken.

## Schritt 3: TXT-Eintrag im DNS-Manager hinzufügen

Öffnen Sie in Ihrem DNS-Manager die DNS-Einstellungen für Ihre Domain und fügen Sie einen neuen Eintrag hinzu:

- **Typ:** TXT
- **Name / Host:** `@` (damit ist die Root-Domain selbst gemeint; bei einigen Anbietern muss das Feld stattdessen leer gelassen werden)
- **Wert / Inhalt:** der vollständige Text `google-site-verification=…`, den Sie kopiert haben
- **TTL:** Standardwert beibehalten

Wo Sie dies bei gängigen Anbietern finden (die Menünamen können sich im Laufe der Zeit leicht ändern):

- **Cloudflare:** Wählen Sie Ihre Domain aus und klicken Sie dann auf **DNS** → **Einträge** → **Eintrag hinzufügen**.
- **GoDaddy:** **Meine Produkte** → Ihre Domain → **DNS** → **Neuen Eintrag hinzufügen**.
- **Namecheap:** **Domain-Liste** → **Verwalten** neben Ihrer Domain → **Erweiterte DNS-Einstellungen** → **Neuen Eintrag hinzufügen** → **TXT-Eintrag**.
- **OVHcloud:** **Web Cloud** → **Domainnamen** → Ihre Domain → **DNS-Zone** → **Eintrag hinzufügen** → **TXT**. Lassen Sie das Feld „Subdomain“ leer.
- **IONOS:** **Domains & SSL** → Ihre Domain → **DNS** → **Eintrag hinzufügen** → **TXT**.
- **Squarespace Domains** (ehemals Google Domains): Ihre Domain → **DNS** → **DNS-Einstellungen** → **Benutzerdefinierte Einträge** → **Eintrag hinzufügen**.

Ein paar Tipps, um Probleme zu vermeiden:

- **Ergänzen, nicht ersetzen.** Wenn Ihre Domain bereits über TXT-Einträge verfügt (beispielsweise für E-Mail), behalten Sie diese bei. Eine Domain kann mehrere TXT-Einträge haben.
- **Ändern Sie den CNAME-Eintrag**, den Sie für Ownia hinzugefügt haben, auf keinen Fall. Ihre Buchungsseite ist darauf angewiesen.
- **Behalten Sie den TXT-Eintrag nach der Verifizierung bei.** Google überprüft ihn von Zeit zu Zeit erneut, und wenn Sie ihn entfernen, wird die Verifizierung Ihrer Domain aufgehoben.

## Schritt 4: Überprüfen

Kehren Sie zur Search Console zurück und klicken Sie auf **Verifizieren**.

DNS-Änderungen dauern in der Regel einige Minuten, können aber je nach Anbieter bis zu 48 Stunden in Anspruch nehmen. Wenn Google meldet, dass der Eintrag nicht gefunden werden konnte, warte eine Weile und klicke erneut auf **Überprüfen**. Du musst den Eintrag nicht zweimal hinzufügen.

## Schritt 5: Sitemap einreichen

Ownia erstellt automatisch eine Sitemap für Ihre Buchungsseite: eine Liste Ihrer Seiten, die Google auslesen kann. Sie finden sie immer unter:

`https://your-booking-domain/sitemap.xml`

Zum Beispiel `https://www.villa-example.com/sitemap.xml`. Die genaue Adresse finden Sie außerdem bei Ownia unter **Webshop** → **Fördern** auf der Karte **Lassen Sie Ihre Buchungsseite von Google indexieren**.

In der Search Console:

1. Klicken Sie im linken Menü auf **Sitemaps**.
2. Fügen Sie die vollständige Sitemap-Adresse ein, einschließlich `https://`.
3. Klicken Sie auf **Absenden**.

Der Status sollte sich innerhalb weniger Minuten bis zu einigen Stunden auf **Erfolg** ändern. Die Sitemap aktualisiert sich automatisch, sobald Sie eine Immobilie hinzufügen oder entfernen; Sie müssen sie daher nur einmal einreichen.

## Schritt 6: Indizierung Ihrer Hauptseiten beantragen

Um den Aufbau einer brandneuen Website zu beschleunigen:

1. Fügen Sie die Adresse der Startseite Ihrer Buchungswebsite in die Suchleiste oben in der Search Console ein (dadurch wird die Funktion „**URL-Prüfung**“ geöffnet).
2. Klicken Sie auf **Indizierung anfordern**.
3. Wiederholen Sie diesen Vorgang für jede Eigenschaftsseite, falls Sie mehrere Unterkünfte haben.

Das müssen Sie nicht jedes Mal wiederholen, wenn Sie eine Beschreibung bearbeiten: Google passt sich von selbst an.

## Was Sie erwartet

- **Erste Seiten bei Google:** in der Regel ein paar Tage, bei einer neuen Domain manchmal auch ein paar Wochen.
- **Suchdaten** im **Leistungsbericht**: Diese werden einige Tage nach der ersten Anzeige Ihrer Website in den Suchergebnissen angezeigt.
- **„Durch das ‚noindex‘-Tag ausgeschlossen“** im Bericht **„Seiten“** ist bei einigen Seiten zu erwarten. Ownia hält private Seiten bewusst von Google fern, beispielsweise Willkommensbücher (die WLAN-Codes enthalten) und Seiten mit Buchungsbestätigungen.

## Häufig gestellte Fragen

### Ich habe keine eigene Domain. Kann ich die Search Console trotzdem nutzen?

Nicht für Ihre Buchungsseite selbst: Die Search Console verlangt den Nachweis, dass Sie Eigentümer der Domain sind, und `app.ownia.co` gehört Ownia. Ihre Ownia-Buchungsseite ist zwar weiterhin in der eigenen Sitemap von Ownia aufgeführt, sodass Google sie finden kann, aber Sie erhalten keine Search-Console-Berichte und können auch keine Indizierung beantragen. Die Einrichtung einer benutzerdefinierten Domain ist der Weg, um beides zu erreichen.

### Die Überprüfung schlägt immer wieder fehl. Was sollte ich überprüfen?

- Der Eintragstyp ist **TXT**, nicht CNAME.
- Der Name lautet „@“ (oder ist leer), nicht „www“ oder „book“.
- Der Wert ist der vollständige Text, einschließlich `google-site-verification=`, ohne zusätzliche Leerzeichen oder Anführungszeichen, die beim Kopieren und Einfügen hinzugefügt wurden.
- Sie haben den Eintrag bei dem Anbieter hinzugefügt, der Ihr DNS tatsächlich verwaltet. Wenn Ihre Domain beispielsweise die Nameserver von Cloudflare nutzt, werden Einträge, die bei Ihrem Registrar hinzugefügt wurden, ignoriert.

### Wird meine Website dadurch bei Google auf Platz eins ranken?

Kein Tool kann das garantieren. Die Search Console sorgt dafür, dass Google Ihre Seiten kennt, und zeigt Ihnen, wie Besucher Sie finden. Was Ihnen bei der Platzierung hilft, sind ein aussagekräftiger Name Ihrer Unterkunft, gute Beschreibungen und Fotos sowie Links zu Ihrer Website aus Ihren Einträgen, sozialen Medien und lokalen Websites.
