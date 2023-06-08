import { expect, test } from "../base/fixture";
import * as data from "../testData/signupForm-testData.json";

test("electricityOnlySignUp", async ({page, baseURL, dealsPage, homePage, addressSearchPage, electricityUsagePage, broadbandPage, summaryPage, signUpForm}) => {
    await page.goto(`${baseURL}`);
    await homePage.dealsLink();
    const spanElement = await page.waitForSelector('//span[text()="Deals"]');
    const spanText = await spanElement.innerText();
    expect(spanText).toEqual('Deals');
    //click on electricity only deal
    await dealsPage.eletricityOnly();
    await addressSearchPage.addressSearch();
    await electricityUsagePage.selectNextStep();
    await page.waitForLoadState("networkidle");
    await summaryPage.clickNextStep();
    //singup formsi
    await signUpForm.enterFirstName(data.firstName);
    await signUpForm.enterLastName(data.lastName);
    await signUpForm.enterMobileNumber(data.mobileNumber);
    await signUpForm.enterDob(data.dob);
    await signUpForm.enterEmailAddress(data.email);
    // Identification details
    await signUpForm.chooseDriversLicense();
    await signUpForm.enterDriversLicenseNumber(data.driversLicenseNumber);
    await signUpForm.enterLicenseVersion(data.licenseVersion);
    //about the property
    await signUpForm.selectStartDateAsap();
    await signUpForm.selectAlreadyLiveHere();
    await signUpForm.selectNoToVulnerablePerson();
    await signUpForm.selectNoToDependentOnMedicalEquipment();
    await signUpForm.selectNoToDogAtProperty();
    //await signUpForm.selectMedicalAlarmNo();
    // acknowledge checks
    await signUpForm.acknowledgeCreditCheck();   
    await signUpForm.termsAndConditions();
    //signup
    await signUpForm.signMeUpButton();  
})