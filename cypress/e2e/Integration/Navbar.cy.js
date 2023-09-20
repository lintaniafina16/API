/// <reference types="cypress" />

describe('Inputing with input', () =>{
    beforeEach('visit the website',()=>{
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include','index.html')
    });

    it('Navbar', () => {
        cy.get('#onlineBankingMenu').click()
        cy.url().should('include','online-banking.html')
        cy.get('h1').should('have.text', 'Online Banking')
        cy.get('#onlineBankingMenu').should('have.class', 'active')
                

        cy.get('#feedback').click()
        cy.url().should('include','feedback.html')
        cy.contains('Frequently Asked Questions').should('be.visible')
        cy.get('*[class^="controls pictured"]').should('be.visible')

        

        cy.contains('Zero Bank').click()
        cy.url().should('include','index.html')
        cy.get('#homeMenu').should('have.class', 'active')
        cy.get('*[class^="btn btn-small btn-info"]').should('be.visible')
        cy.get('#carousel > div > div.active.item > img').should('be.visible')
        


    });

});