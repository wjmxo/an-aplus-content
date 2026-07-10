# Visual Self-Check

## Generated Asset Rule
- `assets/color-*.jpg` is now used only as garment reference input and is not directly referenced by the active module artwork.
- New generated assets are stored in `assets/gen/` and documented in `assets/gen/INDEX.md`.
- Final cutout model PNGs use transparent backgrounds with white sticker-style outline and soft shadow in the HTML.
- New pose assets added this round: `gen-model-wine-side-01.png`, `gen-model-white-back-01.png`, and `gen-model-red-sit-02.png`. Pose check contact sheet is saved at `compare/pose-generated-check.jpg`.
- Black-primary assets added this round: `gen-portrait-black-anchor-01.png`, `gen-portrait-black-close-01.png`, `gen-model-black-back-01.png`, and `gen-model-black-sidewalk-01.png`. Black pose check contact sheet is saved at `compare/black-pose-generated-check.jpg`.
- Rule 19/20 assets added this round: `gen-model-black-walk-02.png`, `gen-model-black-sit-01.png`, `gen-detail-wine-neckline-02.png`, `gen-detail-wine-button-01.png`, and `gen-model-duo-black-calm-white-back-02.png`.
- Product-feature final assets added this round: `gen-detail-wine-stretch-01.png` for the Easy Stretch fabric proof.
- Full-page asset allocation is recorded in `assets/gen/INDEX.md`; non-exempt model assets are not reused across modules 01-07.
- Rule 22 gaze/expression fields and Draft redundancy marks are recorded in `assets/gen/INDEX.md`.

## Continuous Canvas 01-03
- Source: `modules/continuous-01-03.html`
- Output master: `output/continuous-01-03.png`
- Slice outputs: `module-01-hero.png`, `module-02-detail-grid.png`, `module-03-fabric.png`
- Slice safety: y=600 crosses the soft camel transition band and low-detail lower-body/background zones; y=1200 crosses the neutral transition band near lower-body/blank zones. Faces, hands, headlines, button macro cards, and key text stay at least 60px away from the slice line.
- Layout change: main model is a cutout sticker, not a rectangular photo card. Detail and fabric images remain rectangular white cards as allowed small/detail images.
- Required decorative elements: one large two-line `Henley Mood` script title, small `Detail Proof` / `Soft Touch` script accents, watermark letters, # tags, curled dashed arrows, and on-model dashed callouts are present.
- Rule 17 typography: uses italic serif notes, expanded-letter labels, 7.5% translucent watermark words, brown + dark gray script accents, and wavy underlines without adding font families.
- Annotation control: the former Hero/Fabric italic notes were removed where they competed with direct proof labels; the detail bridge line stays below the three cards and does not overlap the slice line.
- On-model callout endpoint check: both Hero callouts use hand-drawn dashed connectors ending in small dots near the black protagonist neckline/button area, with label text moved away from the `Henley Mood` script cluster.
- Color bridge check: module 02 now states `Details shown in Wine — identical design across all five colors`, resolving the black-protagonist/wine-detail color-read gap.
- Product proof check: module 03 now pairs ribbed texture with `Easy Stretch` hands-pulling-fabric proof; no unsupported `4-Way` claim is used.
- SVG UI icon exception: module 03 uses linear circle UI icons for Soft Touch / Breathable / Easy Stretch / Machine Wash; these are function icons, not product illustrations.
- Rule 20 layer-order check: the `Soft Touch` script is fully visible and no longer clipped by the fabric photo card; the duplicate card-level `Fabric Display` caption has been removed, leaving only the bottom expanded-letter label.
- Text-to-model bite check: module 01 uses the `#OOTD` tag on the protagonist hand/hem edge, module 02 uses `Detail Proof` near the back-view protagonist, and module 03 uses `#SOFT RIB` near the side-view protagonist.
- Color-weight check: black is the protagonist color for modules 01-03; wine appears only in close-up detail/fabric cards.
- View coverage: module 01 uses black front view, module 02 uses black back over-shoulder view, and module 03 uses black side view.
- Rule 19 model-count check: module 01/02/03 each has one assigned black protagonist asset; no extra support model is used in these modules.
- Detail/fabric uniqueness: module 02 uses independent neckline/button/sleeve close-ups; the fabric swirl macro and stretch proof appear only in module 03.
- Rule 22 active gaze check: 01-03 uses looking-away, over-shoulder, and focused side-view reads instead of repeating camera-facing smiles.
- Three-second scan test: title -> protagonist -> tag/card path is continuous in modules 01-03, with no wide vertical blank band over 200px.
- Verdict: pass after moving script titles away from key headings, removing the overlapping detail note, enlarging the unique module 02/03 protagonists, and moving faces away from slice lines.

