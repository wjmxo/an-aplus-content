# Visual Self-Check

## Continuous Canvas 01-03
- Source: `modules/continuous-01-03.html`
- Output master: `output/continuous-01-03.png`
- Slice outputs: `module-01-hero.png`, `module-02-detail-grid.png`, `module-03-fabric.png`
- Slice safety: y=600 crosses the soft camel transition band and lower body continuation only; y=1200 crosses the neutral transition band. Faces, titles, and button details are kept at least 60px away from the slice lines.
- Layout change: increased photo density with overlapping model stickers, macro detail cards, bleed-to-edge crops, large script accents, watermark letters, and hashtag tags.
- Verdict: pass.

## Module 01 - Hero
- Reference compared: `reference/09-longsleeve-henley-ribbed.jpg`
- Result: stronger magazine density than the prior version; main model sits inside the arch with breathing room, while Wine, White, and Brown sticker crops add overlap and edge energy.
- Product truth: white sticker contains the white product only; Henley neckline, two buttons, long sleeves, and ribbed texture remain visible.

## Module 02 - Detail Grid
- Reference compared: `reference/14-waffle-knit-henley.jpg`
- Result: pass after converting from sparse detail cards into a packed editorial strip with five photo crops and a side model.
- Product truth: detail labels match visible areas: notched V neck, decorative buttons, ribbed knit, and long sleeves.

## Module 03 - Fabric
- Reference compared: `reference/21-longsleeve-vneck-ribbed-fall.jpg`
- Result: pass after moving decorative script and black sticker so title, body copy, and fabric pills remain readable.
- Product truth: fabric macro, rib texture, two-button Henley crop, and color references stay aligned with `assets/color-*.jpg`.

## Continuous Canvas 04-05
- Source: `modules/continuous-04-05.html`
- Output master: `output/continuous-04-05.png`
- Slice outputs: `module-04-scenarios.png`, `module-05-styling-color.png`
- Slice safety: y=600 falls inside the camel divider gap between scene panel and color wall; no face, title, product detail, or key text sits within 60px of the cut.
- Layout change: module 04 uses full-width lifestyle panels and overlay typography; module 05 switches to a tilted sticker color wall, avoiding another left-text/right-image repeat.
- Verdict: pass.

## Module 04 - Suitable Scenarios
- Reference compared: `reference/26-henley-button-slimfit.jpg`
- Result: pass. Four model panels fill the screen edge-to-edge, with overlay serif heading, script `Outfits`, #OOTD tag, mini feed, and dashed arrow.
- Product truth: generated scenes keep the notched neckline, two visible buttons, ribbed fitted shape, and long sleeve silhouette readable.

## Module 05 - Styling And Color
- Reference compared: `reference/26-henley-button-slimfit.jpg`
- Result: pass after moving the `color` script off the explanatory copy and lowering the swatches so the full body text is readable.
- Product truth: five confirmed colors are shown with labels: Wine, Red, White, Brown, and Black.

## Module 06 - Size Chart
- Reference compared: `reference/09-longsleeve-henley-ribbed.jpg`
- Result: pass. This module remains independent and uses the requested gray `待素材` placeholder instead of a CSS/SVG garment illustration.
- Product truth: product measurements use Bust and Length only, with XS-2XL body measurements and the manual-measurement note.

## Module 07 - Brand Story Closing
- Reference compared: `reference/26-henley-button-slimfit.jpg`
- Result: pass. This module remains independent and uses five real product photos in white sticker frames with color dots and labels.
- Product truth: no CSS-drawn product illustration remains.

## Missing Assets
- Module 06 still needs a real measurement-guide photo if the final A+ should show Bust/Length callouts instead of the current `待素材` placeholder.
