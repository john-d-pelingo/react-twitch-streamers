describe('TODO: App Initialization', function() {
  beforeEach(function() {
    cy.seedAndVisit();
  });

  it('should have the correct title', function() {
    cy.title().should('be', 'React Twitch Streamers');
  });
});
