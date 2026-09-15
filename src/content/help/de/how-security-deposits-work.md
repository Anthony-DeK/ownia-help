---
title: "So funktionieren Kautionen"
description: "Wie die Kaution-Funktion von Ownia die Karte eines Gastes autorisiert und belastet und wie man sie für eine Unterkunft aktiviert."
category: "payments"
articleId: "how-security-deposits-work"
order: 2
updatedDate: 2026-09-15
locale: "de"
---

Mit Kautionen können Sie sich vor Schäden oder zusätzlichen Reinigungskosten absichern, ohne dem Gast in den meisten Fällen im Voraus etwas in Rechnung stellen zu müssen.

## Einzahlung aktivieren

Kautionen werden pro Objekt konfiguriert. Gehen Sie zu **Webshop** → **Zahlungen**, dort finden Sie die Karte **Kaution** direkt unter „Stripe Connect“. Sie bleibt deaktiviert, bis Ihr [Stripe-Konto aktiv ist](/de/connecting-stripe-to-accept-payments/), da Kautionen über dasselbe verbundene Konto eingezogen werden wie reguläre Zahlungen.

Legen Sie einen **Einzahlungsbetrag** fest. Lassen Sie das Feld leer, um Einzahlungen für diese Immobilie vollständig zu deaktivieren.

## Wie der Hold tatsächlich funktioniert

Ownia berechnet die Kaution nicht bei der Buchung durch den Gast. Stattdessen:

1. Die Kaution wird **vorbehalten** (als Sperrbetrag auf der Karte des Gastes vermerkt) **einen Tag vor der Abreise**, nicht zum Zeitpunkt der Buchung.
2. Wenn nichts gefunden wird, wird die Reservierung einfach aufgehoben – dem Gast werden keine Kosten in Rechnung gestellt, und der Betrag steht wieder auf seiner Karte zur Verfügung.
3. Sollten Sie aufgrund von Schäden oder Problemen während des Aufenthalts einen Teil oder die gesamte Kaution einbehalten müssen, wird der entsprechende Betrag von derselben Kaution abgezogen.

Da die Vormerkung erst unmittelbar vor der Abreise und nicht bereits bei der Buchung erfolgt, sehen die Gäste während ihres gesamten Aufenthalts keine hohe ausstehende Belastung auf ihrer Karte – sondern erst am letzten Tag oder so.

## Was das für die Gäste bedeutet

In Ihrer Buchungsbestätigung und allen für Gäste bestimmten Texten sollte deutlich gemacht werden, dass eine Vorabreservierung erfolgt. Gelegentlich wenden sich Gäste kurz vor ihrem Auschecktermin mit der Frage nach einer ihnen unbekannten ausstehenden Autorisierung auf ihrer Karte an uns; wenn sie wissen, dass es sich um die Vorabreservierung von Ownia/Stripe handelt, lässt sich dies schnell klären und erspart dem Support unnötigen Aufwand.

## Zugehörige Einstellungen

Kautionen sind unabhängig von Ihren [Stornierungsbedingungen](/de/setting-your-cancellation-policy/) – eine Kaution dient dem Schutz vor Schäden während des Aufenthalts, während die Stornierungsbedingungen die Rückerstattung regeln, falls ein Gast vor seiner Ankunft storniert.
