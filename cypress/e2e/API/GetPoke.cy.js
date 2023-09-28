it.only('Validate Header', () => {
    cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
    cy.get('@pokemon').its('status').should('equal', 200)
    cy.get('@pokemon').its('headers').its('content-type')
        .should('include', 'application/json; charset=utf-8')
});


it.only('Validate Content', () => {
    cy.request('https://pokeapi.co/api/v2/pokemon/bulbasaur').as('bulbasaur')
    cy.get('@bulbasaur').its('status').should('equal', 200)
    cy.get('@bulbasaur').its('body').should('include', {name: 'bulbasaur'})
});

it.only('Tugas Validate Content', () => {
    cy.request({method: 'GET', url:'https://pokeapi.co/api/v2/ability/7/'}).then((response) =>{
    expect(response.body.name).to.eq('limber')
    })
});