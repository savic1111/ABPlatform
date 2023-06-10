const { defineConfig } = require("cypress");
require('dotenv').config()

module.exports = defineConfig({

    env: {
        SUPPORT_URL: 'https://support.abtasty.com',
        LOGIN_URL: 'https://app2.abtasty.com/login',
        SSO_URL: 'https://app2.abtasty.com/ssologin',
        PASSSWORD_URL: 'https://app2.abtasty.com/reset-password',
    },
    e2e: {
    chromeWebSecurity: false,
    defaultCommandTimeout: 7000,
    execTimeout: 80000,
    pageLoadTimeout: 90000,
    responseTimeout: 50000,
    baseUrl: "https://app2.abtasty.com/",
    userAgent:
      "Mozilla / 5.0(platform; rv: geckoversion) Gecko / geckotrail Firefox / firefoxversion",
    viewportWidth: 1000,
        setupNodeEvents(on, config) {
            config.env = config.env || {}
    },
  },

 
});
