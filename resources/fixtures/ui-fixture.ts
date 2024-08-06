import { Page } from '@/fixtures/fixtures';
import { AddContactPage } from '@/page-objects/add-contact';
import { ContactListPage } from '@/page-objects/contact-list';
import { HomePage } from '@/page-objects/home-page'
import { BasePage } from '@basePage';

export class UIFixture {
  private base: BasePage;
  home: HomePage;
  contactList: ContactListPage;
  addContact: AddContactPage;

  constructor(page: Page) {
    this.base = new BasePage(page);
    this.home = new HomePage(page);
    this.contactList = new ContactListPage(page);
    this.addContact = new AddContactPage(page);
  }

  async open() {
    await this.base.goto();
  }
}
