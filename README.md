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
  data.ts               trips, testimonials, FAQ, pace options, contact email
  icons.tsx             brand SVG icons (heart, paw, mountain, flower, moon)
  styles.css            design tokens + all component styles
  components/           one component per page section
public/images/          client photography (hero, founder, picnic, empress, hikes/)
```

Content edits (new walks, testimonials, FAQ answers) only require touching `src/data.ts`.

## Brand rules (from the client)

- Brand is spelled **Sisi** (one "s" in the middle), never "Sissi".
- **Wellness positioning — no alcohol references** anywhere in copy.
- Geneva summers are hot — no "bring a layer"-type copy.
- Tone: warm, editorial, a little literary; unhurried; inclusive ("new girlfriends always welcome").

## Before shipping / TODO

- [ ] **Confirm the contact email** — the design handoff showed `hello@sisiclub.ch`, but the domain is `sisi.club`. Update `CONTACT_EMAIL` in `src/data.ts`.
- [ ] **Wire the signup form to a real backend** — it currently validates (required name, valid email, honeypot) and shows the success state locally without POSTing anywhere. See the TODO in `src/components/Join.tsx`.
- [ ] **Optimize images** — the source photos in `public/images/` are large PNGs from the client; convert to WebP/AVIF with `srcset` before heavy traffic.
- [ ] Update trip dates in `src/data.ts` as the season progresses.
