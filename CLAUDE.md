# Sisi Club

One-page marketing site (Vite + React 19 + TS, plain CSS design tokens in `src/styles.css`)
for Sisi Club — a free women's outdoor club in Geneva. *Women, mountains and dogs.*
See `README.md` for structure and the pre-launch TODO list.

```sh
pnpm dev / pnpm build / pnpm preview
```

## Instagram & marketing image production

**Before generating ANY social/marketing image (feed post, carousel, story, avatar) or
applying a filter/grade to a photo, read [`docs/instagram-playbook.md`](docs/instagram-playbook.md)
and follow it exactly.** It defines formats (feed = 4:5, 1080 × 1350; story = 1080 × 1920),
palette, typography, layout patterns, post recipes, hashtags, the HTML-canvas → JPG export
workflow, and the brand filter presets (§12 — "Sisi Standard" is the default when someone
says "put a filter on it").

The as-delivered client kit (rendered examples + reference photography) is frozen in
`_handoff/instagram-kit/` — open `Instagram-Kit.html` in a browser to see the system.
The playbook in `docs/` wins if they disagree.

## Brand rules (client — apply to site copy AND social)

- Spelled **Sisi**, never "Sissi". Site **sisi.club** · **hello@sisi.club** · **@sisiclub**.
- **Wellness positioning — no alcohol references anywhere.** Toast with matcha.
- Geneva summers are hot — never "bring a layer" / cold-weather copy or styling.
- Voice: warm, unhurried, a little witty, editorial; inclusive and low-pressure
  ("free to join", "every pace welcome"). Sparse emoji (max 1–2: 🐾 🏔️ 🍵 🤍).
- Fonts: Cormorant Garamond (display, often italic) + Mulish (body). Palette: cream
  `#F6F0E6`/`#FCF9F2`, brown `#463F36`, gold accent `#9a7f4f`, sage `#879375` (rare).
- Named for Empress Elisabeth of Austria ("Sisi", 1837–1898) — heritage angle for
  storytelling; the site is a support site for the Instagram (join via IG DM).
