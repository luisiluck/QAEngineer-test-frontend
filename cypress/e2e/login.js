import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import login from '../pages/login'

Given("I am on the login page", () => {
    cy.visit("/");
  });
  
  When("I login with {string} and {string}", (email, password) => {
    login.email().type(email)
    login.password().type(password)
    login.submit().click()
  });

  Then("I should see the message {string}", (message) => {  
    login.invalidCredentials().should('have.text', message)
  });