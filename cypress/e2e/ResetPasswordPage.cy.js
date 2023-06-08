const users = require("../fixtures/users_credential.json")
const users_incorrect = require("../fixtures/users_incorrect.json")

const LoginObjects = require("../../src/pageObjects/main/fragments/Login.js");
const ComponentFactory = require("../../src/factory/ComponentFactory");
const SSOLogin = require("../../src/pageObjects/main/fragments/SSOLogin");
const ResetPasswordObjects = require("../../src/pageObjects/main/fragments/ResetPassword");


const factory = new ComponentFactory();

const loginObjects = factory.create('Login'); 


describe('Reset Password', async () => {
    beforeEach(() => {
        cy.visit('reset-password');
    })

    it('Open Reset Pass Page', () => {
        cy.url().should('match', /reset-password/)
    })

    it('Submit empty email', () => {
        loginObjects.clickSubmit();
        cy.contains('Please enter a valid email')
    })
    it('Input Email', () => {
        cy.get('input[name="email"]').type(users.email)
        loginObjects.clickSubmit();
    })

    it('Back to Login Page', () => {
        cy.get(ResetPasswordObjects.back).click()
        cy.url().should('include', '/login')
    })

})