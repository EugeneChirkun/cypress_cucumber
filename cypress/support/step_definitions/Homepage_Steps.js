/// <reference types="cypress"/>
import { Given, When } from "@badeball/cypress-cucumber-preprocessor";

import HomePage from "../page_objects/HomePage";

const homePage = new HomePage();


Given('I navigate to the WebdriverUniversity homepage', () => {
    homePage.navigate("");
})

When('I click on the contact us button', () => {
    homePage.clickOnContactUsBtn();
})

When('I click on the login portal button', () => {
    homePage.clickOnLoginBtn();
})

When('I click on the to do list button', () => {
    homePage.clickOnToDoListBtn();
})