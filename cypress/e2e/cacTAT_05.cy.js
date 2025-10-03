beforeEach(() => {
  cy.visit('https://cac-tat-v3.s3.eu-central-1.amazonaws.com/index.html')
});

describe('Atividade 05 - Marcando e desmarcando inputs checkbox', () => {
    
  it('marca ambos checkboxes, depois desmarca o último', () => {

    //Marca todos os checkbox
    cy.get('input[type="checkbox"]') //pega todos os checkbox da página
    .check()
    .should('be.checked')
    .last() //pega o último
    .uncheck() //desmarca
    .should('not.be.checked') //checa só o último por causa do .last() e verifica se ele foi desmarcado

    //Envia formulário sem dados
    cy.get('.button').click()

    //Confere mensagem de erro
    cy.get('.error > strong').should('have.text','Valide os campos obrigatórios!')

  });
  

});