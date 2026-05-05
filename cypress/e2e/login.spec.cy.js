import userData from "../fixtures/userData.json"
import LoginPage from "../pages/LoginPage"
import DashboardPage from "../pages/DashboardPage"


const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()


describe('Success scenarios', () => {

  it('login-Success', () => {

    cy.login(Cypress.env('USERNAME'), Cypress.env('PASSWORD'))
  })

})

describe('Failure scenarios', () => {

  beforeEach(() => {
    loginPage.accessLoginPage()
  })
  it('password-Fail', () => {

    loginPage.loginWithAnyUser(userData.passwordFail.username, userData.passwordFail.password)
    loginPage.checkAccessInvalid()
  })

  it('user-Fail', () => {

    loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccessInvalid()
  })

  it('user-Empty', () => {
    loginPage.loginWithAnyUser(userData.userEmpty.username, Cypress.env('PASSWORD'))
    loginPage.checkEmptyField()
  })

  it('Password-Empty', () => {
    loginPage.loginWithAnyUser(Cypress.env('USERNAME'), userData.userEmpty.password)
    loginPage.checkEmptyField()
  })
})