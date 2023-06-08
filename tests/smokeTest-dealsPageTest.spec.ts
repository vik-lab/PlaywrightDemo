import { expect, test } from "../base/fixture";

test("samsungDealLink", async ({page, baseURL, homePage, dealsPage}) => {
    await page.goto(`${baseURL}`);
    await homePage.dealsLink();
    await expect(page).toHaveTitle(/Deals/);
    await dealsPage.samsungYouChoose();
    await expect(page).toHaveTitle(/Address Lookup/);
    await expect(page).toHaveURL(/.*\/samsung/);
})

test("twevelMonthsLink", async ({page, baseURL, homePage, dealsPage}) => {
    await page.goto(`${baseURL}`);
    await homePage.dealsLink();
    await expect(page).toHaveTitle(/Deals/);
    await dealsPage.twelveMonths();
    await page.waitForLoadState("networkidle");
    await expect(page).toHaveURL(/.*\/12-months/);
})

test("electricityOnlyLink", async ({page, baseURL, homePage, dealsPage}) => {
    await page.goto(`${baseURL}`);
    await homePage.dealsLink();
    await expect(page).toHaveTitle(/Deals/);
    await dealsPage.eletricityOnly();
    await page.waitForLoadState("networkidle");
    await expect(page).toHaveURL(/.*\/electricity-open/);
})