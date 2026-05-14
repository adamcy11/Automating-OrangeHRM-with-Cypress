import './commands'
import 'cypress-mochawesome-reporter/register'

Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes("Cannot read properties of undefined (reading 'response')")) {
    return false
  }
  if (err.message.includes('Request aborted')) {
    return false
  }
})