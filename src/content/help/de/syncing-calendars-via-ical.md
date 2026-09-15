---
title: "Airbnb, Booking.com und andere Kalender über iCal synchronisieren"
description: "So exportieren Sie Ihren Ownia-Kalender auf andere Plattformen und importieren externe Kalender, damit es nie zu Terminüberschneidungen kommt."
category: "calendar"
articleId: "syncing-calendars-via-ical"
order: 1
updatedDate: 2026-09-15
locale: "de"
---

Wenn Sie eine Unterkunft zusätzlich zu Ihrem Ownia-Webshop auch auf Airbnb, Booking.com oder einer anderen Plattform inserieren, müssen diese Kalender miteinander kommunizieren. Andernfalls besteht die Gefahr einer Doppelbuchung: Ein Gast reserviert dieselben Termine gleichzeitig auf zwei Plattformen.

Ownia nutzt hierfür iCal, das Standardformat für Kalender-Feeds, das von allen großen Buchungsplattformen unterstützt wird. Die Verfügbarkeit wird in beide Richtungen synchronisiert; Preise, Objektdaten und Gästedaten werden nicht über iCal synchronisiert und auf jeder Plattform separat verwaltet.

## Wo finde ich die Kalendersynchronisierung?

Öffnen Sie die Unterkunft, die Sie aus **Unterkünfte** synchronisieren möchten, und wechseln Sie dann zum Abschnitt **iCal-Synchronisierung**. Dort sehen Sie zwei Abschnitte: **Kalender exportieren** und **Externe Kalender importieren**.

## Den Ownia-Kalender exportieren

Kopieren Sie unter **Kalender exportieren** den eindeutigen Kalender-Link, den Ownia für diese Immobilie generiert. Fügen Sie ihn in die Kalender-Import-Einstellungen der externen Plattform ein:

- **Airbnb**: Verfügbarkeit → Kalender importieren
- **Booking.com**: Kalender → iCal

Dadurch wird Airbnb oder Booking.com angewiesen, alle Termine zu sperren, die bereits über Ihren Ownia-Webshop gebucht wurden.

## Externe Kalender importieren

Fügen Sie unter **Externe Kalender importieren** die iCal-Feed-URL jeder Plattform hinzu, auf der Sie Ihre Unterkünfte anbieten (sowohl Airbnb als auch Booking.com stellen in ihren Kalendereinstellungen einen eigenen exportierbaren Kalenderlink zur Verfügung). Ownia sperrt diese Termine automatisch in Ihrem Webshop.

Sie können pro Unterkunft mehr als einen externen Kalender hinzufügen – zum Beispiel sowohl Ihre Airbnb- als auch Ihre Booking.com-Feeds – und Ownia führt diese zusammen.

## Wie oft erfolgt die Synchronisierung?

Importierte Kalender werden etwa alle 2 Stunden automatisch aktualisiert. Wenn Sie gerade eine Buchung auf einer anderen Plattform vorgenommen haben und möchten, dass diese sofort in Ihrem Ownia-Kalender angezeigt wird, ist normalerweise keine manuelle „Jetzt synchronisieren“-Funktion erforderlich – warten Sie einfach kurz ab und bestätigen Sie eine Anfrage für denselben Tag auf einer zweiten Plattform nicht manuell, bis die Synchronisierung abgeschlossen ist.

## Ein Hinweis dazu, was iCal nicht kann

Die iCal-Synchronisierung beschränkt sich ausschließlich auf die Verfügbarkeit. Der Preis pro Übernachtung, die Beschreibung Ihrer Unterkunft sowie die Kontaktdaten der Gäste werden nicht zwischen den Plattformen übertragen – für jede Plattform müssen die Preise und Inseratinhalte weiterhin direkt vor Ort konfiguriert werden.
