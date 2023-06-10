const IF_Login = require("../../iFrames/IF_Login");

class Login  {
s

    static get email_field() {
        return 'input[name = "email"]';
    }

    static get password() {
        return 'input[name = "password"]';
    }

    static get privacyPolicy() {
        return 'a[class="LoginPage__privacyPolicyLink___G2cbf"]';
    }

    static get submit() {
        return 'button[type="submit"]';
    }

    static get eye() {
        return 'svg[data-testid="showIcon"]';
    }

    static get sso() {
        return 'button[class="_button_1qtjo_184 _primaryColor_1qtjo_213 _mediumSize_1qtjo_184 _outlinedVariant_1qtjo_223 LoginForm__ssoLogin___zCNI6"]';
    }

    static get googleAuth() {
        return 'div[class="L5Fo6c-bF1uUb"]';
    }


    typeEmail(email) {
        cy.get(Login.email_field)
            .type(email);
    };

    typePassword(password) {
        cy.get(Login.password)
            .type(password);
    };

    clickSubmit() {
        cy.get(Login.submit)
            .click()
    };

    checkStatusSubmit(status) {
        cy.get(Login.submit).should(status)
    }

    clearEmail() {
        cy.get(Login.email_field).clear()
    }

    clearPassword() {
        cy.get(Login.password).clear()
    }

    checkPasswordVisibility(visibility) {
        cy.get('input[type="text"]').should(visibility)
    }

    eyeClick() {
        cy.get(Login.eye).click()
    }

    ssoClick() {
        cy.get(Login.sso).click()
    }

    googleClick() {
        cy.get(IF_Login.signInGoogle).get(Login.googleAuth).click()
    }
}
    
    
module.exports = Login;