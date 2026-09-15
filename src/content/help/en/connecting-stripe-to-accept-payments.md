---
title: "Connecting Stripe to accept online payments"
description: "How to connect a Stripe account to your Ownia Web Store so guests can pay for direct bookings, and what to expect during setup."
category: "payments"
articleId: "connecting-stripe-to-accept-payments"
order: 1
updatedDate: 2026-09-15
locale: "en"
---

Ownia doesn't hold your money. Every booking is processed by Stripe, and funds go directly to your own bank account — Ownia takes its flat 5% commission automatically at the time of payment, with no separate invoice to pay.

To accept a paid direct booking, you first need to connect a Stripe account to your Web Store.

## Where to connect Stripe

Go to **Web Store** in the sidebar, then open the **Payments** tab. You'll see a **Stripe Connect** card:

- If nothing is connected yet, it reads "Accept online payments" with a **Connect Stripe** button.
- If you started setup but didn't finish, it reads "Complete your Stripe setup" with a **Resume setup** button.
- Once everything is verified, it reads "Stripe connected" with a link to **Manage payouts on Stripe**.

## Choosing your country

Click **Connect Stripe** and you'll be asked to confirm your country before continuing. This matters because Stripe uses it to determine which identity, banking, and tax requirements apply to your account — **this cannot be changed later**, so make sure you select the country you're actually operating and banking from, not just where your properties are located.

After confirming, click **Continue to Stripe** to be redirected to Stripe's own onboarding flow, where you'll enter your business or individual details, bank account, and identity verification documents.

## Finishing setup

Stripe onboarding can take a few minutes if you have your bank details and ID ready. Once you're done, you'll be redirected back to Ownia. If Stripe needs more information (this is common and normal — it's part of Stripe's own compliance checks), the Payments tab will show "Resume setup" until everything is verified.

You can always check the underlying status, payout schedule, and transaction history directly from Stripe using the **Manage payouts on Stripe** link.

## Once you're connected

With Stripe active, your booking page can accept payments and the [security deposit](/en/how-security-deposits-work/) feature unlocks on the same Payments tab. Guests pay in full (or according to your [cancellation and deposit policies](/en/setting-your-cancellation-policy/)) at the time of booking, and payouts land in your bank account on Stripe's normal payout schedule for your country.
