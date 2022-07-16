import App from './../../src/App';

describe('Maintains Proper Functioning', () => {

  it('Site Available', () => {
    cy.viewport('macbook-16');
    cy.mount(<App />);
  });

  it('Test Cards', () => {
    cy.viewport('macbook-16');
    cy.mount(<App />);

    const cardCount = () => {
      cy.get('body').then($body => {
        const count = $body.find('.colA').length + $body.find('.colB').length + $body.find('.colC').length + $body.find('.colD').length + $body.find('.colE').length + $body.find('.colF').length + $body.find('.colG').length + $body.find('.foun1').length + $body.find('.foun2').length + $body.find('.foun3').length + $body.find('.foun4').length + $body.find('.stockpile').length + $body.find('.talonPile').length;
        assert.equal(count, 52);
      });
    };

    for (let i = 0; i < 20; i++) {

      cardCount();

      cy.get('body').then($body => {
        if ($body.find('.colAFaceUp').length > 0) {
          cy.get('.colAFaceUp').dblclick(0, 0, { force: true, multiple: true });
        }
        else {
          cy.log('not found colAFaceUp');
        }
      });

      cardCount();

      cy.get('body').then($body => {
        if ($body.find('.colBFaceUp').length > 0) {
          cy.get('.colBFaceUp').dblclick(0, 0, { force: true, multiple: true });
        }
        else {
          cy.log('not found colBFaceUp');
        }
      });

      cardCount();

      cy.get('body').then($body => {
        if ($body.find('.colCFaceUp').length > 0) {
          cy.get('.colCFaceUp').dblclick(0, 0, { force: true, multiple: true });
        }
        else {
          cy.log('not found colCFaceUp');
        }
      });

      cardCount();

      cy.get('body').then($body => {
        if ($body.find('.colDFaceUp').length > 0) {
          cy.get('.colDFaceUp').dblclick(0, 0, { force: true, multiple: true });
        }
        else {
          cy.log('not found colDFaceUp');
        }
      });

      cardCount();

      cy.get('body').then($body => {
        if ($body.find('.colEFaceUp').length > 0) {
          cy.get('.colEFaceUp').dblclick(0, 0, { force: true, multiple: true });
        }
        else {
          cy.log('not found colEFaceUp');
        }
      });

      cardCount();

      cy.get('body').then($body => {
        if ($body.find('.colFFaceUp').length > 0) {
          cy.get('.colFFaceUp').dblclick(0, 0, { force: true, multiple: true });
        }
        else {
          cy.log('not found colFFaceUp');
        }
      });

      cardCount();

      cy.get('body').then($body => {
        if ($body.find('.colGFaceUp').length > 0) {
          cy.get('.colGFaceUp').dblclick(0, 0, { force: true, multiple: true });
        }
        else {
          cy.log('not found colGFaceUp');
        }
      });

      cardCount();

      cy.get('body').then($body => {
        if ($body.find('.stockpileFaceUp').length > 0) {
          cy.get('.stockpileFaceUp').dblclick(0, 0, { force: true, multiple: true });
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