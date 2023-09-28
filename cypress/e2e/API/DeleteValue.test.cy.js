/// <reference types="cypress"/>

describe('template spec', () => {
    //This block inserts the data which is mentioned in the body of the request
    it('PUT request', () => {
    
    cy.request({method: 'DELETE', url: 'https://reqres.in/api/users/2', body: {
        //"name": "Lintani",
        //"job": "QA"
    }}).then((response) =>{
    //Asserting the status code to be 201 for successful execution
    expect(response.status).to.eq(204)
    //Asserting the name which we have inserted into
    //Asserting the status text to confirm whether it is created
    })
    })
})
