describe('Validação do link de normas no UOL', () => {
  beforeEach(() => {
    // Ignora erros externos que podem quebrar o teste
    Cypress.on('uncaught:exception', () => false)
  })

  it('Acessa o UOL e valida que o link de normas apareceu', () => {
    // Acessa o site UOL com timeout estendido para carregar tudo
    cy.visit('https://www.uol.com.br/', { timeout: 120000 })

    // Aguarda até que o link específico apareça e esteja visível
    cy.get('a[href="https://sobreuol.noticias.uol.com.br/normas-de-seguranca-e-privacidade.html"]', { timeout: 60000 })
      .should('be.visible')
  })
})

describe('Validação do elemento <strong>Atualização:</strong> na página de termos UOL', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', () => false)
  })

  it('Scrolla até o parágrafo da atualização e valida o elemento', () => {
    cy.origin('https://sobreuol.noticias.uol.com.br', () => {
      cy.visit('/normas-de-seguranca-e-privacidade', { timeout: 120000 })

      cy.wait(30000) // espera 30 segundos

      // Scroll até o parágrafo com o estilo e que contém <strong>Atualização:</strong>
      cy.get('p[style="margin-left:0cm;text-align:justify;"]')
        .contains('Atualização:')
        .scrollIntoView({ duration: 1000 })

      // Valida que o <strong>Atualização:</strong> está visível
      cy.get('strong').contains('Atualização:').should('be.visible')
    })
  })
})





