# Visual Self-Check

## Module 01 - Hero
- Verdict: usable on first visual self-check pass.
- Reference compared: `reference/09-longsleeve-henley-ribbed.jpg`
- Layout match: warm oatmeal base, serif all-caps title, script accent word, large right-side apparel visual, white sticker inset, camel keyword ribbon.
- Mobile readability: headline is large and left-aligned; product remains first-read on the right.
- Product truth: generated from `assets/color-wine.jpg` and `assets/color-white.jpg`; notched split V neckline, two buttons, long sleeves, and ribbed knit texture remain visible.
- Fix needed: none for this pass.

## Module 06 - Size Chart
- Verdict: usable after requested placeholder adjustment.
- Reference compared: `reference/09-longsleeve-henley-ribbed.jpg`
- Layout match: warm oatmeal base, serif heading, structured size-table ending, fit sliders, placeholder area for missing measurement photo.
- Mobile readability: high-density module, but table values remain readable at 2x export.
- Product truth: product measurement uses Bust and Length only, matching confirmed data. Sleeve was removed.
- Fix applied: replaced the CSS-drawn garment guide with a gray `待素材` placeholder because the measurement-guide photo is not available in `assets/`.

## Module 07 - Brand Story Closing
- Verdict: usable after replacing illustration with real product photos.
- Reference compared: `reference/26-henley-button-slimfit.jpg`
- Layout match: warm neutral background, serif headline, small brand mark, collage-style tilted cards, camel keyword ribbon.
- Mobile readability: headline and bottom keywords are readable; color names are clear.
- Product truth: uses the five available product photos in `assets/`: White, Red, Wine, Brown, and Black.
- Fix applied: removed CSS product illustration and rebuilt the color cards as white sticker frames with real product photos, 2-5 degree rotations, color dots, and color-name labels.

## Missing Assets
- Module 06 still needs a real measurement-guide photo if the final A+ should show Bust/Length callouts instead of the current `待素材` placeholder.
