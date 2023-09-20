/// <reference types="cypress" />

describe('Inputing with input', () =>{
    beforeEach('visit the website',()=>{
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include','login.html')
    });


    it('if invalid login', () => {
        cy.fixture('user').then(user => {
            const username = user.username
            const password = user.password
    
        cy.login(username, password)
        cy.wait(2000)
        cy.get('*[class^="brand"]').should('have.text', 'Zero Bank')
        
       
        cy.contains('username').click()
        cy.get('#logout_link').click()
        //cy.wait(4000)
        cy.get('#homeMenu').should('have.text', 'Home')
        //cy.get('*[class^="signin btn btn-info"]').should('have.class', '*[class^="icon-signin"]')
        
        


        //cy.get('*[class^="alert-error"]').should('be.visible').and('contain.text', 'Login and/or password are wrong.')
        })
        
    })
})