describe('Maintains Proper Functioning', () => {

  it('Site Available', () => {
    cy.viewport('macbook-16');
    cy.visit('http://localhost:3000/');
  });

  it('Transfers Cards Properly', () => {
    cy.viewport('macbook-16');
    cy.visit('http://localhost:3000/');

    for (let i = 0; i < 100; i++) {
      cy.get('.colA').dblclick(0, 0, { force: true, multiple: true });
      cy.get('.colB').dblclick(0, 0, { force: true, multiple: true });
      cy.get('.colC').dblclick(0, 0, { force: true, multiple: true });
      cy.get('.colD').dblclick(0, 0, { force: true, multiple: true });
      cy.get('.colE').dblclick(0, 0, { force: true, multiple: true });
      cy.get('.colF').dblclick(0, 0, { force: true, multiple: true });
      cy.get('.colG').dblclick(0, 0, { force: true, multiple: true });
    }
  });
});