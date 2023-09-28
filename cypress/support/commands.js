// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('login', (username, password) => {
    cy.clearCookies()
    cy.clearLocalStorage()

       cy.get('#user_login').clear()
       cy.get('#user_login').type(username)

       cy.get('#user_password').clear()
       cy.get('#user_password').type(password)
       cy.get('#user_remember_me').check()
       cy.get('*[class^="btn btn-primary"]').click()
  

})

Cypress.Commands.add('loginViaAPI', (
    email = Cypress.env('userEmail'),
    password = Cypress.env('userPassword'),
    url = Cypress.env('apiUrl')
  ) => {
    cy.request('POST', `${url}/users/login`, {
      username: email,
      password,
    }).then((response) => {
      cy.setCookie('sessionId', response.body.sessionId)
      cy.setCookie('userId', response.body.userId)
      //cy.setCookie('userName', response.body.userName)
      cy.visit(`${url}/#!/main`)
    })
 })
 