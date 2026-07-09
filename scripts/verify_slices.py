from pathlib import Path
from PIL import Image, ImageChops

ROOT = Path(__file__).resolve().parents[1]

CHECKS = [
    ("output/continuous-01-03.png", 0, "output/module-01-hero.png"),
    ("output/continuous-01-03.png", 1200, "output/module-02-detail-grid.png"),
    ("output/continuous-01-03.png", 2400, "output/module-03-fabric.png"),
    ("output/continuous-04-05.png", 0, "output/module-04-scenarios.png"),
    ("output/continuous-04-05.png", 1200, "output/module-05-styling-color.png"),
]

SLICE_W = 2928
SLICE_H = 1200

lines = ["# Slice Verification", ""]
all_pass = True

for master_name, top, slice_name in CHECKS:
    master = Image.open(ROOT / master_name).convert("RGB")
    slice_img = Image.open(ROOT / slice_name).convert("RGB")
    crop = master.crop((0, top, SLICE_W, top + SLICE_H))
    diff = ImageChops.difference(crop, slice_img)
    bbox = diff.getbbox()
    ok = bbox is None
    all_pass = all_pass and ok
    status = "PASS" if ok else f"FAIL bbox={bbox}"
    lines.append(f"- `{slice_name}` vs `{master_name}` y={top}: {status}")

out = ROOT / "compare/slice-verification.md"
out.write_text("\n".join(lines) + "\n", encoding="utf-8")
if not all_pass:
    raise SystemExit("Slice verification failed")
