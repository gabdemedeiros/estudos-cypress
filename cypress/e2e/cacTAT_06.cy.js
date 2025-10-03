beforeEach(() => {
  cy.visit('https://cac-tat-v3.s3.eu-central-1.amazonaws.com/index.html')
});

describe('Exercício 06 - Fazendo upload de arquivos com Cypress', () => {

    it('seleciona um arquivo da pasta fixtures', () => {

        cy.get('input[type="file"]')
            .selectFile('cypress/fixtures/cachorro.jpg')
            .should(input => {
                expect(input[0].files[0].name).to.equal('cachorro.jpg')
            })
        
    });
    
});