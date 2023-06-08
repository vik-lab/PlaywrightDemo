import { Page, expect } from "@playwright/test";

export default class signUpForm {
    constructor(public page: Page) {
    }
    async enterFirstName(firstname: string) {
        await this.page.locator("#firstName")
            .type(firstname);
    }
    async enterLastName(lastname: string) {
        await this.page.locator("#lastName")
            .type(lastname);
    }
    async enterMobileNumber(mobilenumber: string) {
        await this.page.locator("#contactNumber")
            .type(mobilenumber);
    }
    async enterDob(dob: string) {
        await this.page.locator("#dateOfBirth")
            .type(dob);
    }
    async enterEmailAddress(email: string) {
        await this.page.locator("#emailAddress")
            .type(email);
    }
    //button click drivers license
    async chooseDriversLicense() {
        await this.page.click("#identificationOptionLicense")
    }
    //enter drivers license#
    async enterDriversLicenseNumber(licensenumber: string) {
        await this.page.locator("#driverLicenseNumber")
            .type(licensenumber);
    }
    //enter license version#
    async enterLicenseVersion(licenseversion: string) {
        await this.page.locator("#driverLicenseVersion")
            .type(licenseversion);
    }

    //new section: ABOUT YOUR PROPERTY
    //what is your preferred start date for services?
    async selectStartDateAsap() {
        await this.page.click("#preferredDateASAP")
    }
    // is this your current address #currentAddressYes
    async selectAlreadyLiveHere() {
        await this.page.click("#currentAddressYes")
    }
    // Is anyone at this address considered a vulnerable person?
    async selectNoToVulnerablePerson() {
        await this.page.click("#vulnerablePersonNo")
    }
    //Is anyone at the address dependent on medical equipment?
    async selectNoToDependentOnMedicalEquipment() {
        await this.page.click("#medicalEquipmentNo")
    }
    //Is there a dog at the property?
    async selectNoToDogAtProperty() {
        await this.page.click("#isThereADogNo")
    }
    //Do you have a Medical Alarm - No
    async selectMedicalAlarmNo() {
        await this.page.click("#medicalAlarmNo")
    }
    //Do you have a Medical Alarm - Yes
    async selectMedicalAlarmYes() {
        await this.page.click("#medicalAlarmYes")
    }
    //Who currently supplies your broadband? xpath (//p[@class='fancy_placeholder fancy_placeholder_text'])[2]
    async selectBroadbandSupplier() {
        // Find the deals link
        const broadbandList = this.page.locator("//li[text()='Spark']");
        //const selectElement = await broadbandList.first();

        // Perform actions on the located element
        await broadbandList.click();
        // await Promise.all([
        //     this.page.waitForLoadState("networkidle")
        // ])
        // await selectElement.fill("Spark");
        // await this.page.locator("//span[text()='Select your supplier']")
        // .type("Spark")
        // Single selection matching the value
        // await Promise.all([
        //     this.page.waitForLoadState("networkidle")
        // ])
        // await this.page.locator("//li[text()='Spark']").click();
    }
   
    //acknoledge check
    async acknowledgeCreditCheck() {
        await this.page.locator('div#creditCheckbox>label>span').first().click();
    }
    //check terms and conditions
    
    async termsAndConditions() {
        await this.page.locator('div#termsAndConditionsCheckbox>label>span').first().click();
    }
    // click on the signMeUp button
    async signMeUpButton() {
        await this.page.click("button#submitSignupInfo>span");
    }
}

export const test = signUpForm;