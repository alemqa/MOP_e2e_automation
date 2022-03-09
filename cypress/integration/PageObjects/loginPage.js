const password = "Test1234!"

class loginPage {

   elements = {
    email: () => cy.get('#email'),
    password: () => cy.get('#password'),
    keep_me_logged_in: () => cy.xpath('//*[@class="css-2vmmyj e1n1lbzj0"]'),
    login_submit: () => cy.xpath('//*[@data-testid="login-button"]')



     }

  enter_email() {
    this.elements.email()
      .should('be.visible')
      .clear()
      .type('test'+Cypress.config('UniqueNumber')+'@test.com')
      .should('have.value', 'test'+Cypress.config('UniqueNumber')+'@test.com')
  }

  enter_password() {
    this.elements.password()
      .should('be.visible')
      .clear()
      .type(password)
      .should('have.value', password)
  }

  enter_new_password() {
    this.elements.password()
      .should('be.visible')
      .clear()
      .type('Test!'+Cypress.config('UniqueNumber'))
      .should('have.value', 'Test!'+Cypress.config('UniqueNumber'))
  }

  clicks_remember_me() {
    this.elements.keep_me_logged_in()
      .should('be.visible')
      .click()
  }

  clicks_login_submit() {
    this.elements.login_submit()
      .should('be.visible')
      .click()
  }

  verify_login() {
    cy.url()
      .should('include', '/events')
  }








  }



export default loginPage
