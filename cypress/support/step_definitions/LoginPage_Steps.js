import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

let alertStub;

When('I type an username {}', (username) => {
    cy.get('#text').type(username);
})

When('I type a password {}', (password) => {
    cy.get('#password').type(password);
})

When('I click on the login button', () => {
    alertStub = cy.stub();
    cy.on('window:alert', alertStub)
    cy.get('#login-button').click();
})

Then('I shuold be presented with an alert box which contains text {string}', (expectedAlertText) => {
    expect(alertStub).to.have.been.calledWith(expectedAlertText);
})