import { test, expect } from '@playwright/test';

test('global wrapper renders correctly', async ({ page }) => {
  await page.goto('/');
  await page.addStyleTag({ path: 'dist/style.css' });
  await page.setContent(
    `
    <div class="wrapper-hexabox" style="--wrapper-padding: 8px; --wrapper-background-color: #fff; --wrapper-border-color: #000; width: 240px; height: 120px;">
      <div class="side up"></div>
      <div class="side down"></div>
      <div class="side left"></div>
      <div class="side right"></div>
      <div class="angle tl"></div>
      <div class="angle tr"></div>
      <div class="angle br"></div>
      <div class="angle bl"></div>
      <div class="content">Sample</div>
    </div>
  `,
    { waitUntil: 'domcontentloaded' },
  );

  await page.waitForTimeout(50);
  await expect(page.locator('.wrapper-hexabox')).toHaveScreenshot({
    maxDiffPixelRatio: 0.01,
  });
});
