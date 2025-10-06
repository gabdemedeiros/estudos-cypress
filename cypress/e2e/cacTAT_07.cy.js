beforeEach(() => {
  cy.visit('https://cac-tat-v3.s3.eu-central-1.amazonaws.com/index.html')
});

describe('Lidando com links que abrem em outra aba', () => {
    
    it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', () => {
        
        cy.contains('a', 'Política de Privacidade')
        .should('have.attr', 'href', 'privacy.html')
        .and('have.attr', 'target', '_blank')

    });

    it('acessa a página da política de privacidade removendo o target e então clicando no link', () => {
        
        cy.contains('a', 'Política de Privacidade')
        .invoke('removeAttr', 'target')
        .click()
        
        cy.contains('h1', 'CAC TAT - Política de Privacidade').should('be.visible')

    });

});