import userData from "../fixtures/userData.json"
import LoginPage from "../pages/loginPage"
import DashboardPage from "../pages/dashboardPage"
import MenuPage from "../pages/menuPage"
import MyInfoPage from "../pages/myInfoPage"

const Chance = require('chance') 
var chance = new Chance() //Read the chanceJS documentation for random data possibilities
const menuPage = new MenuPage()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const myInfoPage = new MyInfoPage()

describe(' User Orange HRM Test', () => {

  it('User Info Update - Success', () => {

    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    myInfoPage.fillpersonalDetails(chance.first(), userData.personalDetails.middleName, chance.last()) // --------> example of using chanceJS
    myInfoPage.fillEmployeeDetails(userData.employeeDetails.employeeId, userData.employeeDetails.otherId, userData.employeeDetails.driversLicenseDate, userData.employeeDetails.licenseExpiryDate)
    myInfoPage.fillStatus()
    myInfoPage.saveForm()
  })

})