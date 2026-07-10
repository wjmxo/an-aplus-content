---
name: aplus-asset-production
description: Use when the user asks to generate, build, audit, or supplement an Amazon A+ asset library for a product, including first-time asset production, reference-calibrated model/detail/scene/accessory generation, or replenishment of missing assets. Do not use for page layout, HTML/CSS design, module rearrangement, slicing, PNG export, visual comparison, or upload-package tasks; those belong to aplus-page-production. 中文触发:素材生产、建素材库、补素材、补货、生成模特图、细节图、场景图、配饰图
---

# A+ Asset Production

This skill handles Phase 1 only: producing or replenishing the approved asset library for an Amazon A+ product. It must stop after asset delivery and user-review materials; it must not begin page layout.

## Trigger

Start when the user says a product needs A+ asset production, asset-library setup, material generation, image replenishment, or uses the fixed phrase:

`$aplus-asset-production 为 {产品名} 执行素材生产`

Applicable cases:
- First asset build after `product.md` has been calibrated and confirmed
- Replenishment for an older product when page production reports missing assets
- Auditing an existing `assets/gen/` library against the core pack

Not applicable:
- HTML/CSS page layout
- Module order or copy rearrangement
- Rendering, slicing, exporting, visual comparison, or pushing final page images
- Any task where the user has already confirmed the asset library and is asking for page production

## Required Inputs

Read these before generating or auditing:
- `product.md`: positioning, category, main color, target customer, verified claims
- `assets/color-*.jpg`: real product reference images for garment fidelity
- `STYLE.md` Section 5: model and photography tone
- `STYLE.md` Rule 22: gaze, expression, and head-direction diversity
- `photo-brief.md` when available: use as generation prompt basis, but do not override product fidelity

If a needed product fact is missing or conflicts with the reference images, stop and ask before generating.

## Core Pack Standard

Generate the compact reusable asset pack below unless the product or user request narrows scope.

- Model pose group:
  - Main color x 5 poses: front standing, back, side, walking, seated
  - First support color x 3 poses: front, back, side
- Waist-up portrait group:
  - Main color front
  - Main color back
  - Support color front
  - Total: 3 images
- Detail close-up group:
  - Main color neckline
  - Main color button or core construction detail
  - Main color sleeve cuff
  - Main color fabric swirl or key fabric proof
  - Warm-tone variant core detail x 2
- Scene group:
  - 4 scenes derived from `product.md`
  - Commute tops: office, cafe, street, home
  - Vacation tops: beach, terrace, resort walkway, lounge
  - Do not apply a fixed scene template across categories
- Styling accessory group:
  - 4-5 white-background cutout items derived from the product use case, such as jeans, handbag, jewelry earrings, shoes, sunglasses
- Size annotation image:
  - 1 main-color seven-eighths or seven-part front model image suitable for BUST / LENGTH / SLEEVE labels
- Low-priority colors:
  - Do not pre-generate unpopular or cold-tail colors; replenish on demand and reuse once approved

## Product Adaptation

Derive asset content from the product instead of copying a static template:
- Category decides crop: T-shirt, tank/cami, blouse, tunic, sweater, or other
- Product positioning decides scenes: office/cafe/street/home for commute basics; beach/terrace/resort for vacation; sofa/home for loungewear
- Main color decides anchor and protagonist assets; support color is used to brighten or contrast, not to replace the main-color story
- Verified fabric/content decides detail proof labels; do not invent opacity, compression, cooling, or 4-way stretch claims
- Size image must match the actual garment type and fit behavior

## Generation Rules

- Keep one consistent model identity across the library. Use the first approved hero/calibration image as a later reference input.
- Every garment image must use the matching `assets/color-*.jpg` as a reference input.
- Garment fidelity must be checked against the reference: neckline shape, button count/shape, rib density, sleeve length, fit, hem behavior, and color hue.
- Each prompt must explicitly specify gaze, expression, and head direction per STYLE.md Rule 22, for example:
  - `looking away to the left, calm relaxed expression, no smile`
  - `glancing down adjusting sleeve, focused candid moment`
  - `over-shoulder glance, soft closed-mouth smile`
- Preserve low-detail space in images intended for overlaid text or stickers.
- Generate in 2-3 batches when the pack is large. Quality check and push each accepted batch before continuing.
- Failed images are not added to the library.

## Naming

Save accepted generated assets to `assets/gen/` using:

`gen-{type}-{color}-{pose-or-scene}-{sequence}.png`

Examples:
- `gen-model-black-front-01.png`
- `gen-model-black-walk-01.png`
- `gen-portrait-black-back-01.png`
- `gen-detail-wine-button-01.png`
- `gen-scene-black-cafe-01.png`
- `gen-accessory-neutral-flatlay-01.png`
- `gen-size-black-front-01.png`

Use `src-*` only for temporary generation sources; do not treat `src-*` as approved library assets.

## Quality Gate

Every accepted asset must pass:
- Garment fidelity: neckline, buttons, weave/rib, sleeve, fit, hem, and color match the product reference
- Human realism: face and hands complete, no distorted fingers, no warped facial features, no AI artifacts
- Composition: enough clean area for planned typography when needed
- Product priority: props, background, hair, or pose must not hide the key garment details
- Marketplace safety: no competitor marks, no unsupported claims, no review/award/promotion signals
- STYLE.md Rule 22: page-level library has at least three gaze categories, no expression repeats more than twice in final page picks, and head directions are balanced

If an image fails, regenerate or mark it as Draft. Do not register failed assets as approved.

## INDEX Registration

Update `assets/gen/INDEX.md` after each accepted batch. Required columns:

`File | Type | Color | Pose/Scene | Crop | Use Module | Reference Source | Gaze | Expression | Status | Notes`

Rules:
- Approved reusable assets use `Approved`
- Redundant same-expression/same-direction assets use `Draft`
- Rejected assets are omitted from the approved index or recorded separately as rejected, never mixed into the usable pool
- Include a full-page asset allocation table when auditing for page production, so each module maps to one unique model asset

## Deliverables and Stop Condition

Deliver and push:
- `assets/gen/` accepted assets
- Updated `assets/gen/INDEX.md`
- A contact sheet / thumbnail collage for quick review
- Optional audit file listing coverage, missing items, Draft assets, and next replenishment recommendations

Then stop immediately and wait for user approval. Do not create, edit, render, slice, or export A+ page modules in this task.
