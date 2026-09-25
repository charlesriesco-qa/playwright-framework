# Playwright Login Framework

![Playwright Tests](https://github.com/charlesriesco-qa/playwright-framework/actions/workflows/playwright.yml/badge.svg)

## Description
Playwright automation framework for testing the login functionality of [SauceDemo](https://www.saucedemo.com/), built with TypeScript and the Page Object Model pattern.

## Tech stack
- Playwright
- TypeScript
- Node.js
- GitHub Actions (CI)
- Page Object Model (POM)

## Project structure
```
playwright-framework/
├── .github/workflows/ # CI pipeline (GitHub Actions)
├── pages/
│ └── LoginPage.ts # Page Object for the login page
├── tests/
│ └── login.spec.ts # Login test scenarios
├── playwright.config.ts # Playwright configuration (browsers, reporters, etc.)
├── package.json
└── README.md
```

## Test scenarios
- Successful login with valid credentials
- Locked user shows error message

## Getting started
### Prerequisites
- [Node.js](https://nodejs.org/) (LTS version recommended)

### Installation
```bash
git clone https://github.com/charlesriesco-qa/playwright-framework.git
cd playwright-framework
npm ci
npx playwright install
```

## Running the tests
Run all tests (all browsers):
```bash
npx playwright test
```

Run a specific file:
```bash
npx playwright test tests/login.spec.ts
```

Run in headed mode (see the browser):
```bash
npx playwright test --headed
```

View the HTML report after a run:
```bash
npx playwright show-report
```

## CI
Test will run on every push with GitHub Actions