# One Vercel project per Market

The Distributor runs two Market sites — www.gabelpalice.sk (Slovak) and www.gabel.cz (Czech) — from this single Astro repo. Each Market is its own Vercel project with its own domain; a `MARKET=sk|cz` build variable selects which Market's pages, contacts, Dealers, Rentals and Partner organisations are built. Both sites stay fully static, and each gets its own analytics, Search Console property and redirects. The two sites link page to page with `hreflang` and a language switch.

## Considered Options

- **One Vercel project serving both domains, routing by hostname.** Rejected: Astro's built-in per-domain routing needs a server, which we'd be adding only to serve static pages, and it would mix both Markets' analytics and redirects in one project.
- **A `/cz/` subfolder on gabelpalice.sk.** Rejected: the Distributor bought gabel.cz specifically for the Czech Market.
