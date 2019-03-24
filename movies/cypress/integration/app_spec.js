describe ('Visit', () => {
    it ('Visit the app', () => {
      cy.visit ('/');
      cy.get('#search-by-genre-btn').click();
      cy.get('#search-by-title-btn').click();
      cy.get('#search-input').type('4 rooms');
      cy.get('#search-btn').click();
      cy.get('#sort-by-rating-btn').click();
      cy.get('#sort-by-release-btn').click();
      cy.get('#sort-by-rating-btn').click();
    });
  });