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

    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password) 
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

  it('user-Empty', () =>{

    loginPage.loginWithAnyUser(userData.userEmpty.username, userData.userSuccess.password)
    loginPage.checkEmptyField()
  })

  it('Password-Empty', () =>{

    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userEmpty.password)
    loginPage.checkEmptyField()
  })
})