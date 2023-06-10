const users = require("../fixtures/users_credential.json")
const users_incorrect = require("../fixtures/users_incorrect.json")

const ComponentFactory = require("../../src/factory/ComponentFactory");
const SSOLogin = require("../../src/pageObjects/main/fragments/SSOLogin");


const factory = new ComponentFactory();

const SSOloginObjects = factory.create('SSOLogin'); 

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('Positive SSoLogin Tests', () => {

    beforeEach(() => {
        cy.visit('ssologin');
    })


    it('Open SSO Page', () => {
        cy.url().should('match', /ssologin/)
    })

    it('Input correct email', () => {

        SSOloginObjects.typeEmail(users.email)

        SSOloginObjects.checkStatusSubmit('be.enabled')
        SSOloginObjects.clickSubmit()

        //cy.url().should('contain', /personal-page/)
    })

    it('Back to Login Page', () => {
        SSOloginObjects.backToLogin()
        cy.url().should('include', '/login')
    })


    it('Learn More About', () => {
        cy.get(SSOLogin.learn).invoke('removeAttr', 'target').click()
        cy.url().should('include', Cypress.env('SUPPORT_URL'))
     })

})

describe('Negative SSOLogin Tests', () => {

    beforeEach(() => {
        cy.visit('ssologin');
    })

    it('Input incorrect email', () => {

        SSOloginObjects.typeEmail(users_incorrect.email)

        SSOloginObjects.checkStatusSubmit('be.enabled')
        SSOloginObjects.clickSubmit()

        cy.contains('Please enter a valid email')
    })
})