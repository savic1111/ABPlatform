const Login = require("../pageObjects/main/fragments/Login");

class ComponentFactory {

    create(type) {

        let page;
        if (type === 'Login') {
            page = new Login()
        } else if (type === 'parttime') {
            employee = new PartTime()
        } else if (type === 'temporary') {
            employee = new Temporary()
        } else if (type === 'contractor') {
            employee = new Contractor()
        }

        return page;
    }
}

module.exports = ComponentFactory