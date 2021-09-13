describe('General', function() {
    it('testEtoE', function() {
        cy.visit('http://localhost:8080/');
        cy.get('h1').contains('GNU Emacs')
        cy.get('.main a[href$="#features"]').click()
        cy.get('.features li').should('have.length', 6) 
    })
})