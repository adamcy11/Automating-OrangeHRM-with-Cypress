class ForgotPasswordPage {
    selectorList() {
        const selectors = {
            forgotPasswordTitle: ".orangehrm-forgot-password-title",
            forgotPasswordLink: ".orangehrm-login-forgot-header",
            cancelButton: ".orangehrm-forgot-password-button--cancel",
            resetPasswordButton: ".orangehrm-forgot-password-button--reset",
            emptyFieldAlert: ".oxd-input-field-error-message",
            usernameField: "[name='username']",
        }

        return selectors
    }

    accessForgotPasswordPage() {
        cy.get(this.selectorList().forgotPasswordLink).should('be.visible').click()
    }

    checkForgotPasswordPage() {
        cy.location('pathname').should('equal', '/web/index.php/auth/requestPasswordResetCode')
        cy.get(this.selectorList().forgotPasswordTitle)
            .should('be.visible')
            .and('contain', 'Reset Password')
    }

    submitResetPassword(username) {
        cy.get(this.selectorList().usernameField).clear()
        if (username) cy.get(this.selectorList().usernameField).type(username)

        cy.get(this.selectorList().resetPasswordButton).click()
    }

    checkEmptyField() {
        cy.get(this.selectorList().emptyFieldAlert)
            .should('be.visible')
            .and('contain', 'Required')
    }

    checkResetPasswordSuccess() {
        cy.get(this.selectorList().forgotPasswordTitle)
            .should('be.visible')
            .and('contain', 'Reset Password link sent successfully')

    }
    returnLoginPage() {
        cy.get(this.selectorList().cancelButton).should('be.visible').click()
    }


}

export default ForgotPasswordPage