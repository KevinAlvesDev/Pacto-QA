const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.uol.com.br',
    pageLoadTimeout: 240000, // espera até 4 minutos para carregar a página
    defaultCommandTimeout: 20000, // tempo padrão para comandos como cy.get()
    setupNodeEvents(on, config) {
      // eventos personalizados, se precisar
    },
  },
})
