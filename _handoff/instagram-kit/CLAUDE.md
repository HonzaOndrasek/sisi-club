# Sisi Club — Instagram production playbook

Everything Claude Code needs to generate on-brand Sisi Club Instagram images.
Read this file top to bottom before producing any post. Match it exactly — the
brand's whole appeal is that every post looks like it came from the same quiet hand.

---

## 1. What we're making

Sisi Club is a free women's outdoor club in Geneva — **women, mountains and dogs.**
We walk the Alps, do meadow yoga, and end with a matcha. The Instagram feed is the
front door: painterly photographs and quiet cream text-cards, one steady voice.

Deliverables you'll be asked to generate:

- **Feed posts** — single images and carousels, **4:5 portrait, 1080 × 1350 px.**
- **Stories / Reels covers** — **9:16, 1080 × 1920 px.**
- Occasionally: profile avatar (320 × 320), highlight covers (circular crops of story art).

Output is always **flat image files (JPG, quality ~90)** — never HTML handed to the user.
Build the design as a fixed-size HTML canvas, render it, export the image. See §9.

---

## 2. Brand facts (do not get these wrong)

- Name is spelled **Sisi** — one *s* in the middle. **Never "Sissi".**
- Website: **sisi.club** · Email: **hello@sisi.club** · Handle: **@sisiclub**
- Positioning is **wellness**. **No alcohol references anywhere** — we toast with matcha, not wine.
- Geneva summers are hot. **Never tell people to "bring a layer"** or dress warm.
- City: **Geneva**, walking the Alps around Lac Léman, Gstaad, Zermatt.
- Named for **Empress Elisabeth of Austria — "Sisi" (1837–1898)** — who walked for hours
  every day with a hound at her heel. "The original wellness icon." Use her story for
  heritage/Legacy content: gymnastics rings at the Hofburg, riding, fencing, her
  wolfhound. Movement as ritual, a century before "wellness" was a word.

---

## 3. Voice & copy

Warm, unhurried, a little witty. Talks like a friend who'd rather be on the trail.

