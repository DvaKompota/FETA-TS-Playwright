import { Locator } from '@/fixtures/fixtures';
import { User } from '@/test-data/users';
import { BasePage } from '@basePage';

export class ContactListPage extends BasePage {
  // Contact List Page elements
  private addContactButton = this.root.getByRole('button', { name: 'Add a New Contact' });
  private table = this.root.locator('table');
  private tableWithContacts = this.root.locator('#myTable');
  private tableHeaders = this.table.locator('thead > tr');
  private tableRows = this.root.locator('table > tr');
  private tableCells = this.page.locator('td');

  // Contact List Page actions
  async addContact() {
    await this.addContactButton.click();
  }

  private async getTableRowByCellText(name: string): Promise<Locator> {
    const cell = this.tableCells.getByText(name, { exact: true });
    return this.tableRows.filter({ has: cell });
  }

  private async getNameInTableRow(row: Locator): Promise<string> {
    const cell = row.locator(this.tableCells).nth(1);
    return await cell.innerText();
  }

  private async getEmailInTableRow(row: Locator): Promise<string> {
    const cell = row.locator(this.tableCells).nth(3);
    return await cell.innerText();
  }

  async getContactNameByEmail(email: string): Promise<string> {
    const row = await this.getTableRowByCellText(email);
    return await this.getNameInTableRow(row);
  }

  async getContactEmailByName(name: string): Promise<string> {
    const row = await this.getTableRowByCellText(name);
    return await this.getEmailInTableRow(row);
  }
}
