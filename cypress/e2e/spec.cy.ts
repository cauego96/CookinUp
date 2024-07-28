describe('Receitas App', () => {
  beforeEach(() => {
    // Acessa a página principal da aplicação
    cy.visit('http://localhost:5173')
  })

  // TESTE 1
  it('Deve carregar a página principal corretamente', () => {
    // Verifica se o componente principal está presente
    cy.get('.conteudo-principal').should('exist')
  })

  // TESTE 2
  it('Deve navegar para a página de mostrar receitas', () => {
    // Simula a navegação para a página de mostrar receitas
    cy.get('.conteudo-principal').within(() => {
      cy.get('button').contains('Buscar receitas!').click()
    })
    // Verifica se o componente de mostrar receitas está presente
    cy.get('.mostrar-receitas').should('exist')
  })

  // TESTE 3
  it('Deve adicionar ingredientes e buscar receitas', () => {
    // Deve selecionar dois ingredientes
    cy.get('.conteudo-principal').within(() => {
      cy.get('button').contains('Chocolate').click()
    })    
	cy.get('.conteudo-principal').within(() => {
      cy.get('button').contains('Chantilly').click()
    })    
    // Simula o clique no botão "Buscar receitas!"
    cy.get('.selecionar-ingredientes').within(() => {
      cy.get('button').contains('Buscar receitas!').click()
    })
    // Verifica se o componente de mostrar receitas está presente
    cy.get('.mostrar-receitas').should('exist')
	 
    // Verifica se a receita correspondente existe
    cy.get('.mostrar-receitas').within(() => {
      cy.get('h2').contains('Milkshake de chocolate').should('exist')
    })
  })

  // TESTE 4
  it('Deve editar a lista de ingredientes', () => {
    // Deve selecionar dois ingredientes
    cy.get('.conteudo-principal').within(() => {
      cy.get('button').contains('Chocolate').click()
    })    
	cy.get('.conteudo-principal').within(() => {
      cy.get('button').contains('Chantilly').click()
    })    
    // Simula o clique no botão "Buscar receitas!"
    cy.get('.conteudo-principal').within(() => {
      cy.get('button').contains('Buscar receitas!').click()
    })
    // Simula o clique no botão "Editar lista" para voltar a tela dos ingredientes
    cy.get('.mostrar-receitas').within(() => {
      cy.get('button').contains('Editar lista').click()
    })
    // Verifica se o componente de selecionar ingredientes está presente
    cy.get('.selecionar-ingredientes').should('exist')
	// Deve remover dois ingredientes
    cy.get('.conteudo-principal').within(() => {
      cy.get('button').contains('Chocolate').click()
    })    
	cy.get('.conteudo-principal').within(() => {
      cy.get('button').contains('Chantilly').click()
    })         
	// Verifica se a lista está vazia
	cy.get('.conteudo-principal').within(() => {
      cy.get('p').contains('Sua lista está vazia').should('exist')
    })  
  })
}) 