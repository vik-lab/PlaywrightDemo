import { Page, Locator } from "@playwright/test";

export default class dealsPage {
    constructor(public page: Page) {   
    }
    async samsungYouChoose() {
        await this.page.getByRole('link', { name: 'Samsung You Choose' }).click(); 
    }

    async twelveMonths() {
        await this.page.getByRole('link', { name: '12 Months' }).click(); 
    }

    async eletricityOnly() {
        await this.page.getByRole('link', { name: 'Electricity Only' }).click(); 
    }

}