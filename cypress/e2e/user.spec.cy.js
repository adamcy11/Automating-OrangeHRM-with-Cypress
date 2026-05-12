import userData from "../fixtures/userData.json"
import LoginPage from "../pages/LoginPage"
import DashboardPage from "../pages/DashboardPage"
import MenuPage from "../pages/MenuPage"
import MyInfoPage from "../pages/MyInfoPage"
import Chance from "chance"

const chance = new Chance() //Read the chanceJS documentation for random data possibilities
const menuPage = new MenuPage()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const myInfoPage = new MyInfoPage()

describe('User Test', () => {

   beforeEach(() => {

    cy.loginPage(Cypress.env('USERNAME'), Cypress.env('PASSWORD'))
  })

  it('should update profile information successfully', () => {

    menuPage.accessMyInfo()
    myInfoPage.fillPersonalDetails(chance.first(), userData.personalDetails.middleName, chance.last()) // --------> example of using chanceJS
    myInfoPage.fillEmployeeDetails(userData.employeeDetails.employeeId, userData.employeeDetails.otherId, userData.employeeDetails.driversLicenseNumber, userData.employeeDetails.licenseExpiryDate)
    myInfoPage.fillStatus(userData.statusDetails.nationality, userData.statusDetails.maritalStatus, userData.statusDetails.gender)
    myInfoPage.saveForm()
  })
})