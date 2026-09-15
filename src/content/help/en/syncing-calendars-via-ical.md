---
title: "Syncing Airbnb, Booking.com, and other calendars via iCal"
description: "How to export your Ownia calendar to other platforms and import external calendars, so you never get double-booked."
category: "calendar"
articleId: "syncing-calendars-via-ical"
order: 1
updatedDate: 2026-09-15
locale: "en"
---

If you list a property on Airbnb, Booking.com, or anywhere else in addition to your Ownia Web Store, you need those calendars talking to each other. Otherwise you risk a double booking: a guest reserving the same dates on two platforms at once.

Ownia handles this with iCal, the standard calendar-feed format that every major booking platform supports. Availability syncs both ways; pricing, property details, and guest information do not sync through iCal and are managed separately on each platform.

## Where to find calendar sync

Open the property you want to sync from **Properties**, then go to its **iCal Sync** section. You'll see two parts: **Export your calendar** and **Import external calendars**.

## Exporting your Ownia calendar

Under **Export your calendar**, copy the unique calendar link Ownia generates for that property. Paste it into the external platform's calendar-import settings:

- **Airbnb**: Availability → Import calendar
- **Booking.com**: Calendar → iCal

This tells Airbnb or Booking.com to block out any dates already booked through your Ownia Web Store.

## Importing external calendars

Under **Import external calendars**, add the iCal feed URL from each platform you list on (Airbnb and Booking.com both provide their own exportable calendar link in their own calendar settings). Ownia blocks those dates on your Web Store automatically.

You can add more than one external calendar per property — for example, both your Airbnb and Booking.com feeds — and Ownia will combine them.

## How often it syncs

Imported calendars refresh automatically roughly every 2 hours. If you just made a booking on another platform and need your Ownia calendar to reflect it immediately, there's normally no manual "sync now" needed — just allow a little buffer time, and avoid manually confirming a same-day request on a second platform until the sync has had a chance to run.

## A note on what iCal does not do

iCal sync is availability-only. It will not carry over your price per night, your property description, or guest contact details between platforms — each platform still needs its own pricing and listing content configured directly.
