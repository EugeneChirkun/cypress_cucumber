/// <reference types="cypress"/>

import BasePage from "./BasePage";

class ContactUsPage extends BasePage {
  elements = {
    firstNameField: () => cy.get('[name = "first_name"]'),
    lastNameField: () => cy.get('[name="last_name"]'),
    emailAddressField: () => cy.get('[name="email"]'),
    commentField: () => cy.get('[name="message"]'),
    submitButton: () => cy.get('[type="submit"]'),
    submissionHeaderText: () => cy.xpath("//h1 | //body"),
  };

  navigateToContactUsPage() {
    super.navigate("Contact-Us/contactus.html");
  }

  typeFirstName(firstName) {
    this.elements.firstNameField().type(firstName);
  }

  typeLastName(lastName) {
    this.elements.lastNameField().type(lastName);
  }

  typeEmailAddress(emailAddress) {
    this.elements.emailAddressField().type(emailAddress);
  }

  typeComment(commentText) {
    this.elements.commentField().type(commentText);
  }

  clickSubmitButton() {
    this.elements.submitButton().click();
  }

  validateSubmissionHeader(expectedText) {
    this.elements.submissionHeaderText().invoke("text").should('include', expectedText);
  }
}

export default ContactUsPage;
