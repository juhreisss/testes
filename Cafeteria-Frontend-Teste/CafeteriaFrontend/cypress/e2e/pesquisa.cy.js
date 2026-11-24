
describe('CT09, CT10 e CT11 - Pesquisa de produtos', () => {

  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-cy="email"]').type('teste@email.com');
    cy.get('[data-cy="password"]').type('123456');
    cy.get('[data-cy="login-button"]').click();
  });

  it('CT09 - Pesquisar produto pelo nome exato', () => {
    cy.get('[data-cy="search"]').type('Café expresso');

    cy.contains('Café expresso').should('be.visible');
    cy.contains('Cappuccino').should('not.exist');
  });

  it('CT10 - Pesquisar produto por parte do nome', () => {
    cy.get('[data-cy="search"]').type('Café');

    cy.contains('Café expresso').should('be.visible');
    cy.contains('Cappuccino').should('be.visible');
  });

  it('CT11 - Pesquisar produto inexistente', () => {
    cy.get('[data-cy="search"]').type('ProdutoInexistente123');

    cy.contains('Nenhum produto encontrado.').should('be.visible');
  });

});
