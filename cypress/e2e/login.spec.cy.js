import userData from "../fixtures/userData.json"
import LoginPage from "../pages/loginPage"
import DashboardPage from "../pages/dashboardPage"


const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()


describe('Login Page', () => {

  beforeEach(() => {
    loginPage.accessLoginPage()
  })

  it('login-Sucsess', () => {

    loginPage.loginWithAnyUser(Cypress.env('USERNAME'), Cypress.env('PASSWORD'))
    dashboardPage.checkDashboardPage()
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