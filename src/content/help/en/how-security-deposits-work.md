---
title: "How security deposits work"
description: "How Ownia's security deposit feature authorizes and charges a guest's card, and how to turn it on for a property."
category: "payments"
articleId: "how-security-deposits-work"
order: 2
updatedDate: 2026-09-15
locale: "en"
---

Security deposits let you protect yourself against damage or extra cleaning costs without charging the guest anything upfront in most cases.

## Turning on a deposit

Security deposits are configured per property. Go to **Web Store** → **Payments**, and you'll find the **Security deposit** card directly below Stripe Connect. It stays disabled until your [Stripe account is active](/en/connecting-stripe-to-accept-payments/), since deposits are collected through the same connected account as regular payments.

Set a **Deposit amount**. Leave the field empty to disable deposits entirely for that property.

## How the hold actually works

Ownia doesn't charge the deposit amount when the guest books. Instead:

1. The deposit is **authorized** (placed as a hold) on the guest's card **one day before check-out**, not at booking time.
2. If nothing comes up, the hold is simply released — the guest is never charged and the money becomes available on their card again.
3. If you need to claim part or all of the deposit for damage or an issue during the stay, the corresponding amount is captured from that same hold.

Because the hold happens right before check-out rather than at booking, guests don't see a large pending charge sitting on their card for the entire length of their stay — only for the last day or so.

## What this means for guests

Your booking confirmation and any guest-facing copy should make clear that a deposit hold will apply. Guests occasionally reach out asking about an unfamiliar pending authorization on their card near their check-out date; knowing it's the Ownia/Stripe deposit hold makes that a quick answer rather than a support headache.

## Related settings

Security deposits are independent of your [cancellation policy](/en/setting-your-cancellation-policy/) — a deposit hold is about protecting against damage during the stay, while cancellation policy governs refunds if a guest cancels before arriving.
