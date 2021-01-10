/// <reference types="cypress" />

export const getByTestId = testId => cy.get(`[data-testid=${testId}]`)
