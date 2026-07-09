from pathlib import Path
from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parents[1]

SPECS = [
    ("output/continuous-01-03.png", "01-03", [1200, 2400]),
    ("output/continuous-04-05.png", "04-05", [1200]),
]

BAND = 300

for master_name, label, centers in SPECS:
    master = Image.open(ROOT / master_name).convert("RGB")
    for center in centers:
        top = max(0, center - BAND)
        bottom = min(master.height, center + BAND)
        crop = master.crop((0, top, master.width, bottom))
        draw = ImageDraw.Draw(crop)
        y = center - top
        draw.line((0, y, master.width, y), fill="#D60000", width=6)
        draw.text((24, max(18, y - 42)), f"{label} slice y={center // 2}px, +/-150px check band", fill="#D60000")
        out = ROOT / f"compare/slice-check-{label}-y{center // 2}.png"
        crop.save(out)
