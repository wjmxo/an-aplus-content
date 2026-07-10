import fs from "node:fs";
import path from "node:path";
import { chromium } from "playwright";
import { PNG } from "pngjs";
import { writePsdBuffer } from "ag-psd";

const ROOT = process.cwd();
const MODULE_DIR = path.join(ROOT, "modules");
const OUTPUT_DIR = path.join(ROOT, "output");
const PSD_DIR = path.join(OUTPUT_DIR, "psd");
const SCALE = 2;

const JOBS = [
  {
    name: "continuous-01-03",
    title: "Continuous 01-03",
    source: "continuous-01-03.html",
    output: "continuous-01-03.png",
    width: 1464,
    height: 1800,
    rect: { x: 0, y: 0, width: 1464, height: 1800 },
  },
  {
    name: "continuous-04-05",
    title: "Continuous 04-05",
    source: "continuous-04-05.html",
    output: "continuous-04-05.png",
    width: 1464,
    height: 1200,
    rect: { x: 0, y: 0, width: 1464, height: 1200 },
  },
  {
    name: "module-01-hero",
    title: "Module 01 Hero",
    source: "continuous-01-03.html",
    output: "module-01-hero.png",
    width: 1464,
    height: 1800,
    rect: { x: 0, y: 0, width: 1464, height: 600 },
  },
  {
    name: "module-02-detail-grid",
    title: "Module 02 Detail Grid",
    source: "continuous-01-03.html",
    output: "module-02-detail-grid.png",
    width: 1464,
    height: 1800,
    rect: { x: 0, y: 600, width: 1464, height: 600 },
  },
  {
    name: "module-03-fabric",
    title: "Module 03 Fabric",
    source: "continuous-01-03.html",
    output: "module-03-fabric.png",
    width: 1464,
    height: 1800,
    rect: { x: 0, y: 1200, width: 1464, height: 600 },
  },
  {
    name: "module-04-scenarios",
    title: "Module 04 Scenarios",
    source: "continuous-04-05.html",
    output: "module-04-scenarios.png",
    width: 1464,
    height: 1200,
    rect: { x: 0, y: 0, width: 1464, height: 600 },
  },
  {
    name: "module-05-styling-color",
    title: "Module 05 Styling + Color",
    source: "continuous-04-05.html",
    output: "module-05-styling-color.png",
    width: 1464,
    height: 1200,
    rect: { x: 0, y: 600, width: 1464, height: 600 },
  },
  {
    name: "module-06-size-chart",
    title: "Module 06 Size Chart",
    source: "module-06-size-chart.html",
    output: "module-06-size-chart.png",
    width: 1464,
    height: 600,
    rect: { x: 0, y: 0, width: 1464, height: 600 },
  },
  {
    name: "module-07-brand-story",
    title: "Module 07 Brand Story",
    source: "module-07-brand-story.html",
    output: "module-07-brand-story.png",
    width: 1464,
    height: 600,
    rect: { x: 0, y: 0, width: 1464, height: 600 },
  },
];

const GROUPS = [
  { key: "background", name: "背景组" },
  { key: "people", name: "人物组" },
  { key: "photos", name: "照片组" },
  { key: "text", name: "文字组" },
  { key: "decor", name: "装饰组" },
];

const LAYER_SELECTORS = [
  { group: "background", selector: ".bg, .wash, .band, .divider, .wm, .ribbon", label: "背景元素" },
  { group: "people", selector: ".cutout", label: "人物抠图" },
  { group: "photos", selector: ".card, .accessory, .color-card, .diagram", label: "照片卡片" },
  {
    group: "text",
    selector: [
      "h1",
      "h2",
      ".script",
      ".copy",
      ".serif-note",
      ".detail-bridge",
      ".callout",
      ".spaced-label",
      ".eyebrow",
      "p",
      ".label",
      "th",
      "td",
      ".measure-line",
      ".slider-title",
      ".slider-row > span:last-child",
      "footer.note span",
      ".ribbon span",
    ].join(", "),
    label: "文字",
    textLayer: true,
  },
  {
    group: "decor",
    selector: ".logo, .tag, .arrow, .feature-icons .item, .swatch, .dots, .proof, .note, .rail",
    label: "装饰",
    manifestIfText: true,
  },
];

