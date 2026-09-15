---
title: "Collegare Stripe per accettare pagamenti online"
description: "Come collegare un account Stripe al tuo negozio online Ownia in modo che gli ospiti possano pagare le prenotazioni dirette e cosa aspettarsi durante la configurazione."
category: "payments"
articleId: "connecting-stripe-to-accept-payments"
order: 1
updatedDate: 2026-09-15
locale: "it"
---

Ownia non trattiene il tuo denaro. Ogni prenotazione viene gestita da Stripe e i fondi vengono versati direttamente sul tuo conto corrente; Ownia preleva automaticamente la propria commissione fissa del 5% al momento del pagamento, senza che sia necessario pagare alcuna fattura separata.

Per accettare una prenotazione diretta a pagamento, devi prima collegare un account Stripe al tuo negozio online.

## Dove collegare Stripe

Vai a **Negozio online** nella barra laterale, quindi apri la scheda **Pagamenti**. Vedrai una scheda **Stripe Connect**:

- Se non è ancora stato collegato nulla, viene visualizzato il messaggio "Accetta pagamenti online" con un pulsante **Collega Stripe**.
- Se hai avviato la configurazione ma non l'hai completata, viene visualizzato il messaggio "Completa la configurazione di Stripe" con un pulsante **Riprendi la configurazione**.
- Una volta verificato tutto, viene visualizzato il messaggio "Stripe connesso" con un link a **Gestisci i pagamenti su Stripe**.

## Scegli il tuo Paese

Clicca su **Collega Stripe** e ti verrà chiesto di confermare il tuo Paese prima di continuare. Questo è importante perché Stripe lo utilizza per determinare quali requisiti identificativi, bancari e fiscali si applicano al tuo account — **questo non potrà essere modificato in seguito**, quindi assicurati di selezionare il paese in cui operi effettivamente e da cui gestisci le tue operazioni bancarie, non solo quello in cui si trovano i tuoi immobili.

Dopo aver confermato, clicca su **Continua su Stripe** per essere reindirizzato alla procedura di registrazione di Stripe, dove dovrai inserire i dati della tua azienda o i tuoi dati personali, le coordinate bancarie e i documenti di verifica dell'identità.

## Configurazione di finitura

La procedura di registrazione su Stripe può richiedere qualche minuto se hai già a portata di mano le tue coordinate bancarie e un documento d’identità. Una volta completata la procedura, verrai reindirizzato a Ownia. Se Stripe richiede ulteriori informazioni (si tratta di una procedura comune e normale, che fa parte dei controlli di conformità di Stripe), nella scheda "Pagamenti" verrà visualizzato il messaggio "Riprendi la configurazione" fino a quando tutto non sarà stato verificato.

È sempre possibile verificare lo stato dell'operazione, il calendario dei pagamenti e la cronologia delle transazioni direttamente da Stripe utilizzando il link **Gestisci i pagamenti su Stripe**.

## Una volta effettuato l'accesso

Con Stripe attivo, la tua pagina di prenotazione può accettare pagamenti e la funzione [deposito cauzionale](/it/how-security-deposits-work/) si sblocca nella stessa scheda "Pagamenti". Gli ospiti pagano l'intero importo (o in base alle tue [politiche di cancellazione e deposito cauzionale](/it/setting-your-cancellation-policy/)) al momento della prenotazione, e i pagamenti vengono accreditati sul tuo conto bancario secondo il normale calendario di pagamento di Stripe previsto per il tuo Paese.
