const { defineConfig } = require("cypress");
require('dotenv').config()

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 10000,
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
      config.env.USERNAME = process.env.CYPRESS_USERNAME
      config.env.PASSWORD = process.env.CYPRESS_PASSWORD
      return config
    },

    baseUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php/'
  },

  
});