describe('Testes da Cafeteria', () => {

  it('Deve acessar a página inicial', () => {
    cy.visit('/');

    cy.url().should('include', 'localhost');
  });

});