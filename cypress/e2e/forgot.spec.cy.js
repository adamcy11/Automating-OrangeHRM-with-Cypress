import userData from "../fixtures/userData.json" 
import LoginPage from "../pages/loginPage"
import ForgotPasswordPage from "../pages/forgotPasswordPage"

const loginPage = new LoginPage()
const forgotPasswordPage = new ForgotPasswordPage()

describe(' User Orange HRM Test Forgot Password Page', () => {

     beforeEach(() => {
    loginPage.accessLoginPage()  //Calls once before each test
  })

  it('access-Forgot-Password-Page', () => {

    forgotPasswordPage.accessForgotPassword()
    forgotPasswordPage.checkforgotPasswordPage()
  })

  })
