const users = require("../fixtures/users_credential.json")
const users_incorrect = require("../fixtures/users_incorrect.json")

//const calendar = require("../../src/pageObjects/main/fragments/Calendar.js")
const LoginObjects = require("../../src/pageObjects/main/fragments/Login.js");
const ComponentFactory = require("../../src/factory/ComponentFactory");
const IF_Login = require("../../src/pageObjects/iFrames/IF_Login");



const factory = new ComponentFactory();

const loginObjects = factory.create('Login'); 


describe('Positive Login Tests',  () => {


    before(() => {

    
    })
    beforeEach(() => {
        cy.visit('login');
        cy.clearCookies()
        cy.clearLocalStorage()

    })


    it('Open Login Page', () => {
        cy.url().should('match', /login/)
    })

    it('Check that button is disabled', () => {
        cy.get('button[type="submit"]').should('be.disabled')

        loginObjects.typeEmail(users.email);
        cy.get('button[type="submit"]').should('be.disabled')
        cy.get('input[name = "email"]').clear()

        loginObjects.typePassword(users.password);
        cy.get('button[type="submit"]').should('be.disabled')
        cy.get('input[name = "password"]').clear()

    })


     it('Input login and password', () => {

         loginObjects.typeEmail(users.email)
         loginObjects.typePassword(users.password)

         cy.get('button[type="submit"]').should('be.enabled')
         loginObjects.clickSubmit();
         //cy.contains('Please enter a valid email')
         //cy.url().should('contain', /personal-page/);
         //sign out
      })

    

    it('Google Auth', () => {
        cy.get(IF_Login.signInGoogle).get('div[class="L5Fo6c-bF1uUb"]').click()
    })

      
    //dont work cause of text privacy policy
    it.skip('Sign In with SSO', () => {

        cy.get(LoginObjects.sso).click()
        cy.url().should('include', '/ssologin')

        cy.get('input[type="email"]').type(users.email)
        loginObjects.clickSubmit();

        cy.contains('Please enter a valid email')
    })

    it.skip('Privacy Policy', () => {

        cy.get(LoginObjects.privacyPolicy).invoke('removeAttr', 'target').click()
        cy.url().should('contain', /privacy-policy/)
    })

    it('visible password', () => {

        loginObjects.typePassword(users.password)
        cy.get(LoginObjects.eye).click()

        cy.get('input[type="text"]').should('be.visible')

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
            ///
        })
    })
})