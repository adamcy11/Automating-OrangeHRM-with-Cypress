class HeaderPage {
    selectorList() {
        const selectors = {
            userDropdown: ".oxd-userdropdown-tab",
            dropdownMenu: '[role="menu"]'
        }

        return selectors
    }

    logout() {
        cy.get(this.selectorList().userDropdown).should('be.visible').click()
        cy.get(this.selectorList().dropdownMenu).contains('Logout').click()
    }
}

export default HeaderPage