import { CheckGameConditionType } from "../../src/app/store/game/game.action-type";

describe('Login by players names', () => {
    before(() => {
      cy.visit('');
    });
  
    it('button inactive', () => {
      cy.get('#mat-input-0').should('have.length', 1);
      cy.get('#mat-input-1').should('have.length', 1);
      cy.get('button').should('be.disabled');
    });
    
    it('fill player names', () => {
      cy.get('#mat-input-0').type('Player one');
      cy.get('#mat-input-1').type('Player two');
      const button = cy.get('button').should('be.enabled');
      button.click();
      cy.wait(1000);
      cy.url().should('include', 'game')
    });

    it('basic game state', () => {
      cy.get('p').should('have.text', '0 - 0');
      cy.get('#mat-expansion-panel-header-0').click();
      cy.get('#mat-radio-2-input')
        .should('have.attr', 'tabindex')
        .and('equal', '0');
      cy.get('#mat-radio-2-input')
        .should('have.attr', 'tabindex')
        .and('equal', '0');
      cy.get('#mat-select-value-1')
        .should('be.visible')
        .contains('Height');
    });

    it('run game', () => {
      cy.get('.players-container')
        .invoke('height')
        .should('be.lessThan', 200)
      cy.get('button')
        .should('be.enabled')
        .click()
      cy.wait(2000);
      cy.get('p').should('not.have.text', '0 - 0');
      cy.get('.players-container')
        .invoke('height')
        .should('be.greaterThan', 300)
    });
  });