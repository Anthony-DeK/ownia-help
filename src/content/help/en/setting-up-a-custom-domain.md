---
title: "Setting up a custom domain for your booking page"
description: "How to connect your own domain to your Ownia Web Store, including the CNAME and DNS records you'll need to add."
category: "growth"
articleId: "setting-up-a-custom-domain"
order: 1
updatedDate: 2026-09-15
locale: "en"
---

A custom domain — `book.yourproperty.com` instead of a generic Ownia URL — makes your booking page look and feel like your own website, and it's worth doing before you start sending traffic to it from ads, social, or search.

## Where to connect a domain

Go to **Web Store** → **Store Settings** and find the **Custom domain** section.

## Choosing a domain

Enter a subdomain such as `www.yourdomain.com` or `book.yourdomain.com`. A bare root domain (just `yourdomain.com`, with nothing in front of it) isn't supported — you'll need a subdomain, which is also generally the safer and more flexible choice for a DNS setup anyway.

Click **Configure**. Ownia will generate the DNS records you need.

## Adding the DNS records

You'll be shown a **CNAME** record (a Name/Value pair) and, in most cases, a **TXT** record used to verify you actually own the domain. Log in to wherever you manage DNS for your domain — this is usually your domain registrar (GoDaddy, Namecheap, etc.) or a DNS provider like Cloudflare — and add both records exactly as shown.

A few things that save time here:

- DNS changes can take anywhere from a few minutes to a few hours to propagate, depending on your provider.
- Don't delete or edit unrelated existing DNS records for your domain — only add the new ones Ownia gives you.
- Double-check you copied the CNAME target value exactly; a trailing character or typo is the most common reason verification doesn't go through.

## Verifying the domain

Once you've added the records, come back to the Custom domain section and click **Check now**. If DNS hasn't finished propagating yet, wait a bit and check again — there's no need to reconfigure anything in the meantime.

Once verified, your Web Store is reachable at your own domain, and it's what you should use in any marketing, ads, or listings you control going forward — including the [direct booking links you share instead of routing guests through Airbnb or Booking.com](/en/taking-direct-bookings-without-commission/).
