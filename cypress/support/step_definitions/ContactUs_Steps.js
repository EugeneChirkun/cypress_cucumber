import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When('I type a first name', () => {
    cy.get('[name = "first_name"]').type("Johh");
})

When('I type a last name', () => {
    cy.get('[name="last_name"]').type("Doe");
})

When('I enter an email address', () => {
    cy.get('[name="email"]').type("johndoe@testmail.com");
})

When('I type a comment', () => {
    cy.get('[name="message"]').type("My test comment");
})

When('I click on the submit button', () => {
    cy.get('[type="submit"]').click();
})

Then('I should be presented with a successfull contact us submission message', () => {
    cy.get('h1').should('have.text', 'Thank You for your Message!');
})

Then('I should be presented with a unsuccessfull contact us submission message', () => {
    cy.get('body').contains('Error: Invalid email address');
})

When('I type a specific first name {string}', (firstName) => {
    cy.get('[name = "first_name"]').type(firstName);
})

When('I type a specific last name {string}', (lastName) => {
    cy.get('[name="last_name"]').type(lastName);
})

When('I type a specific email address {string}', (emailAddress) => {
    cy.get('[name="email"]').type(emailAddress);
})

When('I type a specific comment {string} and a number {int} within a comment field', (commentText, commentNumber) => {
    cy.get('[name="message"]').type(commentText + " " + commentNumber);
})