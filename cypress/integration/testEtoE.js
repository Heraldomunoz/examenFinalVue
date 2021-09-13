/* eslint-disable no-undef */

// eslint-disable-next-line no-undef
describe('General', function() {
    it('testEtoE', function() {
        cy.visit('http://localhost:8080/');
        cy.get('h1').contains('Lista de Productos')
        cy.get('a.nav-link.active').type('catalogo')
        cy.visit('http://localhost:8080/login');
        cy.get('input[name=usuario]').type('felipe@yopmail.com')   
        cy.get('input[name=password]').type('123456')
        cy.get('.login').click()
        cy.get('#E1CEd6amNFDvAD9RsQXf').click()
        cy.get('#irCarrito').click()
        cy.get('#finalizar').click()
    })
})