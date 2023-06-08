const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    defaultCommandTimeout: 7000,
    execTimeout: 80000,
    pageLoadTimeout: 90000,
    responseTimeout: 50000,
    baseUrl: "https://app2.abtasty.com/",
    userAgent:
      "Mozilla / 5.0(platform; rv: geckoversion) Gecko / geckotrail Firefox / firefoxversion",
    viewportWidth: 400,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

 
});
