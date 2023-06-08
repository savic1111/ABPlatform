class Login  {
  
    constructor() {
        //this.page = page;
    }

    static get emails() {
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



     typeEmail( email) {
       cy.get('input[name = "email"]')
            .type(email);
    };

     typePassword(password) {
        cy.get('input[name = "password"]')
            .type(password);
    };

     clickSubmit() {
        cy.get('button[type="submit"]')
            .click()
    };
}
    
    
module.exports = Login;