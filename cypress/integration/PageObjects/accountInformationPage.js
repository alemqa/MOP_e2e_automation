const success_token = "Account information saved successfully."

class accountInformationPage {

   elements = {
    full_name: () => cy.get('#name'),
    address: () => cy.get('#address'),
    update_settings_submit: () => cy.xpath('//*[@data-testid="account-information-button"]')
     }

  edits_full_name() {
    this.elements.full_name()
      .should('be.visible')
      .clear()
      .type('Test '+Cypress.config('UniqueNumber'))
      .should('have.value', 'Test '+Cypress.config('UniqueNumber'))
  }

  edits_address() {
    this.elements.address()
      .should('be.visible')
      .clear()
      .type('Majkl Dzordana '+Cypress.config('UniqueNumber'))
      .should('have.value', 'Majkl Dzordana '+Cypress.config('UniqueNumber'))

  }

  click_update_settings() {
    this.elements.update_settings_submit()
      .should('be.visible')
      .click()
      .wait(3000)
    cy.contains(success_token)
      .should('be.visible')
  }



  }



export default accountInformationPage
