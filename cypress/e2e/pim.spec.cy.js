import userData from "../fixtures/userData.json"
import MenuPage from "../pages/MenuPage"
import PimPage from "../pages/PimPage"
import HeaderPage from "../pages/HeaderPage"
import Chance from "chance"

const menuPage = new MenuPage()
const pimPage = new PimPage()
const headerPage = new HeaderPage()
const chance = new Chance()

describe('Pim Test', () => {

    beforeEach(() => {
        cy.loginPage(Cypress.env('USERNAME'), Cypress.env('PASSWORD'))
    })

    it('should create, search and delete an employee', () => {
        const firstName = chance.first()
        const middleName = chance.word()
        const lastName = chance.last()

        cy.navigateToAddEmployee()
        pimPage.fillEmployee(firstName, middleName, lastName)
        pimPage.saveForm()

        cy.get('@employeeId').then((employeeId) => {
            menuPage.accessPim()
            pimPage.checkPimPage()
            pimPage.searchEmployeeByName(firstName)
            pimPage.validateSearchResult(firstName)

            menuPage.accessPim()
            pimPage.checkPimPage()
            pimPage.searchEmployeeById(employeeId)
            pimPage.validateSearchResult(employeeId)
            pimPage.deleteEmployee()
        })
    })

    it('should create an employee with login and authenticate', () => {
        const firstName = chance.first()
        const middleName = chance.word()
        const lastName = chance.last()
        const username = 'User' + Date.now()

        cy.navigateToAddEmployee()
        pimPage.fillEmployee(firstName, middleName, lastName)
        pimPage.fillLoginDetails(username, userData.newEmployee.password, userData.newEmployee.password)
        pimPage.fillStatus('Enabled')
        pimPage.saveForm()

        headerPage.logout()
        cy.loginPage(username, userData.newEmployee.password)
    })

    it('should display validation when first name is empty', () => {
        const middleName = chance.word()
        const lastName = chance.last()

        cy.navigateToAddEmployee()
        pimPage.fillEmployee(userData.newEmployee.firstNameEmpty, middleName, lastName)
        pimPage.clickSave()
        pimPage.checkEmptyField()
    })

    it('should display validation when last name is empty', () => {
        const firstName = chance.first()
        const middleName = chance.word()

        cy.navigateToAddEmployee()
        pimPage.fillEmployee(firstName, middleName, userData.newEmployee.lastNameEmpty)
        pimPage.clickSave()
        pimPage.checkEmptyField()
    })

    it('should display validation when username already exists', () => {
        const firstName = chance.first()
        const middleName = chance.word()
        const lastName = chance.last()

        cy.navigateToAddEmployee()
        pimPage.fillEmployee(firstName, middleName, lastName)
        pimPage.fillLoginDetails(userData.newEmployee.usernameRepeat, userData.newEmployee.password, userData.newEmployee.password)
        pimPage.clickSave()
        pimPage.checkRepeatField()
    })

    it('should display validation when username is empty', () => {
        const firstName = chance.first()
        const middleName = chance.word()
        const lastName = chance.last()

        cy.navigateToAddEmployee()
        pimPage.fillEmployee(firstName, middleName, lastName)
        pimPage.fillLoginDetails(userData.newEmployee.usernameEmpty, userData.newEmployee.password, userData.newEmployee.password)
        pimPage.clickSave()
        pimPage.checkEmptyField()
    })

    it('should display validation when password is empty', () => {
        const firstName = chance.first()
        const middleName = chance.word()
        const lastName = chance.last()
        const username = 'User' + Date.now()

        cy.navigateToAddEmployee()
        pimPage.fillEmployee(firstName, middleName, lastName)
        pimPage.fillLoginDetails(username, userData.newEmployee.passwordEmpty, userData.newEmployee.passwordEmpty)
        pimPage.clickSave()
        pimPage.checkEmptyField()
    })
})