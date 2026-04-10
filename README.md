# OrangeHRM –- Automação de Testes E2E com Cypress



This project automates core user flows of the **OrangeHRM** system using the **Cypress** framework. It covers login and profile update scenarios, ensuring functionality through end-to-end tests with a clean and well-organized code architecture.

Continuous Integration (CI) was set up with **GitHub Actions**, enabling automated test execution on every push to the repository.

This is a learning project aimed at improving skills in automated testing with Cypress and applying professional practices such as a modular test structure and continuous integration pipelines.

![CI](https://github.com/adamcy11/Automating-OrangeHRM-with-Cypress/actions/workflows/ci.yml/badge.svg)


##  Technologies Used
```bash
Cypress 
JavaScript
Node.js 
GitHub Actions 
```



 ## Installing Dependencies

```bash
npm install
```


  Note: Make sure Node.js is installed before starting.

##  Running the Tests



```bash

## Open Cypress in interactive mode

npx cypress open

## Run tests in headless mode via terminal

npx cypress run
```

##  Included Features

-  Automated login validation

- Profile data update via forms

- Use of the Page Object Model for code organization

- Headless test execution

 Folder Structure

```bash
cypress/
├── e2e/                # Test cases
├── fixtures/           # Test data (JSON)
├── pages/              # Page Object definitions
├── support/            # Configurations and utilities
```

##  Covered Test Scenarios

- Login with valid credentials

- Login with invalid credentials

- Profile update with valid data

- Validation of required fields in the profile




----


