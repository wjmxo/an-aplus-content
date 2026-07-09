# Visual Self-Check

## Module 01 - Hero
- Verdict: usable after crop adjustment.
- Reference compared: `reference/09-longsleeve-henley-ribbed.jpg`
- Layout match: warm oatmeal base, serif all-caps title, script accent word, large right-side apparel visual, white sticker inset, camel keyword ribbon.
- Mobile readability: headline is large and left-aligned; product remains first-read on the right.
- Product truth: generated from `assets/color-wine.jpg` and `assets/color-white.jpg`; notched split V neckline, two buttons, long sleeves, and ribbed knit texture remain visible.
- Fix applied in rerun: arch crop shifted right to reduce empty wall; the White sticker crop is tightened to the white option area only.

## Module 02 - Detail Grid
- Verdict: usable after button-crop adjustment.
- Reference compared: `reference/14-waffle-knit-henley.jpg`
- Layout match: four close-up cards, warm oatmeal base, serif heading, rounded pill labels, and low text density.
- Mobile readability: labels are large and short; each card carries one detail only.
- Product truth: generated from `assets/color-*.jpg` references; split notched neckline, decorative two-button crop, ribbed knit, and sleeve cuff remain visible.
- Fix applied in rerun: created `assets/detail-02-buttons.png` from the generated detail asset so the Decorative Buttons label corresponds to two visible buttons.

## Module 03 - Fabric
- Verdict: usable after spacing adjustment.
- Reference compared: `reference/21-longsleeve-vneck-ribbed-fall.jpg`
- Layout match: large fabric macro card, tilted sticker crop, left text block, serif headline, warm neutral ground, and low text density.
- Mobile readability: composition pill and three fabric attribute pills no longer overlap.
- Product truth: generated from `assets/color-wine.jpg` and `assets/color-white.jpg`; rib texture, soft fold, two-button Henley detail, and white/wine color options remain visible.
- Fix applied in rerun: reduced bottom pill height and spacing so composition and feature tags stay separated.

## Module 04 - Suitable Scenarios
- Verdict: usable after vertical crop adjustment.
- Reference compared: `reference/26-henley-button-slimfit.jpg`
- Layout match: centered serif heading, four horizontal lifestyle panels, bottom camel label strips, and consistent warm tone.
- Mobile readability: Work / Daily / Shopping / Date labels are clear; each scene remains visually distinct.
- Product truth: generated from `assets/color-*.jpg` references; all panels keep the long sleeve Henley, notched neckline, two buttons, and ribbed fitted shape readable.
- Fix applied in rerun: shifted image object position upward so model faces are not over-cropped.

## Module 05 - Styling And Color
- Verdict: usable as a combined styling and color-selection module.
- Reference compared: `reference/26-henley-button-slimfit.jpg`
- Layout match: left text block, tilted product card, color selection card, and camel keyword ribbon.
- Product truth: shows the five confirmed color options: White, Red, Wine, Brown, and Black.
- Residual risk: true flat-lay styling photos are not available yet, so this version uses a product card plus swatches rather than a full accessories flat-lay.

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
- Modules 02 and 03 now have generated macro assets; real macro photos can still replace them later if exact production texture validation is required.
- Module 05 would benefit from a real flat-lay image with jeans, boots, belt, bag, and cardigan/jacket if a stronger styling proof is needed.