- Short sentences. Sensory, specific ("twelve kilometres, three mountain passes, one
  very muddy dog"), never corporate.
- Lead with a feeling or an image, not an announcement.
- Inclusive and low-pressure: "free to join," "every pace welcome," "no one left behind."
- Sparse, warm emoji only — 🐾 🏔️ ⛰️ 🌅 🍵 🧺 🤍. Never more than one or two per caption.
  (Emoji belong in captions; keep them off the image art unless it's a small trail badge.)
- Sign-off / CTA: "Come walk with us. Link in bio ↓" · "It's free — link in bio."
- Caption shape: hook line → one short paragraph → CTA → hashtag block on its own lines.

---

## 4. Formats & exact dimensions

| Deliverable | Ratio | Pixels | Notes |
|---|---|---|---|
| Feed post (single) | 4:5 | **1080 × 1350** | Largest IG allows; uncropped on grid + feed |
| Feed carousel — every slide | 4:5 | **1080 × 1350** | All slides identical ratio — never mix in a square |
| Story / Reel cover | 9:16 | **1080 × 1920** | |
| Profile avatar | 1:1 | 320 × 320 | Centred, uncropped |

**Why 4:5 and not square:** Instagram's profile grid switched to 4:5 portrait thumbnails
in 2025. Square (1:1) posts get centre-cropped on the grid, cutting off the top and bottom.
4:5 is the largest format Instagram allows and shows uncropped on both grid and feed.
**Always design feed posts at 1080 × 1350.**

> Note: the reference `Instagram Kit` file in this repo shows its post mockups at 1:1 —
> those predate the 4:5 switch and are illustrative only. The rule is 4:5.

---

## 5. Colour palette

Warm, sun-faded, earthy. Cream and brown do the work; gold is the one accent; sage is rare.

**Neutrals / grounds**
- `#F6F0E6` — page cream (default light background)
- `#FCF9F2` — card cream (text cards, slightly lighter than the page)
- `#EFE7D7` — secondary band (alternating sections)
- `#e8dcc2` / `#e7ddc9` — warm tan (placeholder / image backing)

**Ink / dark grounds**
- `#463F36` — primary brown — body ink on cream **and** the dark-card background
- `#3f382f` — heading brown (headlines on cream)
- `#2b261f` / `#2a251f` — espresso (near-black, page backing behind a canvas)

**Gold accent (primary)**
- `#9a7f4f` — the accent: eyebrows, rules, links, icons
- `#b0a079` / `#b3a37e` — muted gold (footers)
- on dark grounds use the lighter golds: `#c9b48a`, `#d6c19a`, `#e3d6b9`, `#e8d6ad`, `#dccdac`, `#f2e6c9`

**Sage accent (secondary — wellness posts only)**
- `#879375` / `#6f8064` / `#94a182`

**Text**
- On cream: `#4a4136` (strong), `#5e5648` / `#6f6557` (body), `#9a9082` / `#9a8f74` (muted)
- On dark: `#f6f0e6` (headlines), `#cabb9d` / `#dccdac` (body)

Selection colour: `background:#ddc79a; color:#463f36`.

---

## 6. Typography

Two families, loaded from Google Fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Mulish:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

- **Cormorant Garamond** (serif) — all display / headlines. Often *italic* for the emotive
  line. This is the soul of the brand — big, airy, low line-height.
- **Mulish** (sans-serif) — body copy, eyebrows/labels, UI, CTAs, hashtags.

**Type scale — production canvas (1080 px wide feed post):**

| Role | Font | Size / weight | Treatment |
|---|---|---|---|
| Eyebrow / section label | Mulish 700 | 25–27px | UPPERCASE, letter-spacing 0.20–0.26em, gold |
| Brand wordmark ("SISI CLUB") | Mulish 700 | ~26px | UPPERCASE, letter-spacing 0.22em, subtle text-shadow on photos |
| Hero headline | Cormorant Garamond 400–500 | 100–160px | line-height ~0.98; two-tone (2nd line italic gold) |
| Card headline | Cormorant Garamond 400 | 74px | line-height ~1.08 |
| Emotive / pull-quote line | Cormorant Garamond *italic* | 42–48px | line-height ~1.3, gold or cream |
| Body | Mulish 400 | 29–32px | line-height ~1.5 |
| CTA pill | Mulish 700 | 23px | UPPERCASE, letter-spacing 0.10–0.14em |

Scale everything to the canvas — a story (1080 × 1920) uses the same ratios; the web
reference kit uses smaller `clamp()` sizes because it's a responsive web page, not an export.

---

## 7. Layout system

**Canvas.** Root element is a fixed box, `overflow:hidden`:
`width:1080px; height:1350px` (feed) or `1080px; height:1920px` (story).

**Safe margins.** Keep everything important inside a **64 px** inset from every edge.
- Photo posts: content block bottom-left, 64px side margins, ~84px from the bottom.
- Padded text cards: 76–96px padding all round.
- Top label / wordmark: 60–64px from the top.

**Composition patterns**
- **Photo post:** full-bleed `object-fit:cover` image → dark gradient scrim rising from the
  bottom → wordmark top-left → italic serif headline bottom-left.
  Scrim: `linear-gradient(to top, rgba(46,40,31,0.74), rgba(46,40,31,0.16) 62%, transparent)`.
- **Text card:** cream `#FCF9F2` ground, eyebrow (gold) → big serif headline (`#3f382f`) →
  body (`#6f6557`) → footer wordmark "SISI CLUB · GENEVA" (uppercase, muted gold). Optional
  1px accent border: gold `rgba(154,127,79,0.32)` or sage `rgba(135,147,117,0.4)`.
- **Dark card:** `#463F36` ground, gold eyebrow (`#c9b48a`) → cream serif headline
  (`#f6f0e6`) → body (`#cabb9d`) → thin gold rule + italic attribution.

**Grid rhythm (9-post launch grid).** Alternate a painterly **photo** with a quiet **cream
card**; place the single **dark card** in the middle to anchor the grid. The whole grid
should read as one calm picture, not nine loud ones.

---

## 8. Post-type recipes

Each is a full-bleed 1080 × 1350 canvas unless noted.

1. **Welcome / hero photo** — full-bleed trail photo, wordmark top-left, italic serif
   headline ("Walk the Alps, in good company.") + tiny caps sub ("Geneva · women, mountains & dogs").
2. **Who-we-are text card** — cream, eyebrow "WHO WE ARE", serif headline, one warm paragraph.
3. **Lakeside / golden-hour photo** — as recipe 1, softer scrim.
4. **Sisi story dark card** — `#463F36`, eyebrow "OUR NAMESAKE", serif headline, body, gold
   rule, italic "Elisabeth of Austria · 1837–1898".
5. **Dog spotlight photo** — dog hero, italic headline, small caps credit line ("Falco · chief morale officer").
6. **Next-walk announcement** — gold-accent cream card: "📍 NEXT WALK" eyebrow → serif place
   name → italic date · location (gold) → chip row (`8 km` · `≈ 3 hrs` · `Gentle` · `🐾 Dog-friendly`,
   rounded pills `border-radius:24px`, tan fill, gold border) → "Free to join — link in bio · @sisiclub".
7. **Summit photo** — bigger mountain, "Some views are worth the climb."
8. **Wellness text card** — sage-accent cream, eyebrow "AFTER THE WALK", serif headline,
   bulleted list (sage dots): trail yoga / slow pilates / matcha & good bread.
9. **Picnic photo** — group + dogs, "Tea, bread, wildflowers — and a dozen good dogs."

**Carousel frames** (see `Legacy of Sisi` example — 4 frames, 1080 × 1350 each):
- Cover: portrait photo, scrim, "The Legacy of Sisi / No. 01", giant two-tone serif title,
  cream CTA pill "A story in 3 parts · swipe →".
- Content frames alternate photo-with-headline and dark stat/text cards; keep the eyebrow
  label (e.g. "The Walk", "The Body", "The Companions") top-left on every frame.
- Last frame ends on a gold CTA pill: "Walk with us → link in bio".

**Story templates** (1080 × 1920):
- **Welcome** — photo + scrim, "@sisiclub" caps top-centre, italic serif "Come walk with us.",
  caps sub, cream pill "Tap to read our story →".
- **Next walk** — photo top ~55%, cream panel bottom with place / date / stats / dark pill.
- **Poll** — photo + scrim, italic question, white two-option card (mock IG poll).
- **Quote** — dark `#463F36`, big gold open-quote, italic Sisi line, gold rule, "IN SISI'S SPIRIT".

---

## 9. Build & export workflow (how to actually make the image)

Claude Code should treat every deliverable as **one fixed-pixel HTML canvas → one JPG**.

1. **Build** a standalone HTML file whose root element is exactly the target size
   (`1080 × 1350` or `1080 × 1920`), `overflow:hidden`, styles inline, fonts from the
   Google Fonts link in §6. Put the reference photos in a sibling `img/` folder.
2. **Wait for fonts + images to load**, then **screenshot the root element** (not the
   viewport) so the output is exactly 1080 px wide. Render at `deviceScaleFactor: 2` for
   crispness, or capture 1:1 if file size matters.
3. **Save as JPG, quality ~90.** Naming: `NN-slug.jpg` (`01-cover.jpg`, `02-the-walk.jpg`).
   Feed exports go in `export4x5/`; stories in `export/stories/` (mirrors this repo).

**Carousels:** either one HTML file per frame, or a single track file that exposes a
`window.__setFrame(i)` hook and wraps its nav arrows/dots in an element you hide before
capture (see `Legacy of Sisi - Carousel 4x5.dc.html`). Capture each frame in turn.

Example Playwright capture (adapt to your toolchain):

```js
const { chromium } = require('playwright');
const browser = await chromium.launch();
const page = await browser.newPage({ deviceScaleFactor: 2 });
await page.goto('file://' + require('path').resolve('post.html'));
await page.evaluate(() => document.fonts.ready);          // fonts loaded
const el = await page.$('#canvas');                        // the 1080×1350 root
await el.screenshot({ path: 'export4x5/01-cover.jpg', quality: 90, type: 'jpeg' });
await browser.close();
```

**Verify before delivering:** every exported file must be exactly 1080 × 1350 (or
1080 × 1920), key text ≥ the §6 sizes, and nothing important within 40 px of any edge.

---

## 10. Hashtag library

Start every caption with the **brand** tags, then pull a few from the other groups.
Keep the total **under ~15** so it reads clean. Put them on their own lines under the caption.

- **Always-on / brand:** `#sisiclub` `#sisiclubgeneva` `#womenmountainsdogs` `#inSisisSpirit`
- **Place:** `#geneva` `#genève` `#lacléman` `#swissalps` `#gstaad` `#zermatt` `#myswitzerland` `#suisse`
- **Community:** `#womenwhohike` `#girlswhohike` `#hikingfriends` `#womenofswitzerland` `#genevalife` `#hikingcommunity`
- **Dogs & lifestyle:** `#dogfriendlyhikes` `#traildog` `#adventuredog` `#slowliving` `#mountainmornings` `#goldenhour`
- **Wellness:** `#meadowyoga` `#outdooryoga` `#pilates` `#matcha` `#mindfulmovement` `#wellnesswalk`

**Ready-to-paste starter set:**
`#sisiclub #sisiclubgeneva #womenmountainsdogs #geneva #lacléman #swissalps #womenwhohike #girlswhohike #dogfriendlyhikes #slowliving #myswitzerland #goldenhour`

---

## 11. Imagery direction

- Painterly, warm, golden-hour light. Women on alpine trails around Geneva, always with dogs.
- Muted earthy tones that already sit inside the palette — sun-faded greens, tan, cream, brown.
- Candid and unhurried: walking side by side, meadow picnics, a dog mid-trail, matcha at a summit.
- Real reference photos live in `img/` (hero-walk, lakeside, dog-hug, summit, picnic, lauenen,
  fivelakes, sisi-portrait). Swap in new photography that matches this mood.
- No alcohol, no cold-weather styling, no stocky/corporate posing.

---

## 12. Files in this repo

- **`CLAUDE.md`** — this playbook (Claude Code reads it automatically).
- **`README.md`** — short human intro.
- **`Instagram-Kit.html`** — the full launch kit as a self-contained page (open in any browser):
  profile, 9-post grid with captions, 4 story templates, highlight covers, hashtag library.
  This is the visual source of truth for the system above.
- **`Instagram Kit.dc.html`** + **`support.js`** — editable source of the kit.
- **`img/`** — reference photography used across the kit.
