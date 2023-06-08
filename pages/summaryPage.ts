import {Page} from "@playwright/test";

export default class summaryPage {
    constructor (public page: Page) { }
    async clickNextStep() {
        await Promise.all ([
            this.page.waitForLoadState("networkidle")
        ])
        await this.page.locator("//span[text()='Next step']")
        .click();
    }
}
