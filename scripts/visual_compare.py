from pathlib import Path
from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parents[1]
PAIRS = [
    ("output/module-01-hero.png", "reference/09-longsleeve-henley-ribbed.jpg", "compare/module-01-vs-ref-09.jpg"),
    ("output/module-02-detail-grid.png", "reference/14-waffle-knit-henley.jpg", "compare/module-02-vs-ref-14.jpg"),
    ("output/module-03-fabric.png", "reference/21-longsleeve-vneck-ribbed-fall.jpg", "compare/module-03-vs-ref-21.jpg"),
    ("output/module-04-scenarios.png", "reference/26-henley-button-slimfit.jpg", "compare/module-04-vs-ref-26.jpg"),
    ("output/module-05-styling-color.png", "reference/26-henley-button-slimfit.jpg", "compare/module-05-vs-ref-26.jpg"),
    ("output/module-06-size-chart.png", "reference/09-longsleeve-henley-ribbed.jpg", "compare/module-06-vs-ref-09.jpg"),
    ("output/module-07-brand-story.png", "reference/26-henley-button-slimfit.jpg", "compare/module-07-vs-ref-26.jpg"),
]


def fit_width(img, width):
    ratio = width / img.width
    return img.resize((width, max(1, int(img.height * ratio))), Image.Resampling.LANCZOS)


def make_compare(output_path, ref_path, dest_path):
    output = Image.open(ROOT / output_path).convert("RGB")
    ref = Image.open(ROOT / ref_path).convert("RGB")
    width = 1464
    output = fit_width(output, width)
    ref = fit_width(ref, width)
    label_h = 46
    total_h = output.height + ref.height + label_h * 2
    canvas = Image.new("RGB", (width, total_h), "#F4F2EE")
    draw = ImageDraw.Draw(canvas)
    draw.rectangle((0, 0, width, label_h), fill="#5E2A35")
    draw.text((24, 13), f"OUTPUT: {output_path}", fill="white")
    canvas.paste(output, (0, label_h))
    y = label_h + output.height
    draw.rectangle((0, y, width, y + label_h), fill="#B08D6E")
    draw.text((24, y + 13), f"REFERENCE: {ref_path}", fill="white")
    canvas.paste(ref, (0, y + label_h))
    out = ROOT / dest_path
    out.parent.mkdir(parents=True, exist_ok=True)
    canvas.save(out, quality=92)


for pair in PAIRS:
    make_compare(*pair)
