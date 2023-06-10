const Login = require("./Login");

class ResetPassword extends Login {

    static get back() {
        return 'a[class="ReturnTo__link___OQCjR"]';
    }

    static get notificationContainer() {
        return 'div[class="Notification__container___QGOTp Notification__success___AuI0I"]'
    }

    backToLogin() {
        cy.get(ResetPassword.back).click()
    }

    checkSuccessPopup() {
        cy.get(ResetPassword.notificationContainer)
    }
            
  }

module.exports = ResetPassword;