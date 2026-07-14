# Sisi Club — Instagram

Brand and production kit for the **@sisiclub** Instagram — a free women's outdoor club in
Geneva. *Women, mountains and dogs.*

This repo is the single source of truth for making on-brand Instagram content, and is set
up so **Claude Code** can generate post images directly from it.

## What's here

- **[`CLAUDE.md`](./CLAUDE.md)** — the full production playbook: brand facts, voice,
  exact formats & dimensions, colour palette, typography, layout system, post-type recipes,
  the hashtag library, and the build-and-export workflow. **Start here.**
- **`Instagram-Kit.html`** — open in any browser to see the whole system rendered: the
  profile, a nine-post launch grid with captions, four story templates, highlight covers,
  and the hashtag library. Self-contained — no build step.
- **`Instagram Kit.dc.html`** + `support.js` — editable source of the kit.
- **`img/`** — the reference photography.

## Generating posts with Claude Code

1. Point Claude Code at this folder — it reads `CLAUDE.md` automatically.
2. Ask for a post, e.g. *"Make a next-walk announcement for Lauenen Lake, Sat 12 July."*
3. Claude Code builds a 1080 × 1350 HTML canvas to the spec and exports a JPG into
   `export4x5/` (stories → `export/stories/`).

## The essentials (full detail in `CLAUDE.md`)

- **Feed posts are 4:5 portrait — 1080 × 1350 px.** Stories are 9:16 — 1080 × 1920 px.
- Type: **Cormorant Garamond** (serif display, often italic) + **Mulish** (sans body/UI).
- Palette: cream `#F6F0E6` / `#FCF9F2`, brown `#463F36`, gold accent `#9a7f4f`, sage `#879375`.
- Voice: warm, unhurried, witty. Wellness positioning — **no alcohol**. It's **Sisi**, never "Sissi".
- Site **sisi.club** · **hello@sisi.club** · **@sisiclub**.
