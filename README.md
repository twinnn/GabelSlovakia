# gabelpalice.sk

Website of AC ecom s. r. o., the official Gabel pole distributor for Slovakia and the Czech Republic. Live at https://www.gabelpalice.sk, hosted on Vercel.

## Develop

```sh
npm install
npm run dev     # http://localhost:3000
npm run build   # static output in dist/
npm run lint    # type-check
```

## Where things live

- `src/components/sections/` – the homepage sections
- `src/data/company.ts` – company details, contacts and social links (shown in Contact and the footer)
- `src/data/athletes.json` – the Gabel4Youth ranking
- `public/catalogues/` – catalogue PDFs; their cover images are in `public/images/catalogues/`
- `public/video/` – the hero video (WebM + MP4, a smaller MP4 for mobile, and a poster image)

## Updating a catalogue

1. Put the PDF in `public/catalogues/`.
2. Export its first page as a 600 px wide WebP into `public/images/catalogues/` (e.g. `sips -s format png --resampleWidth 600 file.pdf --out cover.png && cwebp -q 75 cover.png -o cover.webp`).
3. Add or update its entry in `src/components/sections/Catalogues.tsx`.

## Docs

- `GLOSSARY.md` – the terms we use (Distributor, Dealer, Market, …)
- `docs/adr/` – architecture decisions
