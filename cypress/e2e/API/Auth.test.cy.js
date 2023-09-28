/// <reference types="cypress" />

describe('Inputing with input', () =>{
    
    it('Successfully login using headers',() => {
        cy.loginViaAPI()
        cy.contains('h2', 'Models').should('be.visible')
    })

})