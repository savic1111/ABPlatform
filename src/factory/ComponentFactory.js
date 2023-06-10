const Login = require("../pageObjects/main/fragments/Login");
const ResetPassword = require("../pageObjects/main/fragments/ResetPassword");
const SSOLogin = require("../pageObjects/main/fragments/SSOLogin");

class ComponentFactory {

    create(type) {

        let page;
        if (type === 'Login') {
            page = new Login()
        } else if (type === 'SSOLogin') {
            page = new SSOLogin()
        } else if (type === 'ResetPassword') {
            page = new ResetPassword()
        }

        return page;
    }
}

module.exports = ComponentFactory