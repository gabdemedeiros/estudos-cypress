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

    it('seleciona um arquivo simulando um drag-and-drop', () => {

        cy.get('input[type="file"]')
            .selectFile('cypress/fixtures/cachorro.jpg', { action: 'drag-drop' })
            .should(input => {
                expect(input[0].files[0].name).to.equal('cachorro.jpg')
            })
        
    });

    it.only('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', () => {
        
        cy.fixture('cachorro.jpg').as('sampleFile')
        cy.get('input[type="file"]')
            .selectFile('@sampleFile')
            .should(input => {
                expect(input[0].files[0].name).to.equal('cachorro.jpg')
            })

    });

});