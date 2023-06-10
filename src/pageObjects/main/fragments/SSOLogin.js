const Login = require("./Login")

class SSOLogin  extends Login {
  
    static get email_field() {
        return 'input[type="email"]';
    }

    static get learn() {
        return 'a[class="SSOLoginPage__moreInfos___c2jMz"]';
    }

    static get back() {
        return 'a[class="SSOLoginPage__back___i88JC"]';
    }

    backToLogin() {
        cy.get(SSOLogin.back).click()
    }

    
    typeEmail(email) {
        cy.get(SSOLogin.email_field)
            .type(email);
    }


   
  }
      
  module.exports = SSOLogin;