---
name: aplus-page-production
description: Use when the user asks to make, revise, lay out, slice, render, export, visually self-check, or push Amazon A+ page modules from an already-approved asset library, including HTML/CSS modules, continuous canvases, PNG outputs, upload packages, and layout-only fixes. Do not use for generating new model/detail/scene/accessory assets or asset-library replenishment; missing assets must route to aplus-asset-production. 中文触发:页面制作、排版、做A+模块、通版、切片、导出成品、修改版式、视觉自检
---

# A+ Page Production

This skill handles Phase 2 only: selecting approved assets, building HTML modules, rendering PNG output, slicing continuous canvases, running visual self-checks, and pushing final page artifacts.

## Trigger

Use when the user asks for:
- Page production after approving an asset library
- HTML/CSS module creation or revision
- Module layout, typography, slicing, export, visual comparison, or upload packaging
- Updating final `output/*.png`
- Pushing page source and output artifacts

Do not use for:
- Generating new model, detail, scene, accessory, or size-guide assets
- Replenishing missing assets
- Creating a new `assets/gen/` library from product references

## Hard Boundary

- Phase 2 may only consume approved assets from `assets/gen/`, `assets/`, and existing source files.
- Do not generate new model/detail/scene/accessory assets.
- Background texture micro-adjustments are allowed only when they do not create new product/model/scene material.
- If an approved asset is missing or insufficient, output a “补货申请清单” with:
  - missing asset
  - intended module
  - color
  - pose/view/crop
  - reference source needed
  - reason the page cannot safely proceed
- Pause the affected module until the user returns to `$aplus-asset-production`.

## Required Reads

Before editing page files, read:
- `AGENTS.md`: always-on compliance, routing, slicing discipline, and user decision gates
- `STYLE.md`: current design system and self-check rules
- `product.md`: verified product facts and claims
- `copy.md`: approved copy
- `assets/gen/INDEX.md`: approved asset inventory and module allocation
- Relevant `modules/*.html` and current `output/*.png`

## Source and Output Contract

- HTML is the only lasting source of page design.
- Final upload images are 2x PNG files in `output/`.
- PSD is a local derivative deliverable. Generate it on demand with `scripts/export-psd.mjs`; PSD files are not committed, and PSD edits do not flow back into the system.
- Keep generated page artifacts in tracked locations already used by this repo:
  - `modules/*.html`
  - `output/*.png`
  - `compare/*` visual checks
  - `README-upload.md`

## Script References

Use existing repo scripts as appropriate:

- Render independent 1464 x 600 modules:
  - `render.cjs`
- Render continuous canvases:
  - `render-continuous.cjs`
- Slice continuous canvases into 600px modules:
  - `scripts/slice_continuous.py`
- Verify slices match continuous source:
  - `scripts/verify_slices.py`
- Make cut-line inspection strips:
  - `scripts/make_slice_checks.py`
- Build visual comparison sheets:
  - `scripts/visual_compare.py`
  - `scripts/make_ref05_compare.py`
- Build output contact sheets:
  - `scripts/make_contact_sheet.py`
- Build asset contact sheets when only auditing library coverage:
  - `scripts/make_asset_contact_sheet.py`
- PSD export:
  - `scripts/export-psd.mjs`
  - PSD files are generated locally in `output/psd/`, excluded from git, and never used as source-of-truth edits.

## Page Workflow

1. Confirm this is a page-production task and that the asset library has been approved.
2. Check `assets/gen/INDEX.md` for approved module allocation and uniqueness.
3. If assets are missing, produce a replenishment request and stop affected modules.
4. Edit only the relevant `modules/*.html` files.
5. Follow `STYLE.md` Section 4 module mapping unless the user confirms a structural change.
6. Respect AGENTS decision gates before changing:
   - main color/weighting
   - module order/structure
   - major headline or selling-point strategy
   - previously confirmed elements
7. Render outputs.
8. Slice continuous canvases if needed.
9. Verify slice pixel identity and cut-line safety.
10. Run visual self-check against the closest `reference/` image and write/refresh compare artifacts.
11. Push source HTML, PNG outputs, compare files, and upload guide changes when requested or when the task asks for completion to main.

## Continuous Canvas Rules

- Modules 01-03 may be one `1464 x 1800` canvas sliced into three 600px modules.
- Modules 04-05 may be one `1464 x 1200` canvas sliced into two 600px modules.
- Modules 06 and 07 remain independent unless the user explicitly confirms otherwise.
- Slice lines must avoid faces, hands, title text, and button/detail proof by at least 60px.
- Bodies, legs, background bands, and low-detail texture may cross slice lines.
- After slicing, run `scripts/verify_slices.py` and create cut-line check strips.

## Visual Self-Check

For every changed module:
- Compare against the closest `reference/` image.
- Check color system, type hierarchy, product/model scale, density, photo overlap, and scan order.
- Run the three-second scan test: eye should move from title to protagonist to label without jumps, overlaps, or empty vertical bands.
- Check no text overlaps illegibly and no script/card layer cuts off key strokes.
- Check no CSS/SVG product illustration replaces required product photography.
- If a rule fails, revise HTML and re-render before delivery.

## Delivery

Report:
- changed source files
- output PNG list
- visual check files
- slice verification result for continuous canvases
- any missing assets that blocked modules

Never claim final page completion if required assets are placeholders or if slice verification failed.
