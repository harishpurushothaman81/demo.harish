describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.title().should('eq','Cypress.io: Kitchen Sink')
  })
})