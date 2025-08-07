describe('Teste UOL - scroll até o final da página de termos', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', () => false)
  })

  it('Acessa o site e scrolla até o final da página de termos', () => {
    cy.visit('https://www.uol.com.br/', { timeout: 120000 })

    cy.get('a[href="https://sobreuol.noticias.uol.com.br/normas-de-seguranca-e-privacidade.html"]', { timeout: 30000 })
      .should('be.visible')
      .click()

    cy.origin('https://sobreuol.noticias.uol.com.br', () => {
      cy.url({ timeout: 30000 }).should('include', 'normas-de-seguranca-e-privacidade')

      cy.scrollTo('bottom', { duration: 1000 })
    })
  })
})
