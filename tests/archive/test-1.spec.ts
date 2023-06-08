import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.dexwebsiteqa.tpower.net.nz/');
  
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/MERCURY WEBSITE NEW/);
  // Find the deals link and click on it
  await page.getByRole('link', { name: '/deals' }).click();
  // Find the button SYC and click on it
  await page.getByRole('link', { name: 'Samsung You Choose' }).click();
  // Locate the address finder to enter a new address
  await page.getByPlaceholder('e.g. 123 Long Street, Brooklyn, Wellington').click();
  // Enter the address await page.getByPlaceholder('e.g. 123 Long Street, Brooklyn, Wellington').click();
  await page.getByPlaceholder('e.g. 123 Long Street, Brooklyn, Wellington').fill('22 Charlestown Drive, Flat Bush, Auckland 2019');
  // Click on the first link (find a better way to assert this)
  await page.locator('#ui-id-2').click();
  // Click on the show me prices button
  await page.getByRole('button', { name: 'Show me Prices' }).click();
  // Take a screenshot and save it to a file
  await page.screenshot({ path: '22CharlesTown.png' });
  

  // Close the browser
  //await browser.close()
  
});