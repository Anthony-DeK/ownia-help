---
title: "Come far indicizzare il tuo sito di prenotazioni su Google con Search Console"
description: "Cos’è Google Search Console, come verificare il proprio dominio tramite un record DNS, inviare la mappa del sito e richiedere a Google di indicizzare il proprio sito di prenotazioni."
category: "growth"
articleId: "indexing-your-booking-site-on-google"
order: 3
updatedDate: 2026-09-28
locale: "it"
---

Gli ospiti che cercano il nome della tua struttura o un alloggio in affitto nella tua zona dovrebbero trovare il tuo sito di prenotazione, non solo il tuo annuncio su Airbnb o Booking.com. Google Search Console è lo strumento gratuito che ti permette di segnalare a Google l'esistenza del tuo sito e di verificarne le prestazioni nei risultati di ricerca.

Questa guida richiede circa 10 minuti di lavoro, seguiti da qualche giorno di attesa da parte di Google.

## Che cos’è Google Search Console?

Google Search Console è un servizio gratuito offerto da Google ai proprietari di siti web. Una volta dimostrata la titolarità del proprio dominio, consente di:

- Indica a Google quali pagine sono presenti nel tuo sito tramite una mappa del sito
- Chiedi a Google di indicizzare subito una pagina, invece di aspettare che venga individuata
- Scopri in quali ricerche compare il tuo sito, con quale frequenza e quante persone cliccano su di esso
- Ricevi una notifica quando Google non riesce a leggere una delle tue pagine

Search Console non modifica di per sé il tuo posizionamento. Si assicura che Google sia a conoscenza delle tue pagine e ti mostra cosa funziona.

## Prima di iniziare

Ti servono due cose:

- **Un dominio personalizzato attivo sul tuo sito di prenotazioni Ownia.** Search Console funziona solo con un dominio di tua proprietà. Se non ne hai ancora configurato uno, segui prima le istruzioni su [Come configurare un dominio personalizzato per la tua pagina di prenotazioni](/it/setting-up-a-custom-domain/) e attendi che il suo stato diventi **Attivo**.
- **Un account Google.** Va bene qualsiasi account Gmail o Google Workspace.

Dovrai inoltre accedere al tuo **gestore DNS**: la piattaforma in cui hai aggiunto il record CNAME per il tuo dominio personalizzato. Di solito si tratta del tuo registrar di domini (GoDaddy, Namecheap, OVHcloud, IONOS…) o di un provider DNS come Cloudflare.

## Passaggio 1: aggiungi il tuo dominio a Search Console