## Continuous Canvas 04-05
- Source: `modules/continuous-04-05.html`
- Output master: `output/continuous-04-05.png`
- Slice outputs: `module-04-scenarios.png`, `module-05-styling-color.png`
- Slice safety: y=600 falls through the camel divider and the double-anchor group low-detail torso/waist/leg area, not through faces, hands, titles, or color labels. Both model faces remain more than 60px away from the slice line.
- Layout change: all main models are transparent cutout stickers. The color module uses generated cutout models plus the generated accessory flat-lay group instead of direct product-photo crops.
- Required decorative elements: one large two-line `Outfit Notes` script title, small `Color Story` script accent, curled dashed arrows, # tags, swatches, and accessory flat-lay are present.
- Rule 17 typography: uses the expanded-letter `FRONT + BACK` label, 7.5% translucent watermark words, brown + dark gray script accents, and wavy underlines without adding font families; the former `FIVE SHADES` label was removed to prevent text overlap.
- Rule 21 opacity check: watermark text stays at the 7.5% token; background photo layers stay in the 35-45% token; label backgrounds stay in the 70-85% token; readable text and stickers render at 100%.
- Annotation control: the Style It walking-view italic note and Color Story seated note were removed; no active italic note remains in 04-05.
- Text-to-model bite check: module 04 uses `LAYER READY` overlapping the black front model outer arm/body edge and `#OOTD` biting into the white back model outer shoulder/arm edge; module 05 uses the double-anchor lower-body continuation near the lifted styling capsules and accessory flat-lay. The active duo uses calm no-smile black front plus soft-smile white back for a static/dynamic expression contrast.
- Layout reduction: original single walking anchor and seated model are removed from the active 04-05 canvas; one black-front/white-back double-model group now carries the central anchor role.
- Color-weight check: black remains the primary front read while white adds back-view fit proof; color variety is handled by swatches and accessories.
- Rule 19/20 model-count check: the double-model group is treated as one deliberate cross-slice anchor group; no other model cutout is active in modules 04-05.
- Text-overlap check: the `FIVE SHADES` spaced label was removed because it overlapped the Color Story body/title area; the left body copy was narrowed so it no longer sits under the anchor group.
- Three-second scan test: module 04 reads `STYLE IT YOUR WAY` -> double-model upper body -> `LAYER READY`/`#OOTD`; module 05 reads `FIND YOUR EVERYDAY SHADE` -> anchor-group legs/color swatches -> styling capsules/accessory group, with no major jump or empty vertical band.
- Verdict: pass after switching to the double-model anchor, removing the overlapping spaced label, narrowing body copy, and confirming slice-line safety.

## Module 06 - Size Chart
- Source: `modules/module-06-size-chart.html`
- Output: `output/module-06-size-chart.png`
- Result: right side now uses the black generated cutout model for the measurement guide, not a placeholder or CSS/SVG garment drawing.
- Measurement marks: white dashed BUST / LENGTH / SLEEVE labels are overlaid directly on the model area.
- Table style: rows use alternating light pink and light camel stripes.
- Verdict: pass.

## Module 07 - Brand Story Closing
- Source: `modules/module-07-brand-story.html`
- Output: `output/module-07-brand-story.png`
- Result: color cards now use generated cutout model assets from `assets/gen/` instead of direct `assets/color-*.jpg` crops.
- Layout update: five color cards use slight staggered heights and ±2° rotation, with varied model pose/view assets to reduce same-direction repetition.
- Verdict: pass.

## Residual Risk
- Generated model identity is close enough for a unified A+ page but not perfectly identical across every pose.
- The generated garment details passed the visible check for notched split V neckline, two marble-look buttons, long sleeves, rib texture, and color family, but final production proof can still be improved with real photography later.
- Face/hand zoom check is saved at `compare/cutout-face-hand-check.jpg`; no malformed faces or fingers were found in the current portrait set.
- Pixel slice verification is saved at `compare/slice-verification.md`; all continuous-canvas slices match the exported module images.
