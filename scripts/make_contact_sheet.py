from pathlib import Path
from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parents[1]
MODULES = [
    ("01 Hero", "output/module-01-hero.png"),
    ("02 Details", "output/module-02-detail-grid.png"),
    ("03 Fabric", "output/module-03-fabric.png"),
    ("04 Scenarios", "output/module-04-scenarios.png"),
    ("05 Colors", "output/module-05-styling-color.png"),
    ("06 Size", "output/module-06-size-chart.png"),
    ("07 Brand", "output/module-07-brand-story.png"),
]

TARGET_W = 1464
LABEL_H = 44

rows = []
for label, rel_path in MODULES:
    img = Image.open(ROOT / rel_path).convert("RGB")
    img = img.resize((TARGET_W, 600), Image.Resampling.LANCZOS)
    row = Image.new("RGB", (TARGET_W, LABEL_H + 600), "#F4F2EE")
    draw = ImageDraw.Draw(row)
    draw.rectangle((0, 0, TARGET_W, LABEL_H), fill="#5E2A35")
    draw.text((24, 13), f"{label}  |  {rel_path}", fill="white")
    row.paste(img, (0, LABEL_H))
    rows.append(row)

sheet = Image.new("RGB", (TARGET_W, len(rows) * (LABEL_H + 600)), "#F4F2EE")
y = 0
for row in rows:
    sheet.paste(row, (0, y))
    y += row.height

out = ROOT / "output/contact-sheet-7-modules.jpg"
out.parent.mkdir(parents=True, exist_ok=True)
sheet.save(out, quality=90)
