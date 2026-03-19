class myInfoPage {

    selectorList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-dd-mm']",
            dateCloseField: ".--close",
            genericComboBox: ".oxd-select-text",
            firstItemComboBox: ".oxd-select-dropdown > :nth-child(27)",
            secondItemComboBox: ".oxd-select-dropdown > :nth-child(3)",
            submitButton: "[type='submit']",
            genericInput: ".oxd-radio-input"
        }



        return selectors
    }

    fillpersonalDetails(firstName, middleName, lastName) {
        cy.get(this.selectorList().firstNameField).clear().type(firstName)
        cy.get(this.selectorList().middleNameField).clear().type(middleName)
        cy.get(this.selectorList().lastNameField).clear().type(lastName)
    }

    fillEmployeeDetails(employeeId, otherId, driversLicenseDate, licenseExpiryDate) {
        cy.get(this.selectorList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorList().genericField).eq(5).clear().type(driversLicenseDate)
        cy.get(this.selectorList().genericField).eq(6).clear().type(licenseExpiryDate)
        cy.get(this.selectorList().dateCloseField).click()
    }

    fillStatus() {
        cy.get(this.selectorList().genericComboBox).eq(0).click()
        cy.get(this.selectorList().firstItemComboBox).click()
        cy.get(this.selectorList().genericComboBox).eq(1).click()
        cy.get(this.selectorList().secondItemComboBox).click()
        cy.get(this.selectorList().genericInput).eq(1).click()
    }

    saveForm() {
        cy.get(this.selectorList().submitButton).eq(0).click({ force: true })
        cy.get('body').should('contain', 'Successfully Update')
        cy.get('.oxd-toast-close')
    }


}

export default myInfoPage









