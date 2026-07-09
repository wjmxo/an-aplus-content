# ELARAISE Premium A+ Upload Guide

Product: Women's Long Sleeve Henley V Neck Slim Fit Ribbed Top  
ASIN focus: B0H1X6VPMM

## Output Files

All image files are exported at 2x resolution for clarity. Upload them to matching Premium A+ modules as image assets.

Modules 01-03 are designed as one continuous 1464 x 1800 canvas and sliced into three 1464 x 600 modules. Modules 04-05 are designed as one continuous 1464 x 1200 canvas and sliced into two 1464 x 600 modules. Use `render.cjs` or `render-continuous.cjs`, then run `scripts/slice_continuous.py`, `scripts/visual_compare.py`, and `scripts/make_contact_sheet.py`.

| File | Backend module | Intended size | Main message |
|---|---|---:|---|
| `output/module-01-hero.png` | Premium Full Image | 1464 x 600 | Brand hero and Henley first impression |
| `output/module-02-detail-grid.png` | Premium Four Images & Text or Background Image with Text | 1464 x 600 | Notched V neck, decorative buttons, ribbed knit, long sleeves |
| `output/module-03-fabric.png` | Premium Background Image with Text | 1464 x 600 | 95% viscose + 5% spandex soft stretch feel |
| `output/module-04-scenarios.png` | Premium Background Image with Text | 1464 x 600 | Work, daily, shopping, and date styling |
| `output/module-05-styling-color.png` | Premium Background Image with Text or Navigation Carousel panel | 1464 x 600 | Styling options and five color choices |
| `output/module-06-size-chart.png` | Premium Technical Specifications plus supporting image | 1464 x 600 | Size chart, fit type, stretch, thickness |
| `output/module-07-brand-story.png` | Premium Background Image with Text | 1464 x 600 | Brand story and five color display |

## Backend Text Fields

Use the approved copy in `copy.md`. Keep wording focused on verified attributes:

- Use `Decorative Buttons` wherever the Henley close-up appears.
- Do not mention price, discount, ranking, reviews, or comparison to another brand.
- Do not claim non-sheer, double-lined, or opaque unless confirmed by real product photography.
- Fit guidance may say: `For a more relaxed look, consider choosing one size up.`

## Final Checks Before Upload

- Confirm Module 06 size data matches Seller Central variation attributes.
- Replace the Module 06 `待素材` placeholder with a real measurement-guide photo if available.
- Check every backend image crop after upload; Amazon may preview modules differently from local PNGs.
- Keep all uploaded text in U.S. English and avoid promotional or absolute claims.
