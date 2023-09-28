/// <reference types="cypress"/>

describe('template spec', () => {
    //This block inserts the data which is mentioned in the body of the request
    it('PUT request', () => {
    
    cy.request({method: 'PUT', url: 'https://reqres.in/api/user/2', body: {
        "name": "Lintani",
        "job": "QA"
    }}).then((response) =>{
    //Asserting the status code to be 201 for successful execution
    expect(response.status).to.eq(200)
    //Asserting the name which we have inserted into
    expect(response.body.name).to.eq("Lintani")
    expect(response.body.job).to.eq("QA")
    //Asserting the status text to confirm whether it is created
    })
    })
})
