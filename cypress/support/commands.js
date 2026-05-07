import LoginPage from "../pages/LoginPage"
import DashboardPage from "../pages/DashboardPage"
import ForgotPasswordPage from "../pages/ForgotPasswordPage"

const forgotPasswordPage = new ForgotPasswordPage()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()


Cypress.Commands.add('loginPage', (username, password) => {
    cy.session(
        [username, password],
        () => {
            loginPage.accessLoginPage()
            loginPage.checkLoginPage()
            loginPage.loginWithAnyUser(username, password)
            dashboardPage.checkDashboardPage()
        }
    )
    cy.visit('dashboard/index')
})

Cypress.Commands.add('forgotPage', () => {
    forgotPasswordPage.accessForgotPasswordPage()
    forgotPasswordPage.checkForgotPasswordPage()
})