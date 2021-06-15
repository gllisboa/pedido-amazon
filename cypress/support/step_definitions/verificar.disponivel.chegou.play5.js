/* global Given, Then, When */
/// <reference types="Cypress" />

let usuarioAmazon = Cypress.env('usuario.amazon')
let senhaAmazon = Cypress.env('senha.amazon')



Given('Acesso a pagina da Amazon', () => {
    cy.visit('https://amazon.com')
})


And('busco um play 5', () => {
    cy.get('#twotabsearchtextbox')
        .click()
            .type('playstation 5 console{enter}', {force:true})
        .get('[data-asin="B08FC5L3RG"] > :nth-child(1) > .celwidget > .s-include-content-margin > .a-spacing-medium > :nth-child(2) > .sg-col-8-of-16 > :nth-child(1) > :nth-child(1) > .a-size-mini > .a-link-normal > .a-size-medium')
            .click()


})


When('existe o produto em estoque', () => {
    cy.get('#add-to-cart-button')
        .should('be.visible')

})

Then('adiciono o produto ao carrinho', () => {
    cy.get('#add-to-cart-button')
        .click()
      .get('#hlb-ptc-btn-native')
         .click()
      .get('#ap_email')
        .click()
            .type(usuarioAmazon)
      .get('#continue')
         .click()
      .get('#ap_password')
            .type(`${senhaAmazon}{enter}`)



})



And('fecho o pedido', () => {

})
