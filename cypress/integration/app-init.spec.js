describe('React Twitch Streamers', function() {
  beforeEach(function() {
    cy.visit('/');
  });

  it('should have the correct title', function() {
    cy.title().should('be', 'React Twitch Streamers');
  });
});
