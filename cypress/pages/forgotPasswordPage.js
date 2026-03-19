class forgotPasswordPage {
    selectorList() {
        const selectors = {
            forgotPasswordTitle: ".orangehrm-forgot-password-title",
            forgotPasswordLink : ".orangehrm-login-forgot-header"
        }

        return selectors
    }
    
    accessForgotPassword(){
        cy.get(this.selectorList().forgotPasswordLink).click()
    }

    checkforgotPasswordPage() {
        cy.location('pathname').should('equal', '/web/index.php/auth/requestPasswordResetCode')
        cy.get(this.selectorList().forgotPasswordTitle).should('be.visible')
    }

    
}

export default forgotPasswordPage