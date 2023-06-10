const users = require("../fixtures/users_credential.json")
const users_incorrect = require("../fixtures/users_incorrect.json")


const ComponentFactory = require("../../src/factory/ComponentFactory");
const ResetPassword = require("../../src/pageObjects/main/fragments/ResetPassword");


const factory = new ComponentFactory();

const ResetPasswordObjects = factory.create('ResetPassword'); 

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});


describe('Reset Password', async () => {

    beforeEach(() => {
        cy.visit('reset-password');
    })

    it('Open Reset Pass Page', () => {
        cy.url().should('match', /reset-password/)
    })

    it('Submit empty email', () => {
        ResetPasswordObjects.clickSubmit()
        cy.contains('Please enter a valid email')
    })

    it('Input correct email', () => {
        ResetPasswordObjects.typeEmail(users.email)
        ResetPasswordObjects.clickSubmit()

        ResetPasswordObjects.checkSuccessPopup()
        cy.contains("We've sent an email to")
    })

    it('Back to Login Page', () => {
        ResetPasswordObjects.backToLogin()
        cy.url().should('include', '/login')
    })

})

describe('Negative Reset Pass Test', () => {

    beforeEach(() => {
        cy.visit('reset-password');
    })

    it('Input incorrect email', () => {
        ResetPasswordObjects.typeEmail(users_incorrect.broken_email)
        ResetPasswordObjects.clickSubmit()

        cy.contains('Please enter a valid email')
    })
})