import LoginPage from "../pages/LoginPage"
import DashboardPage from "../pages/DashboardPage"

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()


Cypress.Commands.add('login', (username, password) => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(username, password)
    dashboardPage.checkDashboardPage()
})  