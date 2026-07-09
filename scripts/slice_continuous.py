from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]

SPECS = [
    (
        "output/continuous-01-03.png",
        [
            ("output/module-01-hero.png", 0),
            ("output/module-02-detail-grid.png", 1200),
            ("output/module-03-fabric.png", 2400),
        ],
    ),
    (
        "output/continuous-04-05.png",
        [
            ("output/module-04-scenarios.png", 0),
            ("output/module-05-styling-color.png", 1200),
        ],
    ),
]

SLICE_WIDTH = 2928
SLICE_HEIGHT = 1200


def slice_image(source_name, crops):
    source = Image.open(ROOT / source_name).convert("RGB")
    if source.width != SLICE_WIDTH:
        raise ValueError(f"{source_name} width {source.width} != {SLICE_WIDTH}")
    for dest_name, top in crops:
        crop = source.crop((0, top, SLICE_WIDTH, top + SLICE_HEIGHT))
        if crop.size != (SLICE_WIDTH, SLICE_HEIGHT):
            raise ValueError(f"{dest_name} crop size {crop.size}")
        out = ROOT / dest_name
        out.parent.mkdir(parents=True, exist_ok=True)
        crop.save(out)


for source_name, crops in SPECS:
    slice_image(source_name, crops)
