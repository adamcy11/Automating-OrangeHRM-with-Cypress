import LoginPage from "../pages/LoginPage"
import DashboardPage from "../pages/DashboardPage"
import ForgotPasswordPage from "../pages/ForgotPasswordPage"
import MenuPage from "../pages/MenuPage"
import PimPage from "../pages/PimPage"

const forgotPasswordPage = new ForgotPasswordPage()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const pimPage = new PimPage()


Cypress.Commands.add('loginPage', (username, password) => {
    cy.session(
        [username, password],
        () => {
            loginPage.accessLoginPage()
            loginPage.checkLoginPage()
            loginPage.loginWithAnyUser(username, password)
            dashboardPage.checkDashboardPage()
        },
        {
            validate() {
                dashboardPage.accessDashboardPage()
                cy.location('pathname').should('include', 'dashboard')
            }
        }
    )
    cy.visit('dashboard/index')
})

Cypress.Commands.add('forgotPage', () => {
    forgotPasswordPage.accessForgotPasswordPage()
    forgotPasswordPage.checkForgotPasswordPage()
})

Cypress.Commands.add('navigateToAddEmployee', () => {
    menuPage.accessPim()
    pimPage.checkPimPage()
    pimPage.navigateToAddEmployee()
    pimPage.checkAddEmployeePage()
})