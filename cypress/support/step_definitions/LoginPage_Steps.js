/// <reference types="cypress"/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import LoginPage from "../page_objects/LoginPage";

const loginPage = new LoginPage();

let alertStub;

Given('I navigate to the WebdriverUniversity login page', () => {
    loginPage.navigateToLoginPage();
})

When('I type an username {}', (username) => {
    loginPage.typeUserName(username);
})

When('I type a password {}', (password) => {
    loginPage.typePassword(password);
})

When('I click on the login button', () => {
    alertStub = cy.stub();
    cy.on('window:alert', alertStub)
    loginPage.clickLoginButton();
})

Then('I shuold be presented with an alert box which contains text {string}', (expectedAlertText) => {
    expect(alertStub).to.have.been.calledWith(expectedAlertText);
})