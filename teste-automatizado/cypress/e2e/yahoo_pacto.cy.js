describe('Busca no Yahoo', () => {
  it('Deve buscar "Pacto Soluções" e terminar quando encontrar o link correto', () => {
    cy.visit('https://br.yahoo.com/');
    cy.get('input[name="p"]').type('Pacto Soluções{enter}');


    cy.get('#web > ol > li').should('exist');

    cy.get('#web > ol > li a[href="https://sistemapacto.com.br/"]').should('exist');

    cy.wait(2000);
  });
});
