beforeEach(() => {
    cy.visit('https://cac-tat-v3.s3.eu-central-1.amazonaws.com/index.html')
});

describe('Central de Atendimento ao Cliente TAT', () => {
  
  it('Preenche campos obrigatórios e envia o formulário', () => {

    //nome
    cy.get("#firstName").type("Gabi").click()

    //Sobrenome
    cy.get("#lastName").type("Medeiros").click()

    //E-mail
    cy.get("#email").type("testando@email.com").click()

    //Feedback
    cy.get("#open-text-area").type("testando de novo um texto maior dessa vez").click()

    //Seleciona um arquivo da pasta fixtures

    cy.get('input[type="file"]')
        .selectFile('cypress/fixtures/cachorro.jpg')
        .should(input => {
            expect(input[0].files[0].name).to.equal('cachorro.jpg')
        })

    //Enviar
    cy.get('button[type="submit"]').click()

		//Verificar mensagem de sucesso
		cy.get('.success > strong').should('have.text', 'Mensagem enviada com sucesso.')

  });

})