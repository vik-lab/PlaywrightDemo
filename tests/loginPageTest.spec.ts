import { expect, test } from "../base/fixture";
import * as data from "../testData/signupForm-testData.json" 


test("loginCheck", async ({page, baseURL, homePage, loginPage}) => {
    await page.goto(`${baseURL}`);
    await homePage.loginLink();
    await expect(page).toHaveTitle(/Login | Mercury/);
    await loginPage.enterUserName(data.loginEmail);
    await loginPage.enterPassword(data.loginPassword);
    await loginPage.clickLogin();    
})

test("createYourLogin", async ({page, baseURL, homePage, loginPage}) => {
    await page.goto(`${baseURL}`);
    await homePage.loginLink();
    await expect(page).toHaveTitle(/Login | Mercury/);
    await page.waitForLoadState("load");
    await loginPage.createYourLogin();
    

})

