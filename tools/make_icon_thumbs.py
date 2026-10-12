"""Generate 128px WebP thumbnails (icon-128.webp) next to every public/apps/*/icon.png.

App cards render icons at 52px, so the 512px PNGs cost ~250 KB each for nothing. Re-run after adding or replacing an icon: python tools/make_icon_thumbs.py
"""
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent / "public" / "apps"
SIZE = 128

for src in sorted(ROOT.glob("*/icon.png")):
    dst = src.with_name(f"icon-{SIZE}.webp")
    with Image.open(src) as im:
        im.convert("RGBA").resize((SIZE, SIZE), Image.LANCZOS).save(dst, "WEBP", quality=85, method=6)
    print(f"{dst.relative_to(ROOT)}  {src.stat().st_size // 1024} KB -> {dst.stat().st_size // 1024} KB")
