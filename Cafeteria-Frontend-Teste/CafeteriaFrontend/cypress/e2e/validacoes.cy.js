
describe('CT19 a CT22 - Validações do cadastro', () => {

  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-cy="email"]').type('teste@email.com');
    cy.get('[data-cy="password"]').type('123456');
    cy.get('[data-cy="login-button"]').click();
    cy.get('[data-cy="new-product"]').click();
  });

  it('CT19 - Cadastrar produto com preço negativo', () => {
    cy.get('[data-cy="product-name"]').type('Produto preço negativo');
    cy.get('[data-cy="product-category"]').select('Bebidas');
    cy.get('[data-cy="product-price"]').type('-10');
    cy.get('[data-cy="product-stock"]').type('5');
    cy.get('[data-cy="save-product"]').click();

    cy.get('[data-cy="product-price"]').should('be.visible');
  });

  it('CT20 - Cadastrar produto com estoque negativo', () => {
    cy.get('[data-cy="product-name"]').type('Produto estoque negativo');
    cy.get('[data-cy="product-category"]').select('Bebidas');
    cy.get('[data-cy="product-price"]').type('10');
    cy.get('[data-cy="product-stock"]').type('-5');
    cy.get('[data-cy="save-product"]').click();

    cy.get('[data-cy="product-stock"]').should('be.visible');
  });

  it('CT21 - Cadastrar produto com estoque zero', () => {
    cy.get('[data-cy="product-name"]').type('Produto estoque zero');
    cy.get('[data-cy="product-category"]').select('Bebidas');
    cy.get('[data-cy="product-price"]').type('10');
    cy.get('[data-cy="product-stock"]').type('0');
    cy.get('[data-cy="save-product"]').click();

    cy.contains('Produto estoque zero').should('be.visible');
  });

  it('CT22 - Cancelar cadastro de produto', () => {
    cy.get('[data-cy="product-name"]').type('Produto cancelado');
    cy.get('[data-cy="product-price"]').type('10');

    cy.contains('button', 'Cancelar').click();

    cy.contains('Produto cancelado').should('not.exist');
    cy.get('[data-cy="new-product"]').should('be.visible');
  });

});
