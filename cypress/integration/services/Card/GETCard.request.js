/// <reference types="cypress" />

export function getCard() {
    return cy.request({
        method: 'GET',
        url: '592f11060f95a3d3d46a987a',
        failOnStatusCode: false,
    })
}
