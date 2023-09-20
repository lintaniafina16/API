/// <reference types="cypress" />

describe('Searchbox Test', function() {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('Type into searchbox', () => {
        cy.get('#searchTerm').type('')
        cy.get('h2').should('contain.text', 'Search Results')
    })
})