import {test as baseTest} from "@playwright/test";
import DealsPage from "../pages/dealsPage";
import HomePage from "../pages/homePage";
import AddressSearchPage from "../pages/addressSearchPage";
import ElectricityUsagePage from "../pages/electricityUsagePage";
import BroadbandPage from "../pages/broadbandPage";
import SummaryPage from "../pages/summaryPage";
import SignUpForm from "../pages/signUpForm";
import LoginPage from "../pages/loginPage";

type pages = {
    dealsPage: DealsPage;
    homePage: HomePage;
    addressSearchPage: AddressSearchPage;
    electricityUsagePage: ElectricityUsagePage;
    broadbandPage: BroadbandPage;
    summaryPage: SummaryPage;
    signUpForm: SignUpForm;
    loginPage: LoginPage;

}

const basePages = baseTest.extend<pages>({
    dealsPage: async({ page}, use) => {
        await use(new DealsPage(page));
    },
    homePage: async({ page}, use) => {
        await use(new HomePage(page));
    },
    addressSearchPage: async({ page}, use) => {
        await use(new AddressSearchPage(page));
    },
    electricityUsagePage: async({ page}, use) => {
        await use(new ElectricityUsagePage(page));
    },
    broadbandPage: async({ page}, use) => {
        await use(new BroadbandPage(page));
    },
    summaryPage: async({ page}, use) => {
        await use(new SummaryPage(page));
    },
    signUpForm: async({ page}, use) => {
        await use(new SignUpForm(page));
    },
    loginPage: async({ page}, use) => {
        await use(new LoginPage(page));
    },
})

export const test = basePages;
export const expect = basePages.expect;