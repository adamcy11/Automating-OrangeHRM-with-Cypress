class myInfoPage {

    selectorList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            genericGroup: ".oxd-input-group",
            dateCloseField: ".--close",
            submitButton: "[type='submit']",
        }



        return selectors
    }

    getFieldByLabel(labelName) {
        return cy.contains(this.selectorList().genericGroup, labelName).find('input')
    }

    getComboByLabel(labelName) {
        return cy.contains(this.selectorList().genericGroup, labelName).find('.oxd-select-text')
    }

    getRadioButtonByLabel(groupLabel, optionText) {
        return cy.contains(this.selectorList().genericGroup, groupLabel).contains(optionText)
    }

    fillpersonalDetails(firstName, middleName, lastName) {
        cy.get(this.selectorList().firstNameField).clear().type(firstName)
        cy.get(this.selectorList().middleNameField).clear().type(middleName)
        cy.get(this.selectorList().lastNameField).clear().type(lastName)
    }

    fillEmployeeDetails(employeeId, otherId, driversLicenseNumber, licenseExpiryDate) {
        this.getFieldByLabel('Employee Id').clear().type(employeeId)
        this.getFieldByLabel('Other Id').clear().type(otherId)
        this.getFieldByLabel("Driver's License Number").clear().type(driversLicenseNumber)
        this.getFieldByLabel('License Expiry Date').clear().type(licenseExpiryDate)
        cy.get(this.selectorList().dateCloseField).click()
    }

    fillStatus() {
        this.getComboByLabel('Nationality').click()
        cy.get('.oxd-select-dropdown').contains('Brazilian').click()
        this.getComboByLabel('Marital Status').click()
        cy.get('.oxd-select-dropdown').contains('Married').click()
        this.getRadioButtonByLabel('Gender', 'Male').click()
    }

    saveForm() {
        cy.get(this.selectorList().submitButton).eq(0).click({ force: true })
        cy.get('body').should('contain', 'Successfully Update')
        cy.get('.oxd-toast-close')
    }


}

export default myInfoPage