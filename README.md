 # Playwright Capstone Project

## Project Description

This project is a web automation testing framework built with **Playwright and JavaScript**.

It is designed to automate key user flows such as:

* User login
* Product navigation
* Adding products to cart
* Checkout process
* General application validation

The project uses the **Page Object Model (POM)** approach to separate test logic from page interactions and improve maintainability.

## Project Structure

```text
Capstone/
├── fixtures/
│   └── pageEements/
│       └── LginPage.json
│
├── pages/
│   ├── basePage.js
│   ├── LoginPage.js
│   ├── ProductsPage.js
│   ├── CartPage.js
│   └── CheckoutPage.js
│
├── test-data/
│   └── users.js
│
├── tests/
│   ├── example.spec.js
│   ├── login.spec.js
│   ├── products.spec.js
│   └── checkout.spec.js
│
├── utils/
│   └── testData.json
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.js
└── README.md
```

## Prerequisites

Before running the project, ensure the following are installed:

* Node.js
* npm
* Git
* Visual Studio Code or another code editor

You can confirm Node.js and npm are installed by running:

```bash
node --version
npm --version
```

## Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
```

Move into the project directory:

```bash
cd Capstone
```

### 2. Install Project Dependencies

```bash
npm install
```

### 3. Install Playwright Browsers

```bash
npx playwright install
```

## Environment Configuration

The project may use a `.env` file for environment-specific configuration.

Example:

```env
BASE_URL=https://www.saucedemo.com/
```

The `.env` file should not be committed to Git because it may contain sensitive information.

Ensure `.env` is included in `.gitignore`.

## How to Run the Tests

### Run All Tests

```bash
npx playwright test
```

### Run a Specific Test File

For example:

```bash
npx playwright test tests/login.spec.js
```

### Run Tests in Headed Mode

This allows you to watch the browser while the test executes.

```bash
npx playwright test --headed
```

### Run Tests in Playwright UI Mode

```bash
npx playwright test --ui
```

### Run Tests in Debug Mode

```bash
npx playwright test --debug
```

## How to Generate and View the Test Report

Playwright automatically generates an HTML test report after test execution when the HTML reporter is configured.

Run the tests:

```bash
npx playwright test
```

Then open the generated report:

```bash
npx playwright show-report
```

The HTML report provides information such as:

* Passed tests
* Failed tests
* Test execution time
* Error messages
* Screenshots and traces where configured

The generated report is normally stored in:

```text
playwright-report/
```

## Running Tests and Opening the Report

You can run the test suite first:

```bash
npx playwright test
```

Then view the report:

```bash
npx playwright show-report
```

## Technologies Used

* JavaScript
* Node.js
* Playwright
* Git
* GitHub

## Test Framework Approach

The project uses the **Page Object Model**.

Page objects are stored inside the `pages` folder and contain reusable page interactions.

Test scripts are stored inside the `tests` folder and focus on test scenarios and validations.

Test data is kept separately inside folders such as:

```text
test-data/
utils/
```

This makes the framework easier to maintain and reduces duplicated code.

## Author

Ifeoma Onyemize
