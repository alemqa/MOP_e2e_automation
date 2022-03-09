class dashboardPage {

   elements = {
    setting_button: () => cy.xpath('//*[@class="css-fi6pgk easlfcj0"]')

     }

  click_on_settings_button() {
    this.elements.setting_button()
      .should('be.visible')
      .click()
    cy.url()
      .should('include', '/settings')
    
  }


  }



export default dashboardPage
