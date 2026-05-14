import userData from "../fixtures/userData.json"
import LoginPage from "../pages/LoginPage"

const loginPage = new LoginPage()

describe('Login Page', () => {

  it('should login with valid credentials', () => {
    cy.loginPage(Cypress.env('USERNAME'), Cypress.env('PASSWORD'))
  })

  describe('Credential validations', () => {

    beforeEach(() => {
      loginPage.accessLoginPage()
    })

    it('should display error when incorrect password is provided', () => {
      loginPage.loginWithAnyUser(userData.passwordFail.username, userData.passwordFail.password)
      loginPage.checkAccessInvalid()
    })

    it('should display error when incorrect username is provided', () => {
      loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
      loginPage.checkAccessInvalid()
    })

    it('should display validation when username field is empty', () => {
      loginPage.loginWithAnyUser(userData.userEmpty.username, Cypress.env('PASSWORD'))
      loginPage.checkEmptyField()
    })

    it('should display validation when password field is empty', () => {
      loginPage.loginWithAnyUser(Cypress.env('USERNAME'), userData.userEmpty.password)
      loginPage.checkEmptyField()
    })
  })
})