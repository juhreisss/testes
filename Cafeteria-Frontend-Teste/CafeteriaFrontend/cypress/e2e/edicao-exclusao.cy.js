
describe('CT23 a CT25 - Edição e exclusão de produtos', () => {

  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-cy="email"]').type('teste@email.com');
    cy.get('[data-cy="password"]').type('123456');
    cy.get('[data-cy="login-button"]').click();
  });

  it('CT23 - Editar produto cadastrado', () => {
    cy.get('[data-cy="edit-1"]').click();

    cy.get('[data-cy="product-name"]')
      .clear()
      .type('Café expresso atualizado');

    cy.get('[data-cy="save-product"]').click();

    cy.contains('Café expresso atualizado').should('be.visible');
  });

  it('CT24 - Salvar produto sem realizar alterações', () => {
    cy.get('[data-cy="edit-1"]').click();

    cy.get('[data-cy="save-product"]').click();

    cy.contains('Café expresso').should('be.visible');
  });

  it('CT25 - Excluir produto cadastrado', () => {
    cy.get('[data-cy="delete-1"]').click();

    cy.contains('Café expresso').should('not.exist');
  });

});
