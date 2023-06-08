import { expect, test } from "../base/fixture";

test("checkElectricityPageLink", async ({page, baseURL, homePage}) => {

    await page.goto(`${baseURL}`);
    await homePage.electricityLink();
    await expect(page).toHaveTitle(/Electricity/);
})

test("checkGasPageLink", async ({page, baseURL, homePage}) => {

    await page.goto(`${baseURL}`);
    await homePage.gasLink();
    await expect(page).toHaveTitle(/Gas/);
})

test("checkBroadbandPageLink", async ({page, baseURL, homePage}) => {

    await page.goto(`${baseURL}`);
    await homePage.broadbandLink();
    await expect(page).toHaveTitle(/Broadband/)
})

test("checkMobilePlansLink", async ({page, baseURL, homePage}) => {

    await page.goto(`${baseURL}`);
    await homePage.mobilePlansLink();
    await expect(page).toHaveTitle(/Mobile/);
})

test("checkDealsLink", async ({page, baseURL, homePage}) => {

    await page.goto(`${baseURL}`);
    await homePage.dealsLink();
    await expect(page).toHaveTitle(/Deals/);
})