export default {
    email: () => cy.get('[type="email"]'),
    password: () => cy.get('[type="password"]'),
    submit: () => cy.get('.submit_button'),
    invalidCredentials: () => cy.get('p')
}