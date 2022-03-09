const current_password = "Test1234!"
const success_token = "Password changed successfully."

class loginDetailsPage {

   elements = {
    current_password: () => cy.get('#current_password'),
    new_password: () => cy.get('#new_password'),
    confirm_password: () => cy.get('#confirm_password'),
    change_password_submit: () => cy.xpath('//*[@data-testid="change-password-button"]')
     }

  enters_current_password() {
    this.elements.current_password()
      .should('be.visible')
      .type(current_password)
      .should('have.value', current_password)
  }

  enters_new_password() {
    this.elements.new_password()
      .should('be.visible')
      .type('Test!'+Cypress.config('UniqueNumber'))
      .should('have.value', 'Test!'+Cypress.config('UniqueNumber'))
  }

  enters_confirm_password() {
    this.elements.confirm_password()
      .should('be.visible')
      .type('Test!'+Cypress.config('UniqueNumber'))
      .should('have.value', 'Test!'+Cypress.config('UniqueNumber'))
    cy.writeFile('cypress/integration/CreatedAccounts.txt', '    password: ' ,{flag: 'a+'})
    cy.writeFile('cypress/integration/CreatedAccounts.txt', 'Test!'+Cypress.config('UniqueNumber') ,{flag: 'a+'})
  }

  click_change_password() {
    this.elements.change_password_submit()
      .should('be.visible')
      .click()
      .wait(3000)
      cy.contains('Password changed successfully.')
        .should('be.visible')
  }



  }



export default loginDetailsPage
