class loginPage {
    selectorList(){
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton: "[type='submit']",
            wrongCredentialAlert: "[role='alert']",
            empityFieldAlert: ".oxd-text--span"
        }

        return selectors // Returning selectors in Cypress ensures proper command chaining and maintains the asynchronous flow of tests.

    }

// Structure of the tests to be used
    accessLoginPage(){
        cy.visit('/auth/login')
    }
    
    loginWithAnyUser(username, password){
        cy.get(this.selectorList().usernameField).type(username)
        cy.get(this.selectorList().passwordField).type(password)
        cy.get(this.selectorList().loginButton).click()
    }

    checkAccessInvalid(){
        cy.get(this.selectorList().wrongCredentialAlert)
    }

    checkEmptyField(){
        cy.get(this.selectorList().empityFieldAlert)
    }

}
export default loginPage // allows you to import and reuse login logic in other files.