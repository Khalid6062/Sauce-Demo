// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// const cypress = require("cypress");

// const cypress = require("cypress");

import 'cypress-file-upload';

Cypress.Commands.add('openHomePage', () => {
    cy.visit('/')
})

Cypress.Commands.add('login', (username, password) => {
    cy.get('[placeholder="Username"]').clear().type(username);
    cy.get('[placeholder="Password"]').clear().type(password);
    cy.get('[data-test="login-button"]').click()
})

Cypress.Commands.add('emptyUsername',(password)=>{
    cy.get('[placeholder="Password"]').clear().type(password);
    cy.get('[data-test="login-button"]').click()
})

Cypress.Commands.add('logout', () => {
    cy.get('#react-burger-menu-btn').click({ force: true })
    cy.get('#logout_sidebar_link').click({force: true})
})

Cypress.Commands.add('emptyPassword',(userName)=>{
    cy.get('[placeholder="Username"]').clear().type(userName);
    cy.get('[data-test="login-button"]').click()
})

require('cypress-downloadfile/lib/downloadFileCommand')

Cypress.Commands.add('googleSearch',(searchFor)=>{
    cy.get('input[title="Search"]').type(searchFor).type('{enter}').wait(2000)
    cy.contains(searchFor)
})
