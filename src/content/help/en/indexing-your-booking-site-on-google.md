---
title: "Getting your booking site indexed on Google with Search Console"
description: "What Google Search Console is, how to verify your domain with a DNS record, submit your sitemap and ask Google to index your booking site."
category: "growth"
articleId: "indexing-your-booking-site-on-google"
order: 3
updatedDate: 2026-09-28
locale: "en"
---

Guests who search for your property's name, or for a rental in your area, should find your own booking site, not only your Airbnb or Booking.com listing. Google Search Console is the free tool that lets you tell Google your site exists and see how it performs in search.

This guide takes about 10 minutes of work, then a few days of waiting for Google.

## What is Google Search Console?

Google Search Console is a free service from Google for website owners. Once you've proven you own your domain, it lets you:

- Tell Google which pages your site has, through a sitemap
- Ask Google to index a page right away instead of waiting for it to be discovered
- See which searches show your site, how often, and how many people click
- Get alerted when Google can't read one of your pages

Search Console doesn't change your ranking by itself. It makes sure Google knows about your pages, and it shows you what's working.

## Before you start

You need two things:

- **An active custom domain on your Ownia booking site.** Search Console only works for a domain you own. If you haven't set one up yet, follow [Setting up a custom domain for your booking page](/en/setting-up-a-custom-domain/) first, and wait until its status shows **Active**.
- **A Google account.** Any Gmail or Google Workspace account works.

You'll also need to log in to your **DNS manager**: the place where you added the CNAME record for your custom domain. It's usually your domain registrar (GoDaddy, Namecheap, OVHcloud, IONOS…) or a DNS provider like Cloudflare.

## Step 1: Add your domain to Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console) and sign in.
2. Open the property selector at the top left and click **Add property**.
3. Choose the **Domain** option (on the left), not URL prefix.
4. Enter your **root domain**, without `www.`, `book.` or `https://`. If your booking site is at `www.villa-example.com`, enter `villa-example.com`.
5. Click **Continue**.

A Domain property covers every subdomain and both `http` and `https`, so it includes your booking site whatever subdomain it uses.

Search Console menus appear in your Google account's language, so the exact labels may differ slightly from the ones in this guide.

## Step 2: Copy the verification record

Google now shows a **TXT record** that starts with `google-site-verification=` followed by a long code. Click **Copy**. Leave this window open: you'll come back to it to click **Verify**.

## Step 3: Add the TXT record in your DNS manager

In your DNS manager, open the DNS settings for your domain and add a new record:

- **Type:** TXT
- **Name / Host:** `@` (this means the root domain itself; some providers want the field left empty instead)
- **Value / Content:** the full `google-site-verification=…` text you copied
- **TTL:** leave the default

Where to find this with common providers (menu names can change slightly over time):

- **Cloudflare:** select your domain, then **DNS** → **Records** → **Add record**.
- **GoDaddy:** **My Products** → your domain → **DNS** → **Add New Record**.
- **Namecheap:** **Domain List** → **Manage** next to your domain → **Advanced DNS** → **Add New Record** → **TXT Record**.
- **OVHcloud:** **Web Cloud** → **Domain names** → your domain → **DNS zone** → **Add an entry** → **TXT**. Leave the subdomain field empty.
- **IONOS:** **Domains & SSL** → your domain → **DNS** → **Add record** → **TXT**.
- **Squarespace Domains** (formerly Google Domains): your domain → **DNS** → **DNS Settings** → **Custom records** → **Add record**.

A few things that avoid problems:

- **Add, don't replace.** If your domain already has TXT records (for email, for example), keep them. A domain can have several TXT records.
- **Don't touch the CNAME record** you added for Ownia. Your booking site depends on it.
- **Keep the TXT record after verification.** Google checks it again from time to time, and removing it will un-verify your domain.

## Step 4: Verify

Go back to Search Console and click **Verify**.

DNS changes usually take a few minutes, but can take up to 48 hours depending on your provider. If Google says it couldn't find the record, wait a while and click **Verify** again. You don't need to add the record twice.

## Step 5: Submit your sitemap

Ownia automatically creates a sitemap for your booking site: a list of your pages that Google can read. It's always at:

`https://your-booking-domain/sitemap.xml`

For example, `https://www.villa-example.com/sitemap.xml`. You'll also find the exact address in Ownia under **Web Store** → **Promote**, in the **Get your booking site indexed by Google** card.

In Search Console:

1. Click **Sitemaps** in the left menu.
2. Paste the full sitemap address, including `https://`.
3. Click **Submit**.

The status should change to **Success** within a few minutes to a few hours. The sitemap updates itself whenever you add or remove a property, so you only need to submit it once.

## Step 6: Request indexing for your main pages

To speed things up for a brand-new site:

1. Paste your booking site's home page address into the search bar at the top of Search Console (this opens **URL inspection**).
2. Click **Request indexing**.
3. Repeat for each property page if you have several properties.

You don't need to do this again every time you edit a description: Google comes back on its own.

## What to expect

- **First pages in Google:** usually a few days, sometimes a few weeks for a new domain.
- **Search data** in the **Performance** report: appears a few days after your site starts showing in results.
- **"Excluded by 'noindex' tag"** in the **Pages** report is expected for some pages. Ownia deliberately keeps private pages out of Google, such as guest welcome books (they contain wifi codes) and booking confirmation pages.

## Frequently asked questions

### I don't have a custom domain. Can I still use Search Console?

Not for your booking site itself: Search Console requires proving you own the domain, and `app.ownia.co` belongs to Ownia. Your Ownia booking page is still listed in Ownia's own sitemap, so Google can find it, but you won't get the Search Console reports or be able to request indexing. Setting up a custom domain is the way to get both.

### Verification keeps failing. What should I check?

- The record type is **TXT**, not CNAME.
- The name is `@` (or empty), not `www` or `book`.
- The value is the complete text, including `google-site-verification=`, with no extra spaces or quotes added by copy-paste.
- You added the record at the provider that actually manages your DNS. If your domain uses Cloudflare's nameservers, for example, records added at your registrar are ignored.

### Will this make my site rank first on Google?

No tool can guarantee that. Search Console makes sure Google knows your pages and shows you how guests find you. What helps you rank is a clear property name, good descriptions and photos, and links to your site from your listings, social media and local websites.
