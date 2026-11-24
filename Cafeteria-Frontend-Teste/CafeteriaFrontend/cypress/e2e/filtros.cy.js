
describe('CT12 e CT13 - Filtro por categoria', () => {

  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-cy="email"]').type('teste@email.com');
    cy.get('[data-cy="password"]').type('123456');
    cy.get('[data-cy="login-button"]').click();
  });

  it('CT12 - Filtrar produtos pela categoria Cafés', () => {
    cy.contains('select').select('Cafés');

    cy.contains('Café expresso').should('be.visible');
    cy.contains('Cappuccino').should('be.visible');
    cy.contains('Pão de queijo').should('not.exist');
  });

  it('CT13 - Exibir todas as categorias', () => {
    cy.contains('select').select('Cafés');
    cy.contains('select').select('Todas');

    cy.contains('Café expresso').should('be.visible');
    cy.contains('Cappuccino').should('be.visible');
    cy.contains('Pão de queijo').should('be.visible');
    cy.contains('Brownie').should('be.visible');
    cy.contains('Suco de laranja').should('be.visible');
  });

});
