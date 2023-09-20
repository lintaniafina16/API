/// <reference types="cypress" />

describe('Searchbox Test', function() {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include','index.html')
    })

    it('Type into searchbox', () => {
        cy.get('#searchTerm').type('online{enter}')
        cy.get('h2').should('contain.text', 'Search Results')
        cy.get('a').should('contain.text', 'Zero - Free Access to Online Banking')
        cy.get('a').should('contain.text', 'Zero - Online Statements')

    })
})