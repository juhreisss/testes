
describe('Cadastro de produtos - CT14 a CT18', () => {

  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-cy="email"]').type('teste@email.com');
    cy.get('[data-cy="password"]').type('123456');
    cy.get('[data-cy="login-button"]').click();
  });

  it('CT14 - Abrir formulário de novo produto', () => {
    cy.get('[data-cy="new-product"]').click();

    cy.get('[data-cy="product-name"]').should('be.visible');
    cy.get('[data-cy="product-category"]').should('be.visible');
    cy.get('[data-cy="product-price"]').should('be.visible');
    cy.get('[data-cy="product-stock"]').should('be.visible');
  });

  it('CT15 - Cadastrar produto com dados válidos', () => {
    cy.get('[data-cy="new-product"]').click();

    cy.get('[data-cy="product-name"]').type('Teste Cypress');
    cy.get('[data-cy="product-category"]').select('Bebidas');
    cy.get('[data-cy="product-price"]').type('10');
    cy.get('[data-cy="product-stock"]').type('20');
    cy.get('[data-cy="save-product"]').click();

    cy.contains('Teste Cypress').should('be.visible');
  });

  it('CT16 - Tentar cadastrar sem nome', () => {
    cy.get('[data-cy="new-product"]').click();

    cy.get('[data-cy="product-category"]').select('Bebidas');
    cy.get('[data-cy="product-price"]').type('10');
    cy.get('[data-cy="product-stock"]').type('20');
    cy.get('[data-cy="save-product"]').click();

    cy.get('[data-cy="product-name"]').should('be.visible');
  });

  it('CT17 - Tentar cadastrar sem categoria', () => {
    cy.get('[data-cy="new-product"]').click();

    cy.get('[data-cy="product-name"]').type('Produto sem categoria');
    cy.get('[data-cy="product-category"]').select('');
    cy.get('[data-cy="product-price"]').type('10');
    cy.get('[data-cy="product-stock"]').type('20');
    cy.get('[data-cy="save-product"]').click();

    cy.get('[data-cy="product-category"]').should('be.visible');
  });

  it('CT18 - Cadastrar produto com preço zero', () => {
    cy.get('[data-cy="new-product"]').click();

    cy.get('[data-cy="product-name"]').type('Produto preço zero');
    cy.get('[data-cy="product-category"]').select('Bebidas');
    cy.get('[data-cy="product-price"]').type('0');
    cy.get('[data-cy="product-stock"]').type('10');
    cy.get('[data-cy="save-product"]').click();

    cy.contains('Produto preço zero').should('be.visible');
  });

});
