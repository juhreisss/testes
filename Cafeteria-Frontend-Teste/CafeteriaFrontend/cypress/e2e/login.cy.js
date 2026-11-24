
describe('Testes de Login - Cafeteria', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  // CT01 - Login com campos vazios
  it('CT01 - Login com campos vazios', () => {
    cy.get('[data-cy="login-button"]').click();

    cy.contains('h1', 'Grão & Prosa').should('be.visible');
  });

  // CT02 - Login com e-mail em formato inválido
  it('CT02 - Login com e-mail inválido', () => {
    cy.get('[data-cy="email"]').type('joao');
    cy.get('[data-cy="password"]').type('senha123');
    cy.get('[data-cy="login-button"]').click();

    cy.get('[data-cy="email"]').then(($input) => {
      expect($input[0].checkValidity()).to.be.false;
    });

    cy.contains('h1', 'Grão & Prosa').should('be.visible');
  });

  // CT03 - Login com senha incorreta
  it('CT03 - Login com senha incorreta', () => {
    cy.get('[data-cy="email"]').type('joao@email.com');
    cy.get('[data-cy="password"]').type('senhaerrada');
    cy.get('[data-cy="login-button"]').click();

    cy.contains('h1', 'Grão & Prosa').should('be.visible');
  });

  // CT04 - Login com credenciais válidas
  it('CT04 - Login com credenciais válidas', () => {
    cy.get('[data-cy="email"]').type('admin@cafeteria.com');
    cy.get('[data-cy="password"]').type('senha123');
    cy.get('[data-cy="login-button"]').click();

    cy.contains('h1', 'Visão geral').should('be.visible');
  });

});
