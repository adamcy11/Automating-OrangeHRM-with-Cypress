class PimPage {

    selectorList() {
        const selectors = {
            pimTitle: ".oxd-table-filter-title",
            addEmployeeTitle: ".orangehrm-main-title",
            topbarNavItem: ".oxd-topbar-body-nav-tab-item",
            firstNameField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            createLoginToggle: ".oxd-switch-input",
            genericGroup: ".oxd-input-group",
            formActions: ".oxd-form-actions",
            successToast: ".oxd-toast",
            toastClose: ".oxd-toast-close",
            deleteButton: "button:has(.bi-trash)",
            confirmDeleteButton: ".oxd-button--label-danger",
            resultsTable: ".oxd-table",
            emptyFieldAlert: ".oxd-input-field-error-message",
        }
        return selectors
    }

    getFieldByLabel(labelName) {
        return cy.contains(this.selectorList().genericGroup, labelName).find('input')
    }

    getRadioButtonByLabel(groupLabel, optionText) {
        return cy.contains(this.selectorList().genericGroup, groupLabel).contains('label', optionText)
    }

    checkPimPage() {
        cy.location('pathname').should('include', '/pim/viewEmployeeList')
        cy.get(this.selectorList().pimTitle)
            .should('be.visible')
            .and('contain', 'Employee Information')
    }

    checkAddEmployeePage() {
        cy.location('pathname').should('include', '/pim/addEmployee')
        cy.get(this.selectorList().addEmployeeTitle)
            .should('be.visible')
            .and('contain', 'Add Employee')
    }

    navigateToAddEmployee() {
        cy.contains(this.selectorList().topbarNavItem, 'Add Employee').click()
    }



    fillEmployee(firstName, middleName, lastName) {
        cy.get(this.selectorList().firstNameField).should('not.be.disabled').clear()
        cy.get(this.selectorList().middleNameField).should('not.be.disabled').clear()
        cy.get(this.selectorList().lastNameField).should('not.be.disabled').clear()

        if (firstName) cy.get(this.selectorList().firstNameField).type(firstName)
        if (middleName) cy.get(this.selectorList().middleNameField).type(middleName)
        if (lastName) cy.get(this.selectorList().lastNameField).type(lastName)
        this.getFieldByLabel('Employee Id').invoke('val').as('employeeId')
    }

    fillStatus(status) {
        this.getRadioButtonByLabel('Status', status).click()
    }

    fillLoginDetails(username, password, confirmPassword) {
        cy.intercept('POST', '**/validation/password').as('passwordValidation')
        cy.get(this.selectorList().createLoginToggle).click()
        this.getFieldByLabel('Username').clear()
        this.getFieldByLabel('Password').clear()
        this.getFieldByLabel('Confirm Password').clear()

        if (username) this.getFieldByLabel('Username').type(username)
        if (password) this.getFieldByLabel('Password').type(password)
        if (confirmPassword) this.getFieldByLabel('Confirm Password').type(confirmPassword)
        if (password) cy.wait('@passwordValidation')
    }

    saveForm() {
        cy.get(this.selectorList().formActions).contains('button', 'Save').click()
        cy.get(this.selectorList().successToast).should('contain', 'Successfully Saved')
        cy.get(this.selectorList().toastClose).click()
    }

    clickSave() {
        cy.get(this.selectorList().formActions).contains('button', 'Save').click()
    }

    cancelForm() {
        cy.get(this.selectorList().formActions).contains('button', 'Cancel').click()
    }

    searchEmployeeByName(firstName) {
        cy.intercept('GET', '**/pim/employees**').as('searchResults')
        this.getFieldByLabel('Employee Name').clear().type(firstName)
        cy.contains('button', 'Search').click()
        cy.wait('@searchResults')
    }

    searchEmployeeById(employeeId) {
        cy.intercept('GET', '**/pim/employees**').as('searchResults')
        this.getFieldByLabel('Employee Id').clear().type(employeeId)
        cy.contains('button', 'Search').click()
        cy.wait('@searchResults')
    }

    validateSearchResult(firstName, employeeId) {
        if (firstName) cy.get(this.selectorList().resultsTable).should('contain', firstName)
        if (employeeId) cy.get(this.selectorList().resultsTable).should('contain', employeeId)
    }

    deleteEmployee() {
        // Ensures search returned exactly 1 result before deleting
        cy.get(this.selectorList().resultsTable)
            .find(this.selectorList().deleteButton)
            .should('have.length', 1)
            .click()
        cy.get(this.selectorList().confirmDeleteButton).click()
        cy.get(this.selectorList().successToast).should('contain', 'Successfully Deleted')
        cy.get(this.selectorList().toastClose).click()
    }

    checkEmptyField() {
        cy.get(this.selectorList().emptyFieldAlert)
            .should('be.visible')
            .and('contain', 'Required')
    }

    checkRepeatField() {
        cy.get(this.selectorList().emptyFieldAlert)
            .should('be.visible')
            .and('contain', 'Username already exists')
    }
}

export default PimPage