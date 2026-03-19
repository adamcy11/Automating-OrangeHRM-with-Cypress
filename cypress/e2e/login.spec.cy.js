import userData from "../fixtures/userData.json" 
import LoginPage from "../pages/loginPage"
import DashboardPage from "../pages/dashboardPage"
import ForgotPasswordPage from "../pages/forgotPasswordPage"



// Imports test data and page objects to structure and execute the test cases
// userData.json stores user credentials for login tests and data for user information change tests.


const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const forgotPasswordPage = new ForgotPasswordPage()
// Instantiating the page classes to use their methods in the tests

describe(' User Orange HRM Test Login Page', () => {

  beforeEach(() => {
    loginPage.accessLoginPage()  //Calls once before each test
  })

  it('login-Sucsess', () => {

    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password) // ----->    Performs login with the provided credentials (username and password),
    dashboardPage.checkDashboardPage()  //Verifies the dashboard page after a successful login            allowing the test to verify login with different users (valid or invalid)
  })

  it('user-Fail', () => {

    loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccessInvalid()  //Verifies the error message after a failed login
  })

   it('password-Fail', () => {

    loginPage.loginWithAnyUser(userData.passwordFail.username, userData.passwordFail.password)
    loginPage.checkAccessInvalid()  
  })

  it('user-Empty', () =>{

    loginPage.loginWithAnyUser(userData.userEmpty.username, userData.userSuccess.password)
    loginPage.checkEmptyField()
  })

  it('Password-Empty', () =>{

    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userEmpty.password)
    loginPage.checkEmptyField()
  })
})