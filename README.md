# Sisi Club — Marketing Website

One-page marketing site for **Sisi Club**, a women-only hiking & wellness community based in Geneva. Members walk the trails around Geneva and the high Alps (Gstaad, Zermatt), bring their dogs, and gather for yoga, pilates, and matcha. Named after Empress Elisabeth of Austria ("Sisi"), a famously restless walker who was never without a hound.

Live domain: **sisi.club** · Social: **@sisiclub**

## Stack

- [Vite](https://vite.dev) + [React 19](https://react.dev) + TypeScript
- Plain CSS with design tokens as custom properties (`src/styles.css`) — no CSS framework
- Fonts: Cormorant Garamond (display) + Mulish (body) via Google Fonts
- Fully static output — deploys anywhere (Vercel, Netlify, Cloudflare Pages)

## Development

```sh
pnpm install
pnpm dev       # local dev server
pnpm build     # typecheck + production build to dist/
pnpm preview   # serve the production build locally
```

## Structure

```
src/
  App.tsx               section order for the one-pager
  data.ts               trips, testimonials, FAQ, Instagram posts/links, contact email
  icons.tsx             brand SVG icons (heart, paw, mountain, flower, moon, instagram)
  styles.css            design tokens + all component styles
  components/           one component per page section
public/images/          client photography as WebP (hero, founder, picnic, empress, hikes/)
                        + og-picnic.jpg (JPEG social-preview card — some crawlers drop WebP)
```

Section order (per client feedback, July 2026): hero → values → **the story of
Sisi** → walks → **Instagram grid** → Lenka & Falco → testimonials (opening
with the picnic band) → FAQ → join. The site is positioned as a support site for **@sisiclub** on
Instagram: dual CTA in the hero (join first, follow second), curated static
post grid (`INSTAGRAM_POSTS` in `src/data.ts`), and joining happens via
Instagram DM rather than a form.

Content edits (new walks, testimonials, FAQ answers) only require touching `src/data.ts`.

## Instagram & marketing production

- **`docs/instagram-playbook.md`** — the canonical rules for generating on-brand social
  imagery: formats & dimensions, palette, typography, layout system, post recipes,
  hashtag library, the HTML-canvas → JPG export workflow, and the brand photo-filter
  presets (§12). Claude Code follows this when asked to make a post or filter a photo.
- **`_handoff/instagram-kit/`** — the as-delivered client social kit (frozen): open
  `Instagram-Kit.html` in a browser to see the profile, 9-post launch grid, story
  templates and highlight covers rendered; reference photography in `img/`.

## Brand rules (from the client)

- Brand is spelled **Sisi** (one "s" in the middle), never "Sissi".
- **Wellness positioning — no alcohol references** anywhere in copy.
- Geneva summers are hot — no "bring a layer"-type copy.
- Tone: warm, editorial, a little literary; unhurried; inclusive ("new girlfriends always welcome").

## Before shipping / TODO

- [x] **Add the social media kit to `_handoff/`** — now in `_handoff/instagram-kit/`; production rules distilled into `docs/instagram-playbook.md`.
- [ ] **Swap Instagram grid placeholders** — `INSTAGRAM_POSTS` in `src/data.ts` reuses site photography and links to the profile; replace with real post images + post URLs (rebuild from `_handoff/instagram-kit/`).
- [ ] **Confirm the Instagram handle** — the site assumes `@sisiclub` (from the original brief); verify before launch.
- [ ] **Replace placeholder content with real material from the client**: testimonials (`src/data.ts`), stat numbers and Lenka's founding story (`src/components/About.tsx`).
- [ ] **Verify the `hello@sisi.club` mailbox exists** — `CONTACT_EMAIL` was aligned to the site domain (the handoff showed `hello@sisiclub.ch`).
- [ ] **Confirm real trip dates** — all dates in `src/data.ts` are placeholders (Lauenen's "Sep 6" is invented).