1. Vai su [search.google.com/search-console](https://search.google.com/search-console) ed effettua l'accesso.
2. Apri il selettore delle proprietà in alto a sinistra e fai clic su **Aggiungi proprietà**.
3. Scegli l'opzione **Dominio** (a sinistra), non "Prefisso URL".
4. Inserisci il tuo **dominio principale**, senza `www.`, `book.` o `https://`. Se il tuo sito di prenotazioni si trova all'indirizzo `www.villa-example.com`, inserisci `villa-example.com`.
5. Fai clic su **Continua**.

Un dominio copre tutti i sottodomini e sia `http` che `https`, quindi include il tuo sito di prenotazioni indipendentemente dal sottodominio utilizzato.

I menu di Search Console vengono visualizzati nella lingua del tuo account Google, pertanto le denominazioni esatte potrebbero differire leggermente da quelle riportate in questa guida.

## Passaggio 2: copia il record di verifica

Google ora mostra un **record TXT** che inizia con `google-site-verification=`, seguito da un codice lungo. Fai clic su **Copia**. Lascia aperta questa finestra: tornerai su di essa per fare clic su **Verifica**.

## Passaggio 3: aggiungi il record TXT nel tuo gestore DNS

Nel gestore DNS, apri le impostazioni DNS del tuo dominio e aggiungi un nuovo record:

- **Tipo:** TXT
- **Nome / Host:** `@` (indica il dominio principale stesso; alcuni provider richiedono invece che il campo venga lasciato vuoto)
- **Valore / Contenuto:** il testo completo `google-site-verification=…` che hai copiato
- **TTL:** lasciare il valore predefinito

Dove trovarlo nei principali provider (i nomi delle voci di menu possono subire lievi variazioni nel tempo):

- **Cloudflare:** seleziona il tuo dominio, quindi **DNS** → **Record** → **Aggiungi record**.
- **GoDaddy:** **I miei prodotti** → il tuo dominio → **DNS** → **Aggiungi nuovo record**.
- **Namecheap:** **Elenco domini** → **Gestisci** accanto al tuo dominio → **DNS avanzato** → **Aggiungi nuovo record** → **Record TXT**.
- **OVHcloud:** **Web Cloud** → **Nomi di dominio** → il tuo dominio → **Zona DNS** → **Aggiungi una voce** → **TXT**. Lascia vuoto il campo del sottodominio.
- **IONOS:** **Domini e SSL** → il tuo dominio → **DNS** → **Aggiungi record** → **TXT**.
- **Squarespace Domains** (precedentemente Google Domains): il tuo dominio → **DNS** → **Impostazioni DNS** → **Record personalizzati** → **Aggiungi record**.

Alcune cose da fare per evitare problemi:

- **Aggiungi, non sostituire.** Se il tuo dominio ha già dei record TXT (ad esempio per la posta elettronica), mantienili. Un dominio può avere più record TXT.
- **Non modificare il record CNAME** che hai aggiunto per Ownia. Il tuo sito di prenotazioni dipende da esso.
- **Conserva il record TXT dopo la verifica.** Google lo controlla nuovamente di tanto in tanto e, se lo rimuovi, il tuo dominio non sarà più verificato.

## Passaggio 4: verifica

Torna a Search Console e clicca su **Verifica**.

Le modifiche al DNS richiedono solitamente pochi minuti, ma possono richiedere fino a 48 ore a seconda del provider. Se Google segnala di non essere riuscito a trovare il record, attendi qualche istante e fai nuovamente clic su **Verifica**. Non è necessario aggiungere il record due volte.

## Passaggio 5: invia la tua mappa del sito

Ownia crea automaticamente una mappa del sito per il tuo sito di prenotazioni: un elenco delle tue pagine che Google può leggere. È sempre disponibile all'indirizzo:

`https://your-booking-domain/sitemap.xml`

Ad esempio, `https://www.villa-example.com/sitemap.xml`. Troverai l'indirizzo esatto anche su Ownia alla voce **Negozio online** → **Promuovere**, nella scheda **Fai in modo che il tuo sito di prenotazioni venga indicizzato da Google**.

In Search Console:

1. Fai clic su **Mappa del sito** nel menu a sinistra.
2. Incolla l'indirizzo completo della mappa del sito, compreso `https://`.
3. Fai clic su **Invia**.

Lo stato dovrebbe passare a **Successo** entro un intervallo di tempo compreso tra pochi minuti e alcune ore. La mappa del sito si aggiorna automaticamente ogni volta che si aggiunge o si rimuove una proprietà, quindi è sufficiente inviarla una sola volta.

## Passaggio 6: richiedi l'indicizzazione delle tue pagine principali

Per accelerare il processo per un sito completamente nuovo:

1. Incolla l'indirizzo della home page del tuo sito di prenotazioni nella barra di ricerca nella parte superiore di Search Console (si aprirà la schermata **Ispezione URL**).
2. Fai clic su **Richiedi indicizzazione**.
3. Se sono presenti più proprietà, ripetere l'operazione per ciascuna pagina delle proprietà.

Non è necessario ripetere questa operazione ogni volta che modifichi una descrizione: Google si aggiorna automaticamente.

## Cosa aspettarsi

- **Prime pagine su Google:** di solito qualche giorno, a volte qualche settimana per un nuovo dominio.
- **Dati di ricerca** nel report **Prestazioni**: vengono visualizzati alcuni giorni dopo che il tuo sito inizia ad apparire nei risultati.
- **"Escluso dal tag 'noindex'"** nel report **Pagine** è un fenomeno previsto per alcune pagine. Ownia esclude deliberatamente da Google alcune pagine private, come i libri di benvenuto per gli ospiti (che contengono i codici Wi-Fi) e le pagine di conferma delle prenotazioni.

## Domande frequenti

### Non ho un dominio personalizzato. Posso comunque utilizzare Search Console?

Non per il tuo sito di prenotazioni in sé: Search Console richiede di dimostrare la proprietà del dominio, e `app.ownia.co` appartiene a Ownia. La tua pagina di prenotazione Ownia è comunque presente nella mappa del sito di Ownia, quindi Google può trovarla, ma non riceverai i rapporti di Search Console né potrai richiedere l'indicizzazione. Configurare un dominio personalizzato è il modo per ottenere entrambe le cose.

### La verifica continua a fallire. Cosa dovrei controllare?

- Il tipo di record è **TXT**, non CNAME.
- Il nome è `@` (o vuoto), non `www` né `book`.
- Il valore è il testo completo, compreso `google-site-verification=`, senza spazi o virgolette aggiuntivi inseriti durante il copia-incolla.
- Hai aggiunto il record presso il provider che gestisce effettivamente il tuo DNS. Se il tuo dominio utilizza i server dei nomi di Cloudflare, ad esempio, i record aggiunti presso il tuo registrar vengono ignorati.

### Questo farà sì che il mio sito appaia al primo posto su Google?

Nessuno strumento può garantirlo. Search Console assicura che Google conosca le tue pagine e ti mostra come gli utenti ti trovano. Ciò che ti aiuta a posizionarti sono un nome chiaro della proprietà, descrizioni e foto di qualità, oltre a link al tuo sito presenti nelle tue inserzioni, sui social media e sui siti web locali.
