describe('List Top Streams', function() {
  beforeEach(function() {
    cy.seedAndVisit({ visitRoute: '/#/streams' });
  });

  it('should display 20 streamers', function() {
    // Streams are displayed
    cy.get('[data-cy=stream-card]').should('have.length', 20);
  });

  it('should display the next streams when scrolling at the bottom', function() {
    // Scroll to bottom
    cy.scrollTo('bottom', { easing: 'linear' });

    // Next games are displayed
    cy.get('[data-cy=stream-card]').should('have.length.be.within', 21, 40);
  });
});
