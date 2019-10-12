describe('List Famous Games', () => {
  beforeEach(() => {
    cy.seedAndVisit()
  })

  it('should display 20 games', () => {
    // Games are displayed
    cy.get('[data-cy=game-card]').should('have.length.be.within', 19, 20)
  })

  it('should display the next games when scrolling at the bottom', () => {
    // Scroll to bottom
    cy.scrollTo('bottom', { easing: 'linear' })

    // Next games are displayed
    cy.get('[data-cy=game-card]').should('have.length.be.within', 20, 40)
  })

  it('should display between 1 to 20 at most streamers when clicking a game', () => {
    // Click the 1st game
    cy.get('[data-cy=game-card]')
      .eq(0)
      .click()

    // There are streamers
    cy.get('[data-cy=stream-card]').should('have.length.be.within', 1, 20)
  })

  it('should display the next streamers when clicking a game and scrolling to the bottom', () => {
    // Click the 2nd game
    cy.get('[data-cy=game-card]')
      .eq(1)
      .click()

    // Scroll to bottom
    cy.scrollTo('bottom', { easing: 'linear' })

    // There are more streamers
    cy.get('[data-cy=stream-card]').should('have.length.be.within', 19, 40)
  })
})
