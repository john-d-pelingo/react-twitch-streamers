describe('TODO: App Initialization', () => {
  beforeEach(() => {
    cy.seedAndVisit()
  })

  it('should have the correct title', () => {
    cy.title().should('equal', 'React Twitch Streamers')
  })
})
