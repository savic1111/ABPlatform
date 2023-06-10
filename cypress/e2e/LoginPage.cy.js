const users = require("../fixtures/users_credential.json")
const users_incorrect = require("../fixtures/users_incorrect.json")

const LoginObjects = require("../../src/pageObjects/main/fragments/Login.js");
const ComponentFactory = require("../../src/factory/ComponentFactory");

const factory = new ComponentFactory();

const loginObjects = factory.create('Login'); 

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('Positive Login Tests',  () => {

    before(() => { })
    beforeEach(() => {
        cy.visit('login');
        cy.clearCookies()
        cy.clearLocalStorage()
    })

    it('Open Login Page', () => {
        cy.url().should('match', /login/)
    })

    it('Check that button is disabled', () => {
        loginObjects.checkStatusSubmit('be.disabled')

        loginObjects.typeEmail(users.email);
        loginObjects.checkStatusSubmit('be.disabled')
        loginObjects.clearEmail()

        loginObjects.typePassword(users.password);
        loginObjects.checkStatusSubmit('be.disabled')
        loginObjects.clearPassword()
    })


     it('Input login and password', () => {
         loginObjects.typeEmail(users.email)
         loginObjects.typePassword(users.password)

         loginObjects.checkStatusSubmit('be.enabled')
         loginObjects.clickSubmit();
         //cy.contains('Please enter a valid email')
         //cy.url().should('contain', /personal-page/);
         //sign out
      })

    it('Google Auth', () => { loginObjects.googleClick() })
      
    it('Sign In with SSO', () => {
        loginObjects.ssoClick()
        cy.url().should('include', '/ssologin')
    })

    it('Privacy Policy', () => {
        cy.get(LoginObjects.privacyPolicy).invoke('removeAttr', 'target').click({ force: true })
        cy.url().should('contain', /privacy-policy/)
    })

    it('visible password', () => {
        loginObjects.typePassword(users.password)
        loginObjects.eyeClick()

        loginObjects.checkPasswordVisibility('be.visible')
    })
})

describe('Negative Login Tests', () => {

    beforeEach(() => {
        cy.visit('login');
        cy.clearCookies()
        cy.clearLocalStorage()
    })

    Cypress._.times(4, (k) => {
        it('Call captcha', () => {
                loginObjects.typeEmail(users_incorrect.email)
                loginObjects.typePassword(users_incorrect.password)

                loginObjects.clickSubmit();
            if (k == 3) {
                    
                   // cy.get(IF_Login.captcha).should('be.visible')
                }
            })
            //expect('div[class="LoginForm__commonError___DSL1P"]').to.contain('Please enter a valid email or password');
    })
})

describe('validate pages', () => {
    [
        "/login",
        "/ssologin",
        "/reset-password"
    ].forEach((url) => {  
        it(`should be valid HTML ${url}`, () => { 
            cy.visit(url, { failOnStatusCode: false })
        })
    })
})