import login from '../pages/login'
import loginData from '../fixtures/login'

describe('template spec', () => {

  loginData.forEach(credentials => {
    it(credentials.scenario, () => {
      cy.visit('')
      login.email().type(credentials.email)
      login.password().type(credentials.password)
      login.submit().click()
      login.invalidCredentials().should('have.text', credentials.message)
    })
  });
})