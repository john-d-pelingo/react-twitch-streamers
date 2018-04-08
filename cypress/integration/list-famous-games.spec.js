describe('List Famous Games', function() {
  beforeEach(function() {
    cy.seedAndVisit();
  });

  it('should display 20 games', function() {
    // Loader is displayed
    cy.get('[data-cy=loader]').should('have.length', 1);

    // Games are displayed
    cy.get('[data-cy=game-card]').should('have.length', 20);
  });

  it('should display the next games when scrolling at the bottom', function() {
    // Scroll to bottom
    cy.scrollTo('bottom', { easing: 'linear' });

    // Next games are displayed
    cy.get('[data-cy=game-card]').should('have.length.be.within', 21, 40);
  });

  it('should display between 1 to 20 at most streamers when clicking a game', function() {
    // Click the 1st game
    cy
      .get('[data-cy=game-card]')
      .eq(0)
      .click();

    // Loader is displayed again
    cy.get('[data-cy=loader]').should('have.length', 1);

    // There are streamers
    cy.get('[data-cy=stream-card]').should('have.length.be.within', 1, 20);
  });

  it('should display the next streamers when clicking a game and scrolling to the bottom', function() {
    // Click the 2nd game
    cy
      .get('[data-cy=game-card]')
      .eq(1)
      .click();

    // Scroll to bottom
    cy.scrollTo('bottom', { easing: 'linear' });

    // There are more streamers
    cy.get('[data-cy=stream-card]').should('have.length.be.within', 21, 40);
  });
});
