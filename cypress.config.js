const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://js-55fbfg.stackblitz.io/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});