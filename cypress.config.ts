import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4200',
    defaultCommandTimeout: 3000,
    viewportWidth: 1600,
    viewportHeight: 1200,
    chromeWebSecurity: false,
    specPattern: 'cypress/e2e/**/*cy.{js,ts}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
