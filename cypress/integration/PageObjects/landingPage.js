const alemUsername = "alembalic0@gmail.com"
const url = 'https://qa-task-web.ministryofprogramming.com/'
class landingPage {

   elements = {
    signUpButton: () => cy.xpath('//*[@class="e1jqfdaz0 css-o6pyxp e1n1lbzj0"]').contains('Sign Up'),
    logInButton: () => cy.xpath('//*[@class="e1jqfdaz0 css-66x756 e1n1lbzj0"]').contains('Log in')


     }

  navigate() {
      cy.visit('https://qa-task-web.ministryofprogramming.com/')
      cy.url('eq', 'https://qa-task-web.ministryofprogramming.com/')
  }

  clickOnSignUpButton() {
    this.elements.signUpButton()
      .should('be.visible')
      .click()
    cy.url('include', '/signup')
  }

  clickOnLogInButton() {
    this.elements.logInButton()
      .should('be.visible')
      .click()
    cy.url('include', '/login')
  }


}
export default landingPage
