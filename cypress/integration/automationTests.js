const url = Cypress.env("baseUrl");

import landingPage from "./PageObjects/landingPage"
import registerPage from "./PageObjects/registerPage"
import loginPage from "./PageObjects/loginPage"
import dashboardPage from "./PageObjects/dashboardPage"
import settingsPage from "./PageObjects/settingsPage"
import accountInformationPage from "./PageObjects/accountInformationPage"
import loginDetailsPage from "./PageObjects/loginDetailsPage"

let password = new loginDetailsPage()
let dashboard = new dashboardPage()
let account = new accountInformationPage()
let settings = new settingsPage()
let login = new loginPage()
let register = new registerPage()
let landing = new landingPage()


describe("MOP - e2e tests", function() {

  it("User should be able to 'Register' to the app", function() {

    cy.log("Visits the QA-Task page")
    landing.navigate()
    cy.log("Clicks on 'Sign Up' button")
    landing.clickOnSignUpButton()
    cy.log("Enters valid 'Email address'")
    register.enter_email()
    cy.log("Enters 'Name'")
    register.enter_name()
    cy.log("Enters valid 'Password'")
    register.enter_password()
    cy.log("Enters valid 'Confirm Password'")
    register.enter_confirm_password()
    cy.log("Enters valid 'Phone Number'")
    register.enter_phone_number()
    cy.log("Clicks on 'I agree with terms & conditions'")
    register.click_on_terms_conditions()
    cy.log("Clicks on 'Sign Up' button to submit the form")
    register.click_on_sign_up()
    cy.log("Enters 'Registration code' to confirm the phone number")
    register.enter_registration_code()
    cy.log("Click on 'Verify' button")
    register.verify_registration_code()
    cy.log("Verify that 'Your phone number is now verified' message is displayed")
    register.phone_verification_alert()
    cy.log("Click on 'Got it' to complete registration")
    register.click_on_got_it()
    cy.log("Verify that user is successfully registered and navigated to /events page")
    register.verify_user_registered()
    })

  it("User should be able to 'Register' to the app", function() {

    cy.clearLocalStorage();
    cy.log("Visits the QA-Task page")
    landing.navigate()
    cy.log("Click on 'Log in' button")
    landing.clickOnLogInButton()
    cy.log("Enters valid 'Email'")
    login.enter_email()
    cy.log("Enters valid 'Password'")
    login.enter_password()
    cy.log("Clicks on 'Keep me logged in'")
    login.clicks_remember_me()
    cy.log("Click on 'Login' submit button")
    login.clicks_login_submit()
    cy.log("User should be successfully logged in")
    login.verify_login()
    })

  it("User should be able to Edit Account Information ", function() {
    cy.log("User is alredy logged in")
    login.verify_login()
    cy.log("Click on 'Settings' button")
    dashboard.click_on_settings_button()
    cy.log("Click on 'Account information' button")
    settings.click_on_account_information()
    cy.log("Edits the 'Full name' field")
    account.edits_full_name()
    cy.log("Edits the 'Address' field")
    account.edits_address()
    cy.log("Clicks on 'Update settings' to submit changes and to verify success token")
    account.click_update_settings()
    })

  it("User should be able to Change Password", function() {
    cy.log("Click on 'Settings' button")
    dashboard.click_on_settings_button()
    cy.log("Click on 'Login details' button")
    settings.click_on_login_details()
    cy.log("Enters the 'Current password' field")
    password.enters_current_password()
    cy.log("Enters the 'New password' field")
    password.enters_new_password()
    cy.log("Enters the 'Confirm passowrd'")
    password.enters_confirm_password()
    cy.log("Click on 'Change Passoword' to submit changes and to verify success token")
    password.click_change_password()
    })

  it("User should be able to Login with new password", function() {
    cy.log("Clears the cookies and local storage")
    cy.clearLocalStorage();
    cy.log("Visits the QA-Task page")
    landing.navigate()
    cy.log("Click on 'Login' button")
    landing.clickOnLogInButton()
    cy.log("Enters email address for the newly created account")
    login.enter_email()
    cy.log("Enters the new password, that we changed in the previous test")
    login.enter_new_password()
    cy.log("Click on Login submit button")
    login.clicks_login_submit()
    cy.log("Verify that user is logged in successfully")
    login.verify_login()
  })

  it("Credentials for newly created account are stored into cypress/integration/CreatedAccount.txt", function() {
    cy.log("END")
  })








});
