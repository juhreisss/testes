
describe('CT26 a CT29 - Persistência e integração', () => {

  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-cy="email"]').type('teste@email.com');
    cy.get('[data-cy="password"]').type('123456');
    cy.get('[data-cy="login-button"]').click();
  });

  it('CT26 - Verificar persistência após atualizar a página', () => {
    cy.get('[data-cy="new-product"]').click();

    cy.get('[data-cy="product-name"]').type('Produto persistente');
    cy.get('[data-cy="product-category"]').select('Bebidas');
    cy.get('[data-cy="product-price"]').type('15');
    cy.get('[data-cy="product-stock"]').type('10');
    cy.get('[data-cy="save-product"]').click();

    cy.reload();

    cy.get('[data-cy="email"]').type('teste@email.com');
    cy.get('[data-cy="password"]').type('123456');
    cy.get('[data-cy="login-button"]').click();

    cy.contains('Produto persistente').should('be.visible');
  });

  it('CT27 - Verificar requisição de API ao cadastrar produto', () => {
    cy.intercept('POST', '**/api/**').as('criarProduto');

    cy.get('[data-cy="new-product"]').click();
    cy.get('[data-cy="product-name"]').type('Produto API');
    cy.get('[data-cy="product-price"]').type('10');
    cy.get('[data-cy="product-stock"]').type('5');
    cy.get('[data-cy="save-product"]').click();

    cy.get('[data-cy="product-name"]').should('not.exist');

    cy.get('@criarProduto.all').should('have.length.greaterThan', 0);
  });

  it('CT28 - Verificar tratamento de falha na API', () => {
    cy.intercept('POST', '**/api/**', {
      statusCode: 500,
      body: { erro: 'Erro interno do servidor' }
    }).as('falhaAPI');

    cy.get('[data-cy="new-product"]').click();
    cy.get('[data-cy="product-name"]').type('Produto com erro');
    cy.get('[data-cy="product-price"]').type('10');
    cy.get('[data-cy="product-stock"]').type('5');
    cy.get('[data-cy="save-product"]').click();

    cy.contains('Produto com erro').should('not.exist');
  });

  it('CT29 - Verificar consistência após edição e exclusão', () => {
    cy.get('[data-cy="edit-1"]').click();

    cy.get('[data-cy="product-name"]')
      .clear()
      .type('Café atualizado');

    cy.get('[data-cy="save-product"]').click();

    cy.contains('Café atualizado').should('be.visible');

    cy.get('[data-cy="delete-1"]').click();

    cy.contains('Café atualizado').should('not.exist');
  });

});
