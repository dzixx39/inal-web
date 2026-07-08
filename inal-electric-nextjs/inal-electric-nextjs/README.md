# INAL Electric — sajt sa web shopom

Next.js 14 (App Router) + React + Tailwind CSS. Demo katalog, korpa i
"zatraži ponudu" flow za industrijske dijelove, mjerno-regulacionu opremu i
industrijsku automatiku.

## Pokretanje lokalno

Potreban je Node.js 18+ instaliran na računaru.

```bash
npm install
npm run dev
```

Otvori http://localhost:3000 u browseru.

## Struktura projekta

```
app/
  layout.js              -> globalni layout (header, footer, cart drawer)
  page.js                -> početna stranica
  proizvodi/page.js      -> katalog sa filterom po kategoriji
  proizvodi/[slug]/page.js -> detalj proizvoda
  usluge/page.js
  o-nama/page.js
  kontakt/page.js        -> kontakt forma + pregled korpe
components/               -> Header, Footer, ProductCard, CartDrawer, Hero...
data/products.js          -> DEMO podaci o proizvodima (zamijeniti pravim katalogom)
tailwind.config.js        -> brend paleta (boje su placeholder, zamijeniti kad
                              stigne pravi logo/brend knjiga)
```

## Katalog proizvoda

`data/products.js` je automatski generisan iz stvarnog WooCommerce exporta
(889 proizvoda, 48 kategorija). Slike se trenutno učitavaju direktno sa
`inalelectric.com` (postojeći sajt) — kad novi sajt ide u produkciju,
preporuka je prebaciti slike na isti hosting/CDN kao i ostatak sajta.

Skoro svi proizvodi u exportu nemaju cijenu — to je normalno za B2B
katalog i sajt to tretira kao "Cijena na upit" (traži se ponuda umjesto
direktne kupovine). Kad budete imali cjenovnik, samo dodajte `price` polje
za odgovarajuće proizvode u `data/products.js` i automatski će se prikazati
dugme za kupovinu umjesto "Zatraži ponudu".

## Šta treba zamijeniti prije lansiranja

1. **Cijene** — dodati `price` polje u `data/products.js` za proizvode koji
   imaju fiksnu cijenu (trenutno gotovo svi idu na "Zatraži ponudu").
2. **Slanje kontakt forme** — `app/kontakt/page.js` trenutno samo simulira
   slanje. Treba dodati API rutu (`app/api/kontakt/route.js`) koja šalje email
   (npr. preko Resend ili Nodemailer) ili šalje podatke u CRM.
3. **Online plaćanje** — za pravu korpu sa plaćanjem preporuka je Stripe
   Checkout ili lokalni platni procesor (npr. WSPay, Bank of Payments, ili
   PayPal). Trenutna korpa je funkcionalna UI demonstracija (čuva se u
   localStorage) ali nije povezana na pravi payment gateway.
4. **Baza podataka / CMS** — sa 889 proizvoda, u jednom trenutku ima smisla
   prebaciti `data/products.js` u pravu bazu (npr. Postgres + Prisma) ili
   headless CMS, radi lakšeg ažuriranja stanja zaliha i cijena bez ponovnog
   builda sajta.

## Deploy

Najlakše je preko [Vercel](https://vercel.com) (isti tim koji pravi Next.js):
poveži GitHub repo i deploy je automatski pri svakom pushu. Alternativa je
bilo koji Node.js hosting (npr. sopstveni server sa `npm run build && npm start`).
