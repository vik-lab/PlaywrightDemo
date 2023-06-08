import { Page } from "@playwright/test";

export default class homePage {
    constructor(public page: Page) {
    }
    async electricityLink() {
        await this.page.locator('#mcy_mobileNavSection').getByRole('link', { name: 'Electricity' }).click();
    }
    async electricityLinkExists() {
        await this.page.locator('#mcy_mobileNavSection').getByRole('link', { name: 'Electricity' });
    }
    async gasLink() {
        await this.page.locator('#mcy_mobileNavSection').getByRole('link', { name: 'Gas' }).click();
    }
    async broadbandLink() {
        await this.page.locator('#mcy_mobileNavSection').getByRole('link', { name: 'Broadband' }).click();
    }
    async mobilePlansLink() {
        await this.page.locator('#mcy_mobileNavSection').getByRole('link', { name: 'Mobile'}).click();
    }
    async dealsLink() {
        // Find the deals link
        const dealsLinkLocator = this.page.getByRole('link', { name: 'Deals' });
        const linkElement = await dealsLinkLocator.first();

        // Perform actions on the located element
        await linkElement.click();
    }
    async loginLink() {
        const loginLnk = await this.page.getByRole('link', { name: 'LOGIN' });
        await loginLnk?.click();
    }
}