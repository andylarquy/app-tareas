/// <reference types="cypress" />

export const getByTestId = testId => cy.get(`[${testId}]`)
