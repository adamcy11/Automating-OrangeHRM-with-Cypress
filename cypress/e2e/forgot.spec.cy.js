import LoginPage from "../pages/LoginPage"
import ForgotPasswordPage from "../pages/ForgotPasswordPage"

const loginPage = new LoginPage()
const forgotPasswordPage = new ForgotPasswordPage()

describe('Test Forgot Password Page', () => {

     beforeEach(() => {
    loginPage.accessLoginPage()  //Calls once before each test
  })

  it('access-Forgot-Password-Page', () => {

    forgotPasswordPage.accessForgotPassword()
    forgotPasswordPage.checkforgotPasswordPage()
  })

  })
