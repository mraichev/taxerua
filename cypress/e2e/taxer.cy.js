
describe('Certificate Upload Test', () => {
  it('Certificate can be uploaded and contains correct data', () => {
    cy.visit('/')
    cy.get('button').click()
    cy.get('.btn-primary').click()
    //////////////// Ensure that dropbox exists //////////////
    cy.get('.dropbox').should('exist')
    cy.get('.dropbox').selectFile('cert.cer', { action: 'drag-drop'})
    //////////////// Ensure that table data is correct after certificate upload //////////////
    cy.get('.list-group-item').should('have.text', '\n        Таксер Тест Тестерович\n      ')
    //////////////// Ensure that info panel data is correct after certificate upload //////////////
    cy.get('table').contains('th', 'SubjectCN').should('be.visible')
    cy.get('table').contains('td', 'Таксер Тест Тестерович').should('be.visible')
    cy.get('table').contains('th', 'IssuerCN').should('be.visible')
    cy.get('table').contains('td', 'UA-22723472').should('be.visible')
    cy.get('table').contains('th', 'ValidFrom').should('be.visible')
    cy.get('table').contains('td', '2015-04-08 21:00:00 UTC').should('be.visible')
    cy.get('table').contains('th', 'ValidTill').should('be.visible')
    cy.get('table').contains('td', '2017-04-08 21:00:00 UTC').should('be.visible')
  })
})