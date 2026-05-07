class MyInfoPage {

    selectorList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            genericGroup: ".oxd-input-group",
            dateCloseField: ".--close",
            submitButton: "[type='submit']",
            successToast: ".oxd-toast",
            toastClose: ".oxd-toast-close"
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

    fillPersonalDetails(firstName, middleName, lastName) {
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

    fillStatus(nationality, maritalStatus, gender) {
        this.getComboByLabel('Nationality').click()
        cy.get('.oxd-select-dropdown').should('be.visible').contains(nationality).click()
        this.getComboByLabel('Marital Status').click()
        cy.get('.oxd-select-dropdown').should('be.visible').contains(maritalStatus).click()
        this.getRadioButtonByLabel('Gender', gender).click()
    }

    saveForm() {
        cy.contains('button', 'Save').scrollIntoView().click()
        cy.get(this.selectorList().successToast).should('contain', 'Successfully Updated')
        cy.get(this.selectorList().toastClose).click()
    }



}

export default MyInfoPage