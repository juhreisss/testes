
describe('Testes do Dashboard - Cafeteria', () => {

  beforeEach(() => {
    cy.visit('/');

    cy.get('[data-cy="email"]').type('admin@cafeteria.com');
    cy.get('[data-cy="password"]').type('senha123');
    cy.get('[data-cy="login-button"]').click();

    cy.contains('h1', 'Visão geral').should('be.visible');
  });

  // CT06 - Carregamento dos indicadores do dashboard
  it('CT06 - Deve exibir os três indicadores', () => {
    cy.contains('Produtos cadastrados').should('be.visible');
    cy.contains('Unidades em estoque').should('be.visible');
    cy.contains('Valor em estoque').should('be.visible');
  });

  // CT07 - Conferência do valor total em estoque
  it('CT07 - Deve calcular corretamente o valor em estoque', () => {
    cy.contains('Valor em estoque')
      .parent()
      .should('contain', 'R$ 724,50');
  });

  // CT08 - Exibição da listagem de produtos
  it('CT08 - Deve exibir os produtos cadastrados', () => {
    cy.contains('Café expresso').should('be.visible');
    cy.contains('Cappuccino').should('be.visible');
    cy.contains('Pão de queijo').should('be.visible');
    cy.contains('Brownie').should('be.visible');
    cy.contains('Suco de laranja').should('be.visible');

    cy.contains('PRODUTO').should('be.visible');
    cy.contains('CATEGORIA').should('be.visible');
    cy.contains('PREÇO').should('be.visible');
    cy.contains('ESTOQUE').should('be.visible');
    cy.contains('AÇÕES').should('be.visible');
  });

});
