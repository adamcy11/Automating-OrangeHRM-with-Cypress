class LoginPage {
    selectorList() {
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton: "[type='submit']",
            wrongCredentialAlert: "[role='alert']",
            emptyFieldAlert: ".oxd-input-field-error-message",
            loginTitle: ".orangehrm-login-title"
        }

        return selectors 
    }

    
    accessLoginPage() {
        cy.visit('auth/login')
    }

    checkLoginPage() {
        cy.location('pathname').should('equal', '/web/index.php/auth/login')
        cy.get(this.selectorList().loginTitle).should('be.visible')
    }

    loginWithAnyUser(username, password) {
        cy.get(this.selectorList().usernameField).clear()
        cy.get(this.selectorList().passwordField).clear()

        if (username) cy.get(this.selectorList().usernameField).type(username)
        if (password) cy.get(this.selectorList().passwordField).type(password)

        cy.get(this.selectorList().loginButton).click()
    }

    checkAccessInvalid() {
        cy.get(this.selectorList().wrongCredentialAlert)
            .should('be.visible')
            .and('contain', 'Invalid credentials')
    }

    checkEmptyField() {
        cy.get(this.selectorList().emptyFieldAlert)
            .should('be.visible')
            .and('contain', 'Required')
    }

}
export default LoginPage 