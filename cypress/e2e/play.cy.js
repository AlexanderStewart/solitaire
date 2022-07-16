describe('Maintains Proper Functioning', () => {

  it('Site Available', () => {
    cy.viewport('macbook-16');
    cy.visit('http://localhost:3000/');
  });

  it('Transfers Cards Properly', () => {
    cy.viewport('macbook-16');
    // cy.visit('http://localhost:3000/');

    for (let i = 0; i < 5; i++) {
      cy.get('body').then($body => {
        if ($body.find('.colA').length > 0) {
          cy.get('.colA').dblclick(0, 0, { force: true, multiple: true });
        }
        else {
          cy.log('not found colA');
        }
      });

      cy.get('body').then($body => {
        if ($body.find('.colB').length > 0) {
          cy.get('.colB').dblclick(0, 0, { force: true, multiple: true });
        }
        else {
          cy.log('not found colB');
        }
      });

      cy.get('body').then($body => {
        if ($body.find('.colC').length > 0) {
          cy.get('.colC').dblclick(0, 0, { force: true, multiple: true });
        }
        else {
          cy.log('not found colC');
        }
      });

      cy.get('body').then($body => {
        if ($body.find('.colD').length > 0) {
          cy.get('.colD').dblclick(0, 0, { force: true, multiple: true });
        }
        else {
          cy.log('not found colD');
        }
      });

      cy.get('body').then($body => {
        if ($body.find('.colE').length > 0) {
          cy.get('.colE').dblclick(0, 0, { force: true, multiple: true });
        }
        else {
          cy.log('not found colE');
        }
      });

      cy.get('body').then($body => {
        if ($body.find('.colF').length > 0) {
          cy.get('.colF').dblclick(0, 0, { force: true, multiple: true });
        }
        else {
          cy.log('not found colF');
        }
      });

      cy.get('body').then($body => {
        if ($body.find('.colG').length > 0) {
          cy.get('.colG').dblclick(0, 0, { force: true, multiple: true });
        }
        else {
          cy.log('not found colG');
        }
      });

      cy.get('body').then($body => {
        if ($body.find('.stockpile').length > 0) {
          cy.get('.stockpile').dblclick(0, 0, { force: true, multiple: true });
        }
        else {
          if ($body.find('.reStock').length > 0) {
            cy.get('.reStock').dblclick(0, 0, { force: true, multiple: true });
          }
        }
      });
    }
  });
});