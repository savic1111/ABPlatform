class IF_Login {

    static get signInGoogle() {
        return 'iframe[style = "display: block; position: relative; top: 0px; left: 0px; height: 44px; width: 340px; border: 0px; margin: -2px -10px;"]'
    }

    static get captcha() {
        return 'iframe[style = "width: 302px; height: 422px;"]';
    }
   
}


module.exports = IF_Login;