/// <reference types="cypress"/>

// describe('Get User List', () => {
//     it('Add a new user', () => {
//         var user={
//             "name": "Lintani",
//             "job": "leader"
//         }
//     cy.request('POST', 'https://reqres.in/api/users', user).then((response) => {
//         expect(response.status).equal(201)
//         expected(response.user.name).to.eq('Lintani')
//     })
   
//     })
// })

describe('template spec', () => {
    //This block inserts the data which is mentioned in the body of the request
    it('POST request', () => {
    
    cy.request({method: 'POST', url: 'https://reqres.in/api/users', body: {
        "name": "Lintani",
        "job": "leader"
    }}).then((response) =>{
    //Asserting the status code to be 201 for successful execution
    expect(response.status).to.eq(201)
    //Asserting the name which we have inserted into
    expect(response.body.name).to.eq("Lintani")
    expect(response.body.job).to.eq("leader")
    //Asserting the status text to confirm whether it is created
    expect(response.statusText).to.eq("Created")
    })
    })
})