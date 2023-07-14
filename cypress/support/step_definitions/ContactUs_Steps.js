/// <reference types="cypress"/>
import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

import ContactUsPage from "../page_objects/ContactUsPage";

const contactUsPage = new ContactUsPage();

Given("Given I navigate to the WebdriverUniversity contact us page", () => {
  contactUsPage.navigateToContactUsPage();
});

When("I type a first name {string}", (firstName) => {
  contactUsPage.typeFirstName(firstName);
});

When("I type a last name {string}", (lastName) => {
  contactUsPage.typeLastName(lastName);
});

When("I type an email address {string}", (emailAddress) => {
  contactUsPage.typeEmailAddress(emailAddress);
});

When(
  "I type a comment {string} within a comment field",
  (commentText, commentNumber) => {
    contactUsPage.typeComment(commentText);
  }
);

When(
  "I type a first name {string} and a last name {string}",
  (firstName, lastName) => {
    contactUsPage.typeFirstName(firstName);
    contactUsPage.typeLastName(lastName);
  }
);

When(
  "I type an email address {string} and a comment {string}",
  (emailAddress, commentText) => {
    contactUsPage.typeEmailAddress(emailAddress);
    contactUsPage.typeComment(commentText);
  }
);

When("I click on the submit button", () => {
  contactUsPage.clickSubmitButton();
});

Then(
  "I should be presented with a successfull contact us submission message",
  () => {
    contactUsPage.validateSubmissionHeader("Thank You for your Message!");
  }
);

Then(
  "I should be presented with a unsuccessfull contact us submission message",
  () => {
    contactUsPage.validateSubmissionHeader("Error: Invalid email address");
  }
);

Then("I should be presented with a header text {string}", (headerMessage) => {
  contactUsPage.validateSubmissionHeader(headerMessage);
});
