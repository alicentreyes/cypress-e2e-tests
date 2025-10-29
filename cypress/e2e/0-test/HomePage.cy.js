Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})


describe('Home de www.freerangetester', () => {
    beforeEach(() => {
        cy.visit('https://www.freerangetesters.com/')
    })

    it('should have a title', () => {
        cy.title().should('include', 'Free Range Testers')
    })


})