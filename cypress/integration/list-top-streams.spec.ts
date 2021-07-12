describe('List Top Streams', () => {
  beforeEach(() => {
    cy.seedAndVisit({ visitRoute: '/#/streams' })
  })

  it('should display 20 streamers', () => {
    // Streams are displayed
    cy.get('[data-cy=stream-card]').should('have.length.at.least', 19)
  })

  it('should display the next streams when scrolling at the bottom', () => {
    // Scroll to bottom
    cy.scrollTo('bottom', { easing: 'linear' })

    // Next games are displayed
    cy.get('[data-cy=stream-card]').should('have.length.be.within', 21, 40)
  })
})
