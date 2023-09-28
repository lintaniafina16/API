it.only('Validate Header', () => {
    cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
    cy.get('@pokemon').its('status').should('equal', 200)
    cy.get('@pokemon').its('headers').its('content-type')
        .should('include', 'application/json; charset=utf-8')
});
