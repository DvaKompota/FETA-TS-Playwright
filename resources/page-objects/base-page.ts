import config from '@config';
import { Locator, Page } from '@/fixtures/fixtures';
import { trimTrailingSlash } from 'resources/test-data/utils';

export class BasePage {
  private baseUrl: string = trimTrailingSlash(config.baseURL);
  protected page: Page;
  protected root: Locator;
  protected header: Locator;
  protected logOutButton: Locator;
  // common page elements should be defined here

  constructor(page: Page) {
    this.page = page;
    this.root = this.page.locator('body');
    this.header = this.root.locator('h1');
    this.logOutButton = this.root.getByRole('button', { name: 'Logout' });
    // common page elements should be initialized here
  }

  // common page actions
  async goto(path: string = '') {
    await this.page.goto(`${this.baseUrl}/${path}`, { waitUntil: 'domcontentloaded' });
  }

  async reload() {
    await this.page.reload();
  }

  async waitForUrlToContain(path: string) {
    await this.page.waitForURL(`**\/${path}**`);
  }

  async waitForLoad() {
    await this.header.waitFor({ state: 'visible' });
  }

  async waitForHeaderToBe(title: string) {
    await this.header.getByText(title, { exact: true }).waitFor({ state: 'visible' });
  }

  async logOut() {
    await this.logOutButton.click();
  }
}
