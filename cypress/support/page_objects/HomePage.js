/// <reference types="cypress"/>

import BasePage from "./BasePage";

class HomePage extends BasePage{
navigateToHomePage() {
    super.navigate("");
}

clickOnContactUsBtn() {
    cy.clickAndOpenLink_InSameTab('#contact-us');
}

clickOnLoginBtn() {
    cy.clickAndOpenLink_InSameTab('#login-portal');
}

clickOnToDoListBtn() {
    cy.clickAndOpenLink_InSameTab('#to-do-list');
}

}

export default HomePage;