/// <reference types="cypress"/>

describe('Delete User List', () => {
    it('Delete user data value', () => {
        cy.request('DELETE','https://reqres.in/api/users/2').then((response) => {
            expect(response.status).equal(204)
            expect(response).to.not.deep.include({name: "Lintani",job: "SPV" })
        })
        
    });
})