import { Page } from "@playwright/test";

export default class broadbandPage{
    constructor(public page: Page){ }
    async selectFiberPlan(){
        await this.page.locator("(//span[text()='Choose Plan'])[1]")
        .click();
        await Promise.all([
            this.page.waitForLoadState("networkidle")
        ])
        await this.page.locator("//span[text()='Next step']")
        .click();
    }    
}