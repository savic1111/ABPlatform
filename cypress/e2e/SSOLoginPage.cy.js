const users = require("../fixtures/users_credential.json")

const LoginObjects = require("../../src/pageObjects/main/fragments/Login.js");
const ComponentFactory = require("../../src/factory/ComponentFactory");
const SSOLogin = require("../../src/pageObjects/main/fragments/SSOLogin");


const factory = new ComponentFactory();

const loginObjects = factory.create('Login'); 


describe('Positive SSoLogin Tests', () => {
    beforeEach(() => {
        cy.visit('ssologin');
    })


    it('Open SSO Page', () => {
        cy.url().should('match', /ssologin/)
    })

    it('Input correct email', () => {

        cy.get('input[type="email"]').type(users.email)
       
        cy.get('button[type="submit"]').should('be.enabled')
        loginObjects.clickSubmit();
    })

    it('Back to Login Page', () => {
        cy.get(SSOLogin.back).click()
        cy.url().should('include', '/login')
    })


    it('Learn More About', () => {
        cy.get(SSOLogin.learn).invoke('removeAttr', 'target').click()
       
       // cy.url().should('include', 'https://support.abtasty.com')
     })

})

describe('Negative SSOLogin Tests', () => { })