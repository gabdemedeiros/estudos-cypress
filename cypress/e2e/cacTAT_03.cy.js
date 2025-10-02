beforeEach(() => {
    cy.visit('https://cac-tat-v3.s3.eu-central-1.amazonaws.com/index.html')
});

describe('Central de Atendimento ao Cliente TAT', () => {

  it('seleciona um produto (YouTube) por seu texto', () => {

    //nome
    cy.get("#firstName").type("Gabi")

    //Sobrenome
    cy.get("#lastName").type("Medeiros")

    //E-mail
    cy.get("#email").type("testando@email.com")

    //Produto
    cy.get('#product')
      .select('YouTube')
      .should('have.value', 'youtube')

    //Feedback
    cy.get("#open-text-area").type("Portanto, experimente digitar um texto longo na área de texto, passando como segundo argumento ao comando .type() um objeto ({}), com a propriedade delay com valor 0",
        {delay: 0})


  });

  it.only('Marca o tipo de atendimento', () => {

    cy.get('input[type="radio"]')
      .each(tipoDeAtendimento => {
        cy.wrap(tipoDeAtendimento)
        .check()
        .should('be.checked')
        
      })
    
  });

})