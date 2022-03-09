const name = 'Alem'
const password = "Test1234!"
const phone_number = "+38761555999"
const registration_code = "9999"

class registerPage {

   elements = {
    email: () => cy.get('#email'),
    name: () => cy.get('#name'),
    password: () => cy.get('#password'),
    confirm_password: () => cy.get('#confirm_password'),
    phone_number: () => cy.get('#phone_number'),
    password: () => cy.get('#password'),
    terms_conditions: () => cy.xpath('//*[@class="css-2vmmyj e1n1lbzj0"]'),
    sign_up_button: () => cy.xpath('//*[@data-testid="signup-button"]'),
    registration_code: () => cy.get('#registration_code'),
    verify_registration_code: () => cy.xpath('//*[@data-testid="pba-signup-button"]'),
    got_it: () => cy.xpath('//*[@class="e1jqfdaz0 css-tekghh e1n1lbzj0"]')


     }

  enter_email() {
    this.elements.email()
      .should('be.visible')
      .clear()
      .type('test'+Cypress.config('UniqueNumber')+'@test.com')
      .should('have.value', 'test'+Cypress.config('UniqueNumber')+'@test.com')
    cy.writeFile('cypress/integration/CreatedAccounts.txt', '')
    cy.writeFile('cypress/integration/CreatedAccounts.txt', 'email: ' ,{flag: 'a+'})
    cy.writeFile('cypress/integration/CreatedAccounts.txt', 'test'+Cypress.config('UniqueNumber')+'@test.com' ,{flag: 'a+'})
  }

  enter_name() {
    this.elements.name()
      .should('be.visible')
      .clear()
      .type(name)
      .should('have.value', name)
  }

  enter_password() {
    this.elements.password()
      .should('be.visible')
      .clear()
      .type(password)
      .should('have.value', password)
  }

  enter_confirm_password() {
    this.elements.confirm_password()
      .should('be.visible')
      .clear()
      .type(password)
      .should('have.value', password)
  }

  enter_phone_number() {
    this.elements.phone_number()
      .should('be.visible')
      .clear()
      .type(phone_number)
      .should('have.value', phone_number)
  }

  click_on_terms_conditions() {
    this.elements.terms_conditions()
      .click({force:true})
  }

  click_on_sign_up() {
    this.elements.sign_up_button()
      .should('be.visible')
      .click()
  }

  enter_registration_code() {
    this.elements.registration_code()
      .should('be.visible')
      .clear()
      .type(registration_code)
      .should('have.value', registration_code)
  }

  verify_registration_code() {
    this.elements.verify_registration_code()
      .should('be.visible')
      .click()
  }

  phone_verification_alert() {
    cy.contains('Your phone number is now verified')
      .should('be.visible')
  }

  click_on_got_it() {
    this.elements.got_it()
      .should('be.visible')
      .click()
  }

  verify_user_registered() {
    cy.url()
      .should('include', '/events')
  }


  }



export default registerPage
