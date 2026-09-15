---
title: "Come funzionano i depositi cauzionali"
description: "Come funziona la funzione di deposito cauzionale di Ownia per l'autorizzazione e l'addebito sulla carta dell'ospite e come attivarla per una struttura."
category: "payments"
articleId: "how-security-deposits-work"
order: 2
updatedDate: 2026-09-15
locale: "it"
---

I depositi cauzionali ti consentono di tutelarti da eventuali danni o costi aggiuntivi di pulizia senza, nella maggior parte dei casi, addebitare nulla all’ospite in anticipo.

## Attivazione di un deposito

I depositi cauzionali vengono configurati per ogni singolo immobile. Vai su **Negozio online** → **Pagamenti**: troverai la scheda **Deposito cauzionale** proprio sotto Stripe Connect. Rimane disabilitata finché il tuo [account Stripe non è attivo](/it/connecting-stripe-to-accept-payments/), poiché i depositi vengono riscossi tramite lo stesso account collegato utilizzato per i pagamenti regolari.

Imposta un **Importo del deposito**. Lascia il campo vuoto per disabilitare completamente i depositi per quella struttura.

## Come funziona effettivamente il blocco

Ownia non addebita l'importo del deposito al momento della prenotazione da parte dell'ospite. Al contrario:

1. Il deposito viene **autorizzato** (bloccato) sulla carta dell'ospite **un giorno prima del check-out**, non al momento della prenotazione.
2. Se non viene rilevato nulla, il blocco viene semplicemente rimosso: all’ospite non viene mai addebitato alcun importo e l’importo torna ad essere disponibile sulla sua carta.
3. Se dovessi richiedere il rimborso parziale o totale della caparra a causa di danni o problemi verificatisi durante il soggiorno, l'importo corrispondente verrà prelevato da quella stessa caparra.

Poiché il blocco viene effettuato proprio prima del check-out e non al momento della prenotazione, gli ospiti non vedono un importo elevato in sospeso sulla propria carta per l'intera durata del soggiorno, ma solo per l'ultimo giorno circa.

## Cosa significa questo per gli ospiti

La conferma della prenotazione e qualsiasi testo destinato agli ospiti dovrebbero indicare chiaramente che verrà applicato un blocco di deposito. Capita talvolta che gli ospiti contattino l'assistenza per chiedere informazioni su un'autorizzazione in sospeso non riconosciuta sulla loro carta di credito in prossimità della data di check-out; sapere che si tratta del blocco di deposito di Ownia/Stripe permette di fornire una risposta immediata, evitando così complicazioni all'assistenza.

## Impostazioni correlate

I depositi cauzionali sono indipendenti dalla [politica di cancellazione](/it/setting-your-cancellation-policy/): il deposito serve a tutelarsi da eventuali danni che potrebbero verificarsi durante il soggiorno, mentre la politica di cancellazione disciplina i rimborsi nel caso in cui un ospite annulli la prenotazione prima dell'arrivo.
