const path = require("path");
const { chromium } = require("playwright");

const modules = [
  { file: "module-01-hero.html", width: 1464, height: 600 },
  { file: "module-02-detail-grid.html", width: 1464, height: 600 },
  { file: "module-03-fabric.html", width: 1464, height: 600 },
  { file: "module-04-scenarios.html", width: 1464, height: 600 },
  { file: "module-05-styling-color.html", width: 1464, height: 600 },
  { file: "module-06-size-chart.html", width: 1464, height: 600 },
  { file: "module-07-brand-story.html", width: 1464, height: 600 },
];

(async () => {
  const browser = await chromium.launch({ headless: true });
  for (const mod of modules) {
    const page = await browser.newPage({
      viewport: { width: mod.width, height: mod.height },
      deviceScaleFactor: 2,
    });
    const filePath = path.join(process.cwd(), "modules", mod.file);
    await page.goto(`file://${filePath}`);
    await page.screenshot({
      path: path.join(process.cwd(), "output", mod.file.replace(".html", ".png")),
      fullPage: false,
    });
    await page.close();
  }
  await browser.close();
})();