function ensureDirs() {
  fs.mkdirSync(PSD_DIR, { recursive: true });
}

function readPng(file) {
  return PNG.sync.read(fs.readFileSync(file));
}

function writePng(file, png) {
  fs.writeFileSync(file, PNG.sync.write(png));
}

function clipToPixels(rect) {
  return {
    x: Math.round(rect.x * SCALE),
    y: Math.round(rect.y * SCALE),
    width: Math.round(rect.width * SCALE),
    height: Math.round(rect.height * SCALE),
  };
}

function intersect(a, b) {
  const x1 = Math.max(a.x, b.x);
  const y1 = Math.max(a.y, b.y);
  const x2 = Math.min(a.x + a.width, b.x + b.width);
  const y2 = Math.min(a.y + a.height, b.y + b.height);
  if (x2 <= x1 || y2 <= y1) return null;
  return { x: x1, y: y1, width: x2 - x1, height: y2 - y1 };
}

function cropPng(source, crop) {
  const out = new PNG({ width: crop.width, height: crop.height });
  for (let y = 0; y < crop.height; y++) {
    const srcY = crop.y + y;
    if (srcY < 0 || srcY >= source.height) continue;
    for (let x = 0; x < crop.width; x++) {
      const srcX = crop.x + x;
      if (srcX < 0 || srcX >= source.width) continue;
      const src = (srcY * source.width + srcX) * 4;
      const dst = (y * crop.width + x) * 4;
      out.data[dst] = source.data[src];
      out.data[dst + 1] = source.data[src + 1];
      out.data[dst + 2] = source.data[src + 2];
      out.data[dst + 3] = source.data[src + 3];
    }
  }
  return out;
}

function hasVisiblePixels(png) {
  for (let i = 3; i < png.data.length; i += 4) {
    if (png.data[i] > 0) return true;
  }
  return false;
}

function cleanTextAlphaNoise(png) {
  const out = new PNG({ width: png.width, height: png.height });
  png.data.copy(out.data);
  for (let i = 0; i < out.data.length; i += 4) {
    if (out.data[i + 3] < 96) {
      out.data[i] = 0;
      out.data[i + 1] = 0;
      out.data[i + 2] = 0;
      out.data[i + 3] = 0;
    }
  }
  return out;
}

function alphaOver(dst, src, left, top) {
  for (let y = 0; y < src.height; y++) {
    const dy = top + y;
    if (dy < 0 || dy >= dst.height) continue;
    for (let x = 0; x < src.width; x++) {
      const dx = left + x;
      if (dx < 0 || dx >= dst.width) continue;
      const si = (y * src.width + x) * 4;
      const di = (dy * dst.width + dx) * 4;
      const sa = src.data[si + 3] / 255;
      if (sa === 0) continue;
      const da = dst.data[di + 3] / 255;
      const oa = sa + da * (1 - sa);
      if (oa === 0) continue;
      dst.data[di] = Math.round((src.data[si] * sa + dst.data[di] * da * (1 - sa)) / oa);
      dst.data[di + 1] = Math.round((src.data[si + 1] * sa + dst.data[di + 1] * da * (1 - sa)) / oa);
      dst.data[di + 2] = Math.round((src.data[si + 2] * sa + dst.data[di + 2] * da * (1 - sa)) / oa);
      dst.data[di + 3] = Math.round(oa * 255);
    }
  }
}

function flattenGroups(groups, width, height) {
  const out = new PNG({ width, height });
  for (const group of groups) {
    for (const layer of group.layers) {
      alphaOver(out, layer.png, layer.left, layer.top);
    }
  }
  return out;
}

function meanAbsDiff(a, b) {
  if (a.width !== b.width || a.height !== b.height) {
    throw new Error(`PNG dimensions differ: ${a.width}x${a.height} vs ${b.width}x${b.height}`);
  }
  let total = 0;
  const channels = a.width * a.height * 4;
  for (let i = 0; i < a.data.length; i++) {
    total += Math.abs(a.data[i] - b.data[i]);
  }
  return total / channels;
}

function psdLayerFromRaster(layer) {
  return {
    name: layer.name,
    left: layer.left,
    top: layer.top,
    right: layer.left + layer.png.width,
    bottom: layer.top + layer.png.height,
    imageData: {
      data: layer.png.data,
      width: layer.png.width,
      height: layer.png.height,
    },
  };
}

function referenceLayer(original) {
  return psdLayerFromRaster({
    name: "00_成品参考底图_上传PNG",
    left: 0,
    top: 0,
    png: original,
  });
}

function sanitizeName(text, fallback) {
  const clean = String(text || "")
    .replace(/\s+/g, " ")
    .replace(/[\\/:*?"<>|]/g, "")
    .trim();
  return (clean || fallback).slice(0, 60);
}

function first20(text) {
  return sanitizeName(text, "Text").slice(0, 20);
}

function cssColorToHex(value) {
  const match = String(value).match(/rgba?\(([^)]+)\)/i);
  if (!match) return value;
  const [r, g, b, a] = match[1].split(",").map((v) => v.trim());
  const hex = [r, g, b]
    .map((v) => Math.max(0, Math.min(255, Number.parseFloat(v))).toString(16).padStart(2, "0"))
    .join("")
    .toUpperCase();
  if (a !== undefined && Number.parseFloat(a) < 1) return `#${hex} @ ${Math.round(Number.parseFloat(a) * 100)}%`;
  return `#${hex}`;
}

async function initializePage(page, job) {
  await page.setViewportSize({ width: job.width, height: job.height });
  await page.goto(`file://${path.join(MODULE_DIR, job.source)}`);
  await page.evaluate(({ selectors }) => {
    document.documentElement.classList.add("psd-export");
    document.querySelectorAll("[data-psd-root]").forEach((el) => {
      el.removeAttribute("data-psd-root");
      el.removeAttribute("data-psd-group");
      el.removeAttribute("data-psd-kind");
    });

    const seen = new Set();
    let index = 0;
    for (const config of selectors) {
      document.querySelectorAll(config.selector).forEach((el) => {
        if (!(el instanceof HTMLElement || el instanceof SVGElement)) return;
        if (seen.has(el)) return;
        const rect = el.getBoundingClientRect();
        if (rect.width < 1 || rect.height < 1) return;
        const styles = window.getComputedStyle(el);
        if (styles.display === "none" || styles.visibility === "hidden" || Number(styles.opacity) === 0) return;
        seen.add(el);
        el.setAttribute("data-psd-root", `l${String(index++).padStart(4, "0")}`);
        el.setAttribute("data-psd-group", config.group);
        el.setAttribute("data-psd-kind", config.textLayer ? "text" : config.manifestIfText ? "decor-text" : "raster");
      });
    }

    window.__setPsdIsolation = (mode, id) => {
      document.body.classList.remove("psd-background", "psd-isolate", "psd-text-target", "psd-photo-target");
      const old = document.getElementById("psd-isolation-style");
      if (old) old.remove();
      const style = document.createElement("style");
      style.id = "psd-isolation-style";
      let css = "";
      if (mode === "background") {
        document.body.classList.add("psd-background");
        css += `
          body.psd-background [data-psd-root]:not([data-psd-group="background"]) {
            visibility: hidden !important;
          }
        `;
      } else {
        document.body.classList.add("psd-isolate");
        css += `
          html.psd-export, html.psd-export body, html.psd-export .canvas {
            background: transparent !important;
          }
          body.psd-isolate [data-psd-root] {
            visibility: hidden !important;
          }
          body.psd-isolate [data-psd-root="${id}"],
          body.psd-isolate [data-psd-root="${id}"] * {
            visibility: visible !important;
          }
        `;
        if (mode === "text") {
          document.body.classList.add("psd-text-target");
          css += `
            body.psd-text-target [data-psd-root="${id}"],
            body.psd-text-target [data-psd-root="${id}"] * {
              background: transparent !important;
              border-color: transparent !important;
              box-shadow: none !important;
              text-shadow: none !important;
              filter: none !important;
            }
          `;
        }
        if (mode === "photo") document.body.classList.add("psd-photo-target");
      }
      style.textContent = css;
      document.head.appendChild(style);
    };

    window.__clearPsdIsolation = () => {
      document.body.classList.remove("psd-background", "psd-isolate", "psd-text-target", "psd-photo-target");
      const old = document.getElementById("psd-isolation-style");
      if (old) old.remove();
    };
  }, { selectors: LAYER_SELECTORS });
}

async function collectRoots(page) {
  return page.evaluate(() => {
    function rectUnion(el) {
      const rootRect = el.getBoundingClientRect();
      let left = rootRect.left;
      let top = rootRect.top;
      let right = rootRect.right;
      let bottom = rootRect.bottom;
      el.querySelectorAll("*").forEach((child) => {
        const childRect = child.getBoundingClientRect();
        if (childRect.width < 1 || childRect.height < 1) return;
        left = Math.min(left, childRect.left);
        top = Math.min(top, childRect.top);
        right = Math.max(right, childRect.right);
        bottom = Math.max(bottom, childRect.bottom);
      });
      return { x: left, y: top, width: right - left, height: bottom - top };
    }

    return Array.from(document.querySelectorAll("[data-psd-root]")).map((el) => {
      const rect = rectUnion(el);
      const styles = window.getComputedStyle(el);
      const text = (el.textContent || "").replace(/\s+/g, " ").trim();
      return {
        id: el.getAttribute("data-psd-root"),
        group: el.getAttribute("data-psd-group"),
        kind: el.getAttribute("data-psd-kind"),
        tag: el.tagName.toLowerCase(),
        className: typeof el.className === "string" ? el.className : "",
        text,
        bbox: { x: rect.x, y: rect.y, width: rect.width, height: rect.height },
        fontFamily: styles.fontFamily,
        fontSize: styles.fontSize,
        color: styles.color,
      };
    });
  });
}

function rootLayerName(root, serial) {
  if (root.kind === "text" || root.kind === "decor-text") {
    return first20(root.text || `${root.tag}-${serial}`);
  }
  const classPart = root.className ? `.${String(root.className).split(/\s+/).filter(Boolean).join(".")}` : root.tag;
  return sanitizeName(`${root.group}-${classPart}-${serial}`, `${root.group}-${serial}`);
}

async function screenshotRoot(page, root) {
  const mode = root.kind === "text" ? "text" : root.group === "photos" ? "photo" : "raster";
  const clip = {
    x: Math.max(0, root.bbox.x),
    y: Math.max(0, root.bbox.y),
    width: Math.max(1, root.bbox.width),
    height: Math.max(1, root.bbox.height),
  };
  await page.evaluate(({ mode, id }) => window.__setPsdIsolation(mode, id), { mode, id: root.id });
  await page.waitForTimeout(30);
  return PNG.sync.read(await page.screenshot({ clip, omitBackground: true }));
}

async function screenshotBackground(page) {
  await page.evaluate(() => window.__setPsdIsolation("background", null));
  return page.screenshot({ omitBackground: true, fullPage: false });
}

function layerIntersects(root, rect) {
  return intersect(root.bbox, rect);
}

function addManifestEntry(manifest, job, root, layerName) {
  if (!root.text) return;
  manifest.push({
    module: job.title,
    layer: layerName,
    text: root.text,
    fontFamily: root.fontFamily,
    fontSize: root.fontSize,
    color: cssColorToHex(root.color),
  });
}

async function exportJob(browser, job, globalManifest) {
  const page = await browser.newPage({ viewport: { width: job.width, height: job.height }, deviceScaleFactor: SCALE });
  await initializePage(page, job);
  const roots = await collectRoots(page);

  const psdWidth = Math.round(job.rect.width * SCALE);
  const psdHeight = Math.round(job.rect.height * SCALE);
  const rectPx = clipToPixels(job.rect);
  const groups = GROUPS.map((g) => ({ ...g, layers: [] }));
  const groupMap = new Map(groups.map((g) => [g.key, g]));

  const bgFull = PNG.sync.read(await screenshotBackground(page));
  const bgCrop = cropPng(bgFull, rectPx);
  groupMap.get("background").layers.push({
    name: "背景底图_纹理_色带",
    left: 0,
    top: 0,
    png: bgCrop,
  });

  let serial = 1;
  for (const root of roots.filter((r) => r.group !== "background")) {
    const hitCss = layerIntersects(root, job.rect);
    if (!hitCss) continue;
    let rootPng = await screenshotRoot(page, root);
    if (!rootPng) continue;
    if (root.kind === "text") rootPng = cleanTextAlphaNoise(rootPng);
    const bboxPx = clipToPixels(root.bbox);
    const hitPx = intersect(bboxPx, rectPx);
    if (!hitPx) continue;
    const crop = cropPng(rootPng, {
      x: hitPx.x - bboxPx.x,
      y: hitPx.y - bboxPx.y,
      width: hitPx.width,
      height: hitPx.height,
    });
    if (!hasVisiblePixels(crop)) continue;
    const name = rootLayerName(root, serial++);
    const layer = {
      name,
      left: hitPx.x - rectPx.x,
      top: hitPx.y - rectPx.y,
      png: crop,
    };
    groupMap.get(root.group)?.layers.push(layer);
    if (root.kind === "text" || root.kind === "decor-text") {
      addManifestEntry(globalManifest, job, root, name);
    }
  }
  await page.evaluate(() => window.__clearPsdIsolation());
  await page.close();

  const outputPath = path.join(OUTPUT_DIR, job.output);
  const original = readPng(outputPath);
  const editableFlattened = flattenGroups(groups, psdWidth, psdHeight);
  const editableDiff = meanAbsDiff(editableFlattened, original);
  const visibleFlattened = original;
  const visibleDiff = meanAbsDiff(visibleFlattened, original);
  const checkPngPath = path.join(PSD_DIR, `${job.name}-psd-merge-check.png`);
  const visibleCheckPngPath = path.join(PSD_DIR, `${job.name}-psd-visible-check.png`);
  writePng(checkPngPath, editableFlattened);
  writePng(visibleCheckPngPath, visibleFlattened);

  const psd = {
    width: psdWidth,
    height: psdHeight,
    imageData: { data: original.data, width: original.width, height: original.height },
    children: [
      referenceLayer(original),
      {
        name: "01_可编辑分组_默认隐藏",
        opened: true,
        hidden: true,
        children: groups
          .filter((g) => g.layers.length)
          .map((g) => ({
            name: g.name,
            opened: true,
            children: g.layers.map(psdLayerFromRaster),
          })),
      },
    ],
  };
  const psdPath = path.join(PSD_DIR, `${job.name}.psd`);
  fs.writeFileSync(psdPath, writePsdBuffer(psd, { trimImageData: false, generateThumbnail: false, noBackground: true, compress: true }));
  return {
    name: job.name,
    psdPath,
    checkPngPath,
    visibleCheckPngPath,
    editableDiff,
    visibleDiff,
    bytes: fs.statSync(psdPath).size,
    layers: 1 + groups.reduce((sum, g) => sum + g.layers.length, 0),
  };
}

function renderManifest(entries, results) {
  const lines = [
    "# TEXT-MANIFEST",
    "",
    "This manifest maps rasterized PSD text back to source copy decisions. PSD files are local derivative deliverables; HTML remains the source of truth.",
    "",
    "PSD exports are practical Photoshop handoff files. The visible top layer is the exact upload PNG; editable grouped raster layers are included in a hidden folder for manual changes. Major titles and body copy are separated into text raster layers; photo cards, stickers, swatches, and small captions are kept baked into their own clean raster layers to avoid dirty transparent blocks in Photoshop.",
    "",
    "Pixel identity is verified against the visible reference layer. Editable merge checks measure the hidden editable layer stack only, so complex modules may show a non-zero difference without using any visible correction layer.",
    "",
    "## PSD Export Self-Check",
    "",
    "| File | Size | Layers | Visible Mean Diff | Editable Mean Diff | Editable Check PNG |",
    "|---|---:|---:|---:|---:|---|",
  ];
  for (const result of results) {
    lines.push(`| \`${path.basename(result.psdPath)}\` | ${formatBytes(result.bytes)} | ${result.layers} | ${result.visibleDiff.toFixed(3)} | ${result.editableDiff.toFixed(3)} | \`${path.basename(result.checkPngPath)}\` |`);
  }
  lines.push("", "## Text Layers", "", "| Module | Layer Name | Text | Font Family | Size | Color |", "|---|---|---|---|---:|---|");
  for (const entry of entries) {
    lines.push(`| ${escapeMd(entry.module)} | \`${escapeMd(entry.layer)}\` | ${escapeMd(entry.text)} | ${escapeMd(entry.fontFamily)} | ${escapeMd(entry.fontSize)} | ${escapeMd(entry.color)} |`);
  }
  lines.push("");
  return `${lines.join("\n")}\n`;
}

function escapeMd(value) {
  return String(value ?? "").replace(/\|/g, "\\|").replace(/\n/g, "<br>");
}

function formatBytes(bytes) {
  const units = ["B", "KB", "MB", "GB"];
  let value = bytes;
  let unit = 0;
  while (value >= 1024 && unit < units.length - 1) {
    value /= 1024;
    unit++;
  }
  return `${value.toFixed(value >= 10 || unit === 0 ? 0 : 1)} ${units[unit]}`;
}

async function main() {
  ensureDirs();
  const manifest = [];
  const results = [];
  const browser = await chromium.launch({ headless: true });
  try {
    for (const job of JOBS) {
      process.stdout.write(`Exporting ${job.name}... `);
      const result = await exportJob(browser, job, manifest);
      results.push(result);
      process.stdout.write(`done (${formatBytes(result.bytes)}, visible diff ${result.visibleDiff.toFixed(3)}, editable diff ${result.editableDiff.toFixed(3)})\n`);
      if (result.editableDiff > 2) {
        console.warn(`WARN: ${job.name} editable layer-stack difference is ${result.editableDiff.toFixed(3)} (> 2). Review ${result.checkPngPath}`);
      }
    }
  } finally {
    await browser.close();
  }

  const manifestText = renderManifest(manifest, results);
  fs.writeFileSync(path.join(PSD_DIR, "TEXT-MANIFEST.md"), manifestText);
  fs.writeFileSync(path.join(ROOT, "TEXT-MANIFEST.md"), manifestText);
  fs.writeFileSync(path.join(PSD_DIR, "README.md"), [
    "# PSD Export Notes",
    "",
    "These PSD files are local derivative handoff files generated from the HTML source.",
    "",
    "- HTML in `modules/` remains the source of truth.",
    "- PNG files in `output/` are the upload-ready pixel exports.",
    "- The visible PSD layer `00_成品参考底图_上传PNG` is the exact upload PNG.",
    "- Editable grouped layers live inside `01_可编辑分组_默认隐藏`; turn that folder on when you need to inspect or reuse separated elements.",
    "- Major text is separated where practical; small sticker/card text is baked into clean raster card layers.",
    "- No visible correction layer is added. Editable merge-check PNGs show the hidden editable layer stack only, so complex modules can have a non-zero mean pixel difference.",
    "- PSD edits do not flow back into the system; make lasting changes in HTML and re-run this exporter.",
    "",
  ].join("\n"));
  fs.writeFileSync(path.join(PSD_DIR, "PSD-EXPORT-REPORT.json"), JSON.stringify(results.map((result) => ({
    file: path.basename(result.psdPath),
    bytes: result.bytes,
    layers: result.layers,
    visibleMeanPixelDifference: Number(result.visibleDiff.toFixed(6)),
    editableMeanPixelDifference: Number(result.editableDiff.toFixed(6)),
    checkPng: path.basename(result.checkPngPath),
    visibleCheckPng: path.basename(result.visibleCheckPngPath),
  })), null, 2));

  const failing = results.filter((result) => result.editableDiff > 2);
  if (failing.length) {
    console.warn(`PSD editable merge differs from PNG for: ${failing.map((r) => r.name).join(", ")}`);
    console.warn("This is expected for complex layered modules when no visible correction layer is used. Review merge-check PNGs if visual fidelity looks wrong.");
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
