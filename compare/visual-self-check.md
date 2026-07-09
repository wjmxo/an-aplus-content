# Visual Self-Check

## Generated Asset Rule
- `assets/color-*.jpg` is now used only as garment reference input and is not directly referenced by the active module artwork.
- New generated assets are stored in `assets/gen/` and documented in `assets/gen/INDEX.md`.
- Final cutout model PNGs use transparent backgrounds with white sticker-style outline and soft shadow in the HTML.
- New pose assets added this round: `gen-model-wine-side-01.png`, `gen-model-white-back-01.png`, and `gen-model-red-sit-02.png`. Pose check contact sheet is saved at `compare/pose-generated-check.jpg`.
- Black-primary assets added this round: `gen-portrait-black-anchor-01.png`, `gen-portrait-black-close-01.png`, `gen-model-black-back-01.png`, and `gen-model-black-sidewalk-01.png`. Black pose check contact sheet is saved at `compare/black-pose-generated-check.jpg`.
- Rule 19 assets added this round: `gen-model-black-walk-02.png`, `gen-model-black-sit-01.png`, `gen-detail-wine-neckline-02.png`, and `gen-detail-wine-button-01.png`.
- Full-page asset allocation is recorded in `assets/gen/INDEX.md`; non-exempt model assets are not reused across modules 01-07.

## Continuous Canvas 01-03
- Source: `modules/continuous-01-03.html`
- Output master: `output/continuous-01-03.png`
- Slice outputs: `module-01-hero.png`, `module-02-detail-grid.png`, `module-03-fabric.png`
- Slice safety: y=600 crosses the soft camel transition band and low-detail lower-body/background zones; y=1200 crosses the neutral transition band near lower-body/blank zones. Faces, hands, headlines, button macro cards, and key text stay at least 60px away from the slice line.
- Layout change: main model is a cutout sticker, not a rectangular photo card. Detail and fabric images remain rectangular white cards as allowed small/detail images.
- Required decorative elements: one large two-line `Henley Mood` script title, small `Detail Proof` / `Soft Touch` script accents, watermark letters, # tags, and curled dashed arrows are present.
- Rule 17 typography: uses italic serif notes, expanded-letter labels, 7.5% translucent watermark words, brown + dark gray script accents, and wavy underlines without adding font families.
- Color-weight check: black is the protagonist color for modules 01-03; wine appears only in close-up detail/fabric cards.
- View coverage: module 01 uses black front view, module 02 uses black back over-shoulder view, and module 03 uses black side view.
- Rule 19 model-count check: module 01/02/03 each has one assigned black protagonist asset; no extra support model is used in these modules.
- Detail/fabric uniqueness: module 02 uses independent neckline/button/sleeve close-ups; the fabric swirl macro appears only once in module 03.
- Verdict: pass after moving script titles away from key headings, enlarging the unique module 02/03 protagonists, and moving faces away from slice lines.

## Continuous Canvas 04-05
- Source: `modules/continuous-04-05.html`
- Output master: `output/continuous-04-05.png`
- Slice outputs: `module-04-scenarios.png`, `module-05-styling-color.png`
- Slice safety: y=600 falls through the camel divider and walking-model lower leg/blank low-detail area, not through faces, hands, titles, or color labels.
- Layout change: all main models are transparent cutout stickers. The color module uses generated cutout models plus the generated accessory flat-lay group instead of direct product-photo crops.
- Required decorative elements: one large two-line `Outfit Notes` script title, small `Color Story` script accent, curled dashed arrows, # tags, swatches, and accessory flat-lay are present.
- Rule 17 typography: uses italic serif notes, expanded-letter `WALKING VIEW` / `FIVE SHADES` labels, 7.5% translucent watermark words, brown + dark gray script accents, and wavy underlines without adding font families.
- Color-weight check: black is the protagonist color for modules 04-05; color variety is handled by swatches and accessories instead of extra model cutouts.
- Rule 19 model-count check: module 04 uses the black walking protagonist; module 05 uses the black seated protagonist; no white/side-view support model remains in this continuous canvas.
- Anchor/protagonist check: each screen has a single immediately legible protagonist; module 05 keeps `FIND YOUR EVERYDAY SHADE` fully readable above the swatches.
- Verdict: pass after moving swatches away from the title, separating script accents from cutout models, and reducing the model count to one protagonist per module.

## Module 06 - Size Chart
- Source: `modules/module-06-size-chart.html`
- Output: `output/module-06-size-chart.png`
- Result: right side now uses a real generated cutout model, not a placeholder or CSS/SVG garment drawing.
- Measurement marks: white dashed BUST / LENGTH / SLEEVE labels are overlaid directly on the model area.
- Table style: rows use alternating light pink and light camel stripes.
- Verdict: pass.

## Module 07 - Brand Story Closing
- Source: `modules/module-07-brand-story.html`
- Output: `output/module-07-brand-story.png`
- Result: color cards now use generated cutout model assets from `assets/gen/` instead of direct `assets/color-*.jpg` crops.
- Verdict: pass.

## Residual Risk
- Generated model identity is close enough for a unified A+ page but not perfectly identical across every pose.
- The generated garment details passed the visible check for notched split V neckline, two marble-look buttons, long sleeves, rib texture, and color family, but final production proof can still be improved with real photography later.
- Face/hand zoom check is saved at `compare/cutout-face-hand-check.jpg`; no malformed faces or fingers were found in the current portrait set.
- Pixel slice verification is saved at `compare/slice-verification.md`; all continuous-canvas slices match the exported module images.
