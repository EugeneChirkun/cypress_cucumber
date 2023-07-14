/// <reference types="cypress"/>

import BasePage from "./BasePage";

class LoginPage extends BasePage {
  navigateToLoginPage() {
    super.navigate("Login-Portal/index.html");
  }

  typeUserName(username) {
    cy.get("#text").type(username);
  }

  typePassword(password) {
    cy.get("#password").type(password);
  }

  clickLoginButton() {
    cy.get("#login-button").click();
  }
}

export default LoginPage;
