# OrangeHRM — E2E Test Automation with Cypress

<a href="https://opensource-demo.orangehrmlive.com/web/index.php/auth/login">
  <img src=".github/images/orangehrm-preview.png" alt="OrangeHRM Demo" width="800"/>
</a>

This project automates core user flows of the **OrangeHRM** system using the **Cypress** framework. It covers authentication, profile management, and employee management scenarios through end-to-end tests with a clean and well-organized architecture.

Continuous Integration is configured with **GitHub Actions**, running tests automatically on every push and publishing results as a public HTML report via GitHub Pages.

This is a learning project aimed at building practical skills in test automation with Cypress and applying professional-grade practices such as POM architecture, session management, CI/CD pipelines, and HTML reporting.

![CI](https://github.com/adamcy11/Automating-OrangeHRM-with-Cypress/actions/workflows/ci.yml/badge.svg)

## Test Report

The latest test report is published automatically after each CI run:

**[View Test Report](https://adamcy11.github.io/Automating-OrangeHRM-with-Cypress/)**

## Technologies Used

| Tool | Purpose |
|---|---|
| Cypress 14 | E2E test framework |
| JavaScript (ES Modules) | Test language |
| Node.js 20 | Runtime |
| GitHub Actions | CI/CD pipeline |
| cypress-mochawesome-reporter | HTML test reports |
| dotenv | Environment variable management |
| Chance.js | Dynamic test data generation |

## Architecture & Patterns

- **Page Object Model (POM)** — each page has a dedicated class encapsulating selectors and actions
- **Semantic Helpers** — `getFieldByLabel()`, `getRadioButtonByLabel()` for resilient, label-based element lookup that survives UI refactors
- **Fixture Pattern** — test data externalized in `userData.json`, decoupled from test logic
- **Environment Variables** — credentials managed via `.env` locally and GitHub Secrets in CI, following 12-Factor App principles
- **Custom Commands** — `cy.loginPage()` encapsulates the full authentication flow with `cy.session()` for session caching, eliminating repeated login overhead across specs
- **Dynamic Data** — Chance.js generates realistic random data per execution to avoid collisions and simulate real-world usage
- **Network Control** — `cy.intercept()` + `cy.wait()` used to synchronize with async API calls before asserting UI state, eliminating timing-based flakiness

## CI/CD Pipeline

The GitHub Actions pipeline runs on every push to `main` and `develop`, and on pull requests to `main`:

1. **Checkout** — clones the repository
2. **Setup Node** — prepares Node.js 20
3. **Install dependencies** — `npm ci` for reproducible installs
4. **Security audit** — `npm audit --audit-level=critical`
5. **Run Cypress** — executes all specs headless on Chrome
6. **Upload report** — saves Mochawesome HTML report as a CI artifact
7. **Deploy to GitHub Pages** — publishes the report as a public URL (push events only)

> **Matrix strategy note:** Cross-browser parallel execution (Chrome + Edge) was evaluated but reverted due to Employee ID conflicts on the shared OrangeHRM demo environment. In production, each job would run against an isolated environment.

## Getting Started

**Clone and install dependencies**
```bash
git clone https://github.com/adamcy11/Automating-OrangeHRM-with-Cypress
cd Automating-OrangeHRM-with-Cypress
npm install
```

**Configure environment variables**

Create a `.env` file in the project root:
```bash
CYPRESS_USERNAME=Admin
CYPRESS_PASSWORD=admin123
```

> Note: Make sure Node.js 20+ is installed before starting.

## Running the Tests

```bash
# Open Cypress in interactive mode
npx cypress open

# Run tests in headless mode
npm run cy:run
```

## Folder Structure

```
cypress/
├── e2e/                  # Test specs
│   ├── forgot.spec.cy.js
│   ├── login.spec.cy.js
│   ├── logout.spec.cy.js
│   ├── pim.spec.cy.js
│   └── user.spec.cy.js
├── fixtures/             # External test data (JSON)
├── pages/                # Page Object classes
│   ├── DashboardPage.js
│   ├── ForgotPasswordPage.js
│   ├── HeaderPage.js
│   ├── LoginPage.js
│   ├── MenuPage.js
│   ├── MyInfoPage.js
│   └── PimPage.js
└── support/
    ├── commands.js       # Custom Cypress commands
    └── e2e.js
```

## Test Scenarios

**Login**
- Login with valid credentials
- Login with invalid password
- Login with invalid username
- Login with empty username field
- Login with empty password field

**Logout**
- Logout successfully

**Forgot Password**
- Return to login page when cancel is clicked
- Display validation when username field is empty
- Send password reset link successfully

**PIM — Employee Management**
- Create, search and delete an employee
- Create an employee with login credentials and authenticate
- Display validation when first name is empty
- Display validation when last name is empty
- Display validation when username already exists
- Display validation when username is empty
- Display validation when password is empty

**User Profile**
- Update personal details, employee info, nationality, marital status and gender
