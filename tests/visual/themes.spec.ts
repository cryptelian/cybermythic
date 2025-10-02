import { test, expect } from '@playwright/test';

const themeCss = [
  'public/style/anarchy.css',
  'public/style/anarchy-shadowrun.css',
  'public/style/anarchy-dark.css',
  'public/style/anarchy-darkglass.css',
];

themeCss.forEach((cssPath) => {
  test(`theme: ${cssPath}`, async ({ page }) => {
    await page.goto('/');
    await page.addStyleTag({ path: cssPath });
    await page.setContent(
      `
      <div class="wrapper-hexabox" style="--wrapper-padding: 10px; --wrapper-background-color: #fff; --wrapper-border-color: #000; width: 320px; height: 160px;">
        <div class="side up"></div>
        <div class="side down"></div>
        <div class="side left"></div>
        <div class="side right"></div>
        <div class="angle tl"></div>
        <div class="angle tr"></div>
        <div class="angle br"></div>
        <div class="angle bl"></div>
        <div class="content">Theme preview</div>
      </div>
    `,
      { waitUntil: 'domcontentloaded' },
    );
    await expect(page.locator('.wrapper-hexabox')).toHaveScreenshot({ maxDiffPixelRatio: 0.02 });
  });
});
