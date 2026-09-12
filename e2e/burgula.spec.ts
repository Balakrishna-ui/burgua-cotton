import { test, expect } from '@playwright/test';

test.describe('Burgula Cotton Public Website E2E', () => {
  test('HomePage loads with core brand message and hero', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Burgula Cotton/i);
    await expect(page.locator('h1')).toContainText('Burgula Cotton');
    await expect(page.locator('text=In Cotton We Trust')).toBeVisible();
    await expect(page.locator('text=Cotton → Yarn → Weaving → Cloth')).toBeVisible();
  });

  test('Navigation links exist and route to About Us and Textiles', async ({ page }) => {
    await page.goto('/');
    await page.click('nav >> text=ABOUT US');
    await expect(page).toHaveURL(/.*about/);
    await expect(page.locator('h1')).toContainText('About Burgula Cotton');

    await page.click('nav >> text=TEXTILES');
    await expect(page).toHaveURL(/.*textiles/);
    await expect(page.locator('h1')).toContainText('Handloom Fabric Library');
  });

  test('B2B Trade Portal enquiry submission form works', async ({ page }) => {
    await page.goto('/b2b');
    await expect(page.locator('h1')).toContainText('B2B & Bespoke Fabric Development');

    await page.fill('#companyName', 'Playwright Test Studio');
    await page.fill('#contactName', 'Test Lead');
    await page.fill('#email', 'test@studio.com');
    await page.fill('#phone', '+91 9876543210');
    await page.fill('#intendedUse', 'E2E Testing of B2B submission');

    await page.click('button[type="submit"]');
    await expect(page.locator('text=Enquiry Received')).toBeVisible();
    await expect(page.locator('text=ENQ-')).toBeVisible();
  });
});
