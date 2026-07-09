from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
ASSET_DIR = ROOT / "assets" / "gen"
OUT = ASSET_DIR / "asset-contact-sheet-elaraise-henley.jpg"

files = sorted(
    p for p in ASSET_DIR.iterdir()
    if p.suffix.lower() in {".png", ".jpg", ".jpeg", ".webp"} and p.name.startswith("gen-")
)

thumb_w, thumb_h = 220, 220
label_h = 54
gap = 18
cols = 5
rows = (len(files) + cols - 1) // cols
sheet_w = cols * thumb_w + (cols + 1) * gap
sheet_h = rows * (thumb_h + label_h) + (rows + 1) * gap

sheet = Image.new("RGB", (sheet_w, sheet_h), "#F4F2EE")
draw = ImageDraw.Draw(sheet)
try:
    font = ImageFont.truetype("Arial.ttf", 16)
except OSError:
    font = ImageFont.load_default()

for idx, path in enumerate(files):
    col = idx % cols
    row = idx // cols
    x = gap + col * (thumb_w + gap)
    y = gap + row * (thumb_h + label_h + gap)
    draw.rounded_rectangle((x, y, x + thumb_w, y + thumb_h + label_h), radius=8, fill="#FFFFFF", outline="#D8CEC4")

    img = Image.open(path).convert("RGBA")
    img.thumbnail((thumb_w - 24, thumb_h - 24), Image.Resampling.LANCZOS)
    bg = Image.new("RGBA", (thumb_w, thumb_h), "#FFFFFF")
    px = (thumb_w - img.width) // 2
    py = (thumb_h - img.height) // 2
    bg.alpha_composite(img, (px, py))
    sheet.paste(bg.convert("RGB"), (x, y))

    name = path.name
    if len(name) > 30:
        name = name[:27] + "..."
    draw.text((x + 10, y + thumb_h + 10), name, fill="#5E2A35", font=font)

OUT.parent.mkdir(parents=True, exist_ok=True)
sheet.save(OUT, quality=92)
print(OUT)
