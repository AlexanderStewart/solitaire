import React from 'react';
import { mount } from 'cypress-react-unit-test';
import App from './../../src/App';

describe('App', () => {
  it('Title Visible', () => {
    mount(<App />);
    cy.viewport('macbook-16');
    cy.contains('GROUP 6 - SOLITAIRE').should('be.visible');


  });
});
