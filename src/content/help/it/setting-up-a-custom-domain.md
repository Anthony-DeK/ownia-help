---
title: "Configurazione di un dominio personalizzato per la tua pagina di prenotazione"
description: "Come collegare il proprio dominio al proprio negozio online Ownia, compresi i record CNAME e DNS che dovrai aggiungere."
category: "growth"
articleId: "setting-up-a-custom-domain"
order: 1
updatedDate: 2026-09-15
locale: "it"
---

Un dominio personalizzato — `book.yourproperty.com` anziché un URL generico di Ownia — conferisce alla tua pagina di prenotazione l'aspetto e l'atmosfera del tuo sito web, ed è una scelta consigliabile prima di iniziare a indirizzare traffico verso di essa tramite annunci, social media o motori di ricerca.

## Dove collegare un dominio

Vai a **Negozio online** → **Impostazioni del negozio** e individua la sezione **Dominio personalizzato**.

## Scegliere un dominio

Inserisci un sottodominio come `www.yourdomain.com` o `book.yourdomain.com`. Un dominio radice nudo (solo `yourdomain.com`, senza nulla davanti) non è supportato: avrai bisogno di un sottodominio, che in ogni caso rappresenta generalmente la scelta più sicura e flessibile per una configurazione DNS.

Fai clic su **Configura**. Ownia genererà i record DNS necessari.

## Aggiunta dei record DNS

Ti verrà mostrato un record **CNAME** (una coppia nome/valore) e, nella maggior parte dei casi, un record **TXT** utilizzato per verificare che tu sia effettivamente il proprietario del dominio. Accedi alla piattaforma in cui gestisci il DNS del tuo dominio — solitamente si tratta del tuo registrar (GoDaddy, Namecheap, ecc.) o di un provider DNS come Cloudflare — e aggiungi entrambi i record esattamente come indicato.

Ecco alcuni accorgimenti che consentono di risparmiare tempo:

- La propagazione delle modifiche al DNS può richiedere da pochi minuti a qualche ora, a seconda del provider.
- Non cancellare né modificare i record DNS esistenti non pertinenti al tuo dominio: aggiungi solo quelli nuovi forniti da Ownia.
- Assicurati di aver copiato esattamente il valore di destinazione del record CNAME; un carattere in più o un errore di battitura sono le cause più comuni per cui la verifica non va a buon fine.

## Verifica del dominio

Una volta aggiunti i record, torna alla sezione "Dominio personalizzato" e clicca su **Controlla subito**. Se la propagazione del DNS non è ancora terminata, attendi qualche istante e ricontrolla: nel frattempo non è necessario riconfigurare nulla.

Una volta verificato, il tuo negozio online sarà accessibile tramite il tuo dominio personale, ed è proprio questo che dovrai utilizzare d’ora in poi in tutte le tue iniziative di marketing, pubblicità o inserzioni che gestisci, compresi i [link per la prenotazione diretta che condividi invece di indirizzare gli ospiti tramite Airbnb o Booking.com](/it/taking-direct-bookings-without-commission/).
