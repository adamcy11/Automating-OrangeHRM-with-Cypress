class MenuPage {
    selectorList() {
        const selectors = {
            sidePanel: '[aria-label="Sidepanel"]'
        }

        return selectors
    }

    accessMyInfo() {
        cy.get(this.selectorList().sidePanel).contains('My Info').click()
    }

    accessPim() {
        cy.get(this.selectorList().sidePanel).contains('PIM').click()
    }
}

export default MenuPage