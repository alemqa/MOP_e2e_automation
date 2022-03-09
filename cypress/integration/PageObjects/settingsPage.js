class settingsPage {

   elements = {
    account_information: () => cy.xpath('//*[@class="css-1bjfru0 e1n1lbzj0"]').contains('Account information'),
    login_details: () => cy.xpath('//*[@class="css-1bjfru0 e1n1lbzj0"]').contains('Login details'),
     }

  click_on_account_information() {
    this.elements.account_information()
      .should('be.visible')
      .click()
    cy.url()
      .should('include', '/account-information')
  }

  click_on_login_details() {
    this.elements.login_details()
      .should('be.visible')
      .click()
    cy.url()
      .should('include', '/login-settings')
  }


  }



export default settingsPage
