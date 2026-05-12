import LoginPage from "../pages/LoginPage"
import HeaderPage from "../pages/HeaderPage"
import DashboardPage from "../pages/DashboardPage"

const dashboardPage = new DashboardPage()
const loginPage = new LoginPage()
const headerPage = new HeaderPage()

describe('logout Test', () => {

    beforeEach(() => {

        cy.loginPage(Cypress.env('USERNAME'), Cypress.env('PASSWORD'))
    })

    it('should logout successfully', () => {

        headerPage.logout()
        dashboardPage.accessDashboardPage()
        loginPage.checkLoginPage()
    })
})  