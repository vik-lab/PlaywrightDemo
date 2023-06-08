import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.dexwebsiteuat.tpower.net.nz/');
  await page.locator('#mcy_mobileNavSection').getByRole('link', { name: 'Electricity' }).click();
  await page.locator('#mcy_mobileNavSection').getByRole('link', { name: 'Gas' }).click();
  await page.locator('#mcy_mobileNavSection').getByRole('link', { name: 'Broadband' }).click();
  await page.getByRole('link', { name: 'Mobile Plans' }).click();
  await page.getByRole('link', { name: 'Deals' }).click();
});