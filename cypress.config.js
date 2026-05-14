const { defineConfig } = require("cypress");
require('dotenv').config()

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'OrangeHRM Test Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    defaultCommandTimeout: 10000,
    viewportWidth: 1920,
    viewportHeight: 1080,
    retries: {
      runMode: 2,
      openMode: 0
    },
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
      config.env.USERNAME = process.env.CYPRESS_USERNAME
      config.env.PASSWORD = process.env.CYPRESS_PASSWORD
      return config
    },
    baseUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php/'
  },
});