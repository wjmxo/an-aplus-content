from pathlib import Path
from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parents[1]
out_img = Image.open(ROOT / "output/contact-sheet-7-modules.jpg").convert("RGB")
ref_img = Image.open(ROOT / "reference/05-longsleeve-ribbed-basic.jpg").convert("RGB")

target_h = min(out_img.height, ref_img.height)
out_scaled = out_img.resize((int(out_img.width * target_h / out_img.height), target_h), Image.Resampling.LANCZOS)
ref_scaled = ref_img.resize((int(ref_img.width * target_h / ref_img.height), target_h), Image.Resampling.LANCZOS)

label_h = 52
gap = 24
canvas = Image.new("RGB", (out_scaled.width + ref_scaled.width + gap, target_h + label_h), "#F4F2EE")
draw = ImageDraw.Draw(canvas)
draw.rectangle((0, 0, out_scaled.width, label_h), fill="#5E2A35")
draw.text((22, 17), "OUTPUT: 7 modules contact sheet", fill="white")
draw.rectangle((out_scaled.width + gap, 0, out_scaled.width + gap + ref_scaled.width, label_h), fill="#8B6F55")
draw.text((out_scaled.width + gap + 22, 17), "REFERENCE: reference/05-longsleeve-ribbed-basic.jpg", fill="white")
canvas.paste(out_scaled, (0, label_h))
canvas.paste(ref_scaled, (out_scaled.width + gap, label_h))
canvas.save(ROOT / "compare/output-vs-reference-05.jpg", quality=92)
