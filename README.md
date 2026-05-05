# OrangeHRM — E2E Test Automation with Cypress

This project automates core user flows of the **OrangeHRM** system using the **Cypress** framework. It covers login and profile update scenarios, ensuring functionality through end-to-end tests with a clean and well-organized code architecture.

Continuous Integration (CI) was set up with **GitHub Actions**, enabling automated test execution on every push to the repository.

This is a learning project aimed at improving skills in automated testing with Cypress and applying professional practices such as a modular test structure and continuous integration pipelines.

![CI](https://github.com/adamcy11/Automating-OrangeHRM-with-Cypress/actions/workflows/ci.yml/badge.svg)

## Technologies Used

| Tool | Purpose |
|---|---|
| Cypress 14 | E2E test framework |
| JavaScript (ES Modules) | Test language |
| Node.js 20 | Runtime |
| GitHub Actions | CI/CD pipeline |
| dotenv | Environment variable management |
| Chance.js | Dynamic test data generation |

## Architecture & Patterns

- **Page Object Model (POM)** — each page has a dedicated class encapsulating selectors and actions
- **Semantic Helpers** — `getFieldByLabel()`, `getComboByLabel()`, `getRadioButtonByLabel()` for resilient, label-based element lookup
- **Fixture Pattern** — test data externalized in `userData.json`, decoupled from test logic
- **Environment Variables** — credentials managed via `.env` locally and GitHub Secrets in CI, following 12-Factor App principles
- **Custom Commands** — `cy.login()` encapsulates the full authentication flow, eliminating duplication across specs
- **Dynamic Data** — Chance.js generates realistic random data per execution to avoid collisions and simulate real-world usage

## Getting Started

**Clone and install dependencies**
```bash
git clone https://github.com/adamcy11/Automating-OrangeHRM-with-Cypress

cd Automating-OrangeHRM-with-Cypress

npm install
```

**Configure environment variables**

Create a `.env` file in the project root with the following content:
```bash
CYPRESS_USERNAME=Admin  

CYPRESS_PASSWORD=admin123
```

> Note: Make sure Node.js is installed before starting.

## Running the Tests

```bash
# Open Cypress in interactive mode
npx cypress open

# Run tests in headless mode
npx cypress run
```

## Folder Structure

```bash
cypress/
├── e2e/              # Test specs
│   ├── forgot.spec.cy.js
│   ├── login.spec.cy.js
│   └── user.spec.cy.js
├── fixtures/         # External test data (JSON)
├── pages/            # Page Object classes
│   ├── DashboardPage.js
│   ├── ForgotPasswordPage.js
│   ├── LoginPage.js
│   ├── MenuPage.js
│   └── MyInfoPage.js
└── support/
    ├── commands.js   # Custom Cypress commands
    └── e2e.js
```

## Test Scenarios

**Login**
- Login with valid credentials
- Login with invalid password
- Login with invalid username
- Login with empty username field
- Login with empty password field

**Forgot Password**
- Navigate to forgot password page

**User Profile**
- Update personal details, employee info, nationality, marital status, and gender