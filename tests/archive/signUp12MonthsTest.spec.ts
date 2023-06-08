// import { expect, test } from "@playwright/test";
// import DealsPage from "../pages/dealsPage";
// import HomePage from "../pages/homePage";
// import AddressSearchPage from "../pages/addressSearchPage";
// import ElectricityUsagePage from "../pages/electricityUsagePage";
// import BroadbandPage from "../pages/broadbandPage";
// import SummaryPage from "../pages/summaryPage";
// import SignUpForm from "../pages/signUpForm";

// const firstName = "Sammy";
// const lastName = "Success";
// const mobileNumber = "0229182773";
// const dob = "12/07/1947";
// const email = "12monthsmercurytest@mailinator.com";
// const driversLicenseNumber = "DI531421";
// const licenseVersion = "4a";

// test("signUp12MonthsTest", async ({ page, baseURL }) => {
//     const pageLink = new HomePage(page);
//     const dealLink = new DealsPage(page);
//     const addressSearch = new AddressSearchPage(page);
//     const electricityUsagePage = new ElectricityUsagePage(page);
//     const broadbandPage = new BroadbandPage(page);
//     const summaryPage = new SummaryPage(page);
//     const signUpForm = new SignUpForm(page);

//     await page.goto(`${baseURL}`);
//     await pageLink.dealsLink();
//     //assert to be on the right link
//     //await expect(page).toHaveTitle(/JOIN/);
//     const spanElement = await page.waitForSelector('//span[text()="Deals"]');
//     const spanText = await spanElement.innerText();
//     expect(spanText).toEqual('Deals');
//     //click on electricity only deal
//     await dealLink.twelveMonths();
//     //await expect(page).toHaveTitle(/12 Months/);  
    
//     await addressSearch.addressSearch();
    
//     //electricity usage
//     //assertion to check the summary sidebar address
//     //assertion to check the electricity rate for the address
//     await electricityUsagePage.selectNextStep();
//     await page.waitForLoadState("networkidle");
//     //assertion to check plan selected router selected
//     //assertion on the summary sidebar 
//     await broadbandPage.selectFiberPlan();
//     await page.waitForLoadState("networkidle");
//     // assertion on the summary page address, services selected
//     await summaryPage.clickNextStep();

//     //singup formsi
//     await signUpForm.enterFirstName(firstName);
//     await signUpForm.enterLastName(lastName);
//     await signUpForm.enterMobileNumber(mobileNumber);
//     await signUpForm.enterDob(dob);
//     await signUpForm.enterEmailAddress(email);
//     await signUpForm.chooseDriversLicense();
//     await signUpForm.enterDriversLicenseNumber(driversLicenseNumber);
//     await signUpForm.enterLicenseVersion(licenseVersion);
//     await signUpForm.selectStartDateAsap();
//     await signUpForm.selectAlreadyLiveHere();
//     await signUpForm.selectNoToVulnerablePerson();
//     await signUpForm.selectNoToDependentOnMedicalEquipment();
//     await signUpForm.selectNoToDogAtProperty();
//     await signUpForm.selectMedicalAlarmNo();
//     await signUpForm.selectBroadbandSupplier();
//     // await signUpForm.acknowledgeCheck();
//     await signUpForm.acknowledgeCreditCheck();
//     await signUpForm.termsAndConditions();
//    // await signUpForm.signMeUpButton();
//     //await page.browser.close();
// })