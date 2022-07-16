const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
    supportFile: "./cypress/support/index.js",
    specPattern: "./cypress/component",
    setupNodeEvents(on, config) {
      "./cypress/plugins/index.js";
    }
  },
  // integrationFolder: "./cypress/integration",
});
