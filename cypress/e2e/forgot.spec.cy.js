import LoginPage from "../pages/LoginPage"
import ForgotPasswordPage from "../pages/ForgotPasswordPage"
import userData from "../fixtures/userData.json"

const loginPage = new LoginPage()
const forgotPasswordPage = new ForgotPasswordPage()

describe('Forgot Password Test', () => {

  beforeEach(() => {
    loginPage.accessLoginPage()
    cy.forgotPage()
  })

  it('should return to login page when cancel is clicked', () => {
    forgotPasswordPage.returnLoginPage()
    loginPage.checkLoginPage()
  })

  it('should display validation when username field is empty', () => {
    forgotPasswordPage.submitResetPassword(userData.userEmpty.username)
    forgotPasswordPage.checkEmptyField()
  })

  it('should send password reset link successfully', () => {
    forgotPasswordPage.submitResetPassword(userData.userFail.username)
    forgotPasswordPage.checkResetPasswordSuccess()
  })
})
 