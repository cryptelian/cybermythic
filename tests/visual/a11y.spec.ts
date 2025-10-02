import { test, expect } from '@playwright/test';

// High-contrast container and focus ring check
test('a11y: focus ring and contrast mode', async ({ page }) => {
  await page.goto('/');
  await page.addStyleTag({ path: 'dist/style.css' });
  await page.setContent(
    `
    <div class="a11y-contrast" style="padding:16px">
      <button id="btn">Click me</button>
    </div>
  `,
    { waitUntil: 'domcontentloaded' },
  );
  await page.locator('#btn').focus();
  await expect(page.locator('.a11y-contrast')).toHaveScreenshot({ maxDiffPixelRatio: 0.02 });
});
