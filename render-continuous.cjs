const path = require("path");
const { chromium } = require("playwright");

const renders = [
  {
    file: "continuous-01-03.html",
    output: "continuous-01-03.png",
    width: 1464,
    height: 1800,
  },
  {
    file: "continuous-04-05.html",
    output: "continuous-04-05.png",
    width: 1464,
    height: 1200,
  },
  {
    file: "module-06-size-chart.html",
    output: "module-06-size-chart.png",
    width: 1464,
    height: 600,
  },
  {
    file: "module-07-brand-story.html",
    output: "module-07-brand-story.png",
    width: 1464,
    height: 600,
  },
];

(async () => {
  const browser = await chromium.launch({ headless: true });
  for (const item of renders) {
    const page = await browser.newPage({
      viewport: { width: item.width, height: item.height },
      deviceScaleFactor: 2,
    });
    const filePath = path.join(process.cwd(), "modules", item.file);
    await page.goto(`file://${filePath}`);
    await page.screenshot({
      path: path.join(process.cwd(), "output", item.output),
      fullPage: false,
    });
    await page.close();
  }
  await browser.close();
})();
