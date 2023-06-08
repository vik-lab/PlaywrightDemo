import { Page } from "@playwright/test";
import * as data from "../testData/signupForm-testData.json";
export default class loginPage {
    constructor(public page: Page) {

    }
    async enterUserName(email: string) {
        await this.page.locator("#signInName").type(email);
    }

    async enterPassword(password: string) {
        await this.page.locator("input[type='password']").type(password);
    }

    async clickLogin() {
        await this.page.locator("button:has-text('Log in')").click();
    }

    async createYourLogin() {
        // Wait for the login page to load
        await this.page.waitForLoadState('networkidle');

        // Wait for the "Create Your Login" link to be present in the DOM
        await this.page.waitForSelector('a:has-text("Create Your Login")');

        // Get the "Create Your Login" link element
        const createLoginLink = await this.page.$('a:has-text("Create Your Login")');

        // Scroll the element into view
        await createLoginLink?.scrollIntoViewIfNeeded();
        
        // Click on the "Create Your Login" link
        await createLoginLink?.click();
    }
}