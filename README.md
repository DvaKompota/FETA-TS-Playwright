# Front-End Test Automation framework using Playwright on TypeScript

This End-to-End (E2E) test automation framework is built using Playwright.<br/>
It utilizes Page Object and API Object Models to interact with the application under test (AUT) — [Contact List App](https://thinking-tester-contact-list.herokuapp.com/)

## Structure

The framework consists of:

- Page Objects: Represent UI pages, containing page-specific locators and methods to interact with page elements. These objects are wrapped into the `ui` fixture.
- API Objects: Similar to Page Objects, but for API interactions. These objects are wrapped into the `api` fixture.
- Tests: A set of test files, divided by areas/features/functionality, that contain E2E scenarios, which interact with the application under test (UI and API), and assert the expeced behavior of the application.

Note that unlike the Page Objects that are kept directly in the `resources/page-objects` folder, API objects for the AUT are nested in the dedicated `resources/api-objects/contact-list` folder. The reason to do so is that the framework is supposed to interract with only one UI — the one that is being tested, while API calls can be made to different applications: AUT, dependencies, integrations, 3rd-party apps, etc.
So `BasePage` is the base class for all the AUT's Page Objects, while `BaseApi` is the base class for all kinds of API Objects, including the AUT's, so there's a middle man called `BaseContactListApi` which serves as the base class for all the AUT's API Objects.

## Setting Up the Framework

To set up the framework locally, follow these steps:

1. Install [Node.js](https://nodejs.org/en/download/prebuilt-installer)
2. Clone this repo
3. Open a terminal in the repo's root folder and run:
```
npm install
npx playwright install --with-deps
```

## Test Execution

Once the framework is set up, you can run the E2E tests using `npx playwright test` command in the root directory.
By default tests will execute in parallel using the default number of workers.

If you want to run a specific test file, use `npx playwright test <path_to_file>`, e.g.:

```
npx playwright test tests/example.test.ts
```

If you want to run a specific test, use `npx playwright test -g "<test_title>"`, e.g.:

```
npx playwright test -g "Create a new contact"
```

If you want to disable tests parallelisation and run them sequentially one after another, use `npx playwright test --workers=1` command.
Each test should be designed to be 100% isolated from others, with no dependencies on pre-existing data or other tests, so disabling parallelisation is not usually needed.

## Writing New Tests

When writing new tests, please adhere to the following principles:

- Use only custom fixtures of the framework. Directly using built-in Playwright fixtures (browser, context, page, request) in \*.test.ts files is prohibited, as it undermines the structured architecture of the framework.
- Use API methods for quick test data generation and creation, so that every test uses its own unique set of data.
- Keep all assertions in the test files. Page/API objects should interact with the application, but not validate the behavior. The only exception is waiters, such as `ui.home.waitForUrlToContain();` or `ui.contactList.waitForHeaderToBe()`, which use `waitFor()` or `expect()` operators to wait for the application to be in a certain condition before continuing with the test execution.

## Creating and Editing Page/API Objects

When creating new or editing existing Page/API objects, follow the same structure and principles as the existing ones, such as:

- Create locators for all the interactable elements on the page, including those that display useful information, such as notifications, toast messages, and errors.
- Make locators private attributes of the Page object to avoid exposing them to the test files (reduces the length of the page methods IDE dropdown). Same applies to all the page methods, that are not useful or user-friendly to be used in the tests, like those that return Locator objects or accept them as an argument:

```
private async getTableRowByCellText(name: string): Promise<Locator>
private async getNameInTableRow(row: Locator): Promise<string>
private async getEmailInTableRow(row: Locator): Promise<string>
```

Exceptions are possible, but they should be rare

- Use locators of parent elements (page sections, modals, tables, etc.) to narrow down the scope of child elements:

```
protected root = this.page.locator('body');
private addContactButton = this.root.getByRole('button', { name: 'Add a New Contact' })
private table = this.root.locator('table');
private tableHeaders = this.table.locator('thead > tr');
```

- For elements that have multiple instances (such as cells in a row of a table), use the opposite approach — use a common locator via this.page notation to find all instances of an element, so that it can be used in a .locator() statement:

```
private table = this.root.locator('table');
private tableRows = this.root.locator('table > tr');
private tableCells = this.page.locator('td');

private async getTableRowByCellText(name: string): Promise<Locator> {
  const cell = this.tableCells.getByText(name, { exact: true });
  return this.tableRows.filter({ has: cell });
}

private async getNameInTableRow(row: Locator): Promise<string> {
  const cell = row.locator(this.tableCells).nth(1);
  return await cell.innerText();
}
```

- Ensure that methods of Page/API objects interact with the application, but do not validate the behavior

## Adding New Fixtures

To add a new interface for interacting with other applications or services — follow the example of the API fixture: create all the necessary API objects in the respective directory (e.g. `resources/api-objects/<your-service-name>`) wrap them with a fixture following the example of the API Fixture: `resources/fixtures/ApiFixture.ts`, and implement this fixture in `resources/fixtures/Fixtures.ts` using a short handle like `db`, `mock`, etc.
