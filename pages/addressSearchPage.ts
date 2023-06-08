import { Page } from "@playwright/test";

export default class addressSearchPage {
    constructor(public page: Page) {

    }
    async addressSearch() {
        await this.page.locator('#addressSearchTextbox')
            .type("22 Charlestown Drive, Flat Bush, Auckland 2019");
        // Click on the first link (find a better way to assert this)
        await this.page.locator('#ui-id-2').click();
        // Click on the show me prices button
        await this.page.getByRole('button', { name: 'Show me Prices' }).click();
    }
}