import { Page, expect } from "@playwright/test";

export default class electricityUsagePage {
    constructor (public page: Page) { }
    async selectNextStep() {
        await this.page.locator("(//div[@class='summarysidebar__summaryTitle'])[1]").screenshot();
        // await this.expect.locator("(//div[@class='infoSection'])[1]")
        await this.page.locator("//span[text()='Next step']").click();
    }
}