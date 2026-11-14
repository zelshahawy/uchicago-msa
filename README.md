# UChicago MSA

A simple, responsive home for the University of Chicago Muslim Students Association, built with Next.js App Router, TypeScript, and pnpm.

## Develop

```sh
pnpm install
pnpm dev
```

Open http://localhost:3000.

## Verify and build

```sh
pnpm typecheck
pnpm build
```

The site uses Next.js static export. `pnpm build` writes the deployable site to `out/`. No database, API keys, or environment variables are required. Deploy `out/` to any static host, or remove `output: "export"` in `next.config.ts` to use a Next.js server.

## Edit

- `src/app/page.tsx`: page copy, Arabic lettering, and sections.
- `src/lib/community.ts`: all eight direct resource links from the MSA Linktree, plus contact and map links.
- `src/app/globals.css`: colors, typography, layout, and responsive styles.
- `src/components/header.tsx`: desktop and mobile navigation.
- `src/app/layout.tsx`: metadata and self-hosted font imports.

The Arabic uses real text set in Aref Ruqaa, with explicit Arabic language and right-to-left attributes. Fonts are bundled locally through Fontsource. Instrument Serif and DM Sans provide the English typography. There are no runtime Google Fonts requests.

## Content sources

The page intentionally avoids dated event listings or prayer times. The Rockefeller Chapel prayer location was supplied by the site owner. All eight resource destinations were read from the live MSA Linktree on November 14, 2026. Event updates and membership lead directly to the MSA's existing channels.

- [University of Chicago Spiritual Life: Muslim community](https://spirit.uchicago.edu/community/religious-spiritual-groups/muslim/) — organization description and contact email.
- [UChicago MSA community links](https://linktr.ee/ucmsa_shura) — membership and resources.
- [MSA mailing list](https://lists.uchicago.edu/web/info/msaforum).
- [University prayer spaces](https://spirit.uchicago.edu/spaces/places-for-prayer/).
- [UChicago Divinity ministry handbook](https://divinity.uchicago.edu/sites/default/files/Ministry%20Program%20Handbook%202023_FINAL-092623.pdf) — Instagram handle.

Confirm contact details with the MSA board before a broad public launch. The Sites deployment begins private.
