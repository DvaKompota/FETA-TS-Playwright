import { User } from '@/test-data/users';
import { BasePage } from '@basePage';

export class AddContactPage extends BasePage {
  // Add Contact Page elements
  private firstNameField = this.root.getByLabel('First Name');
  private lastNameField = this.root.getByLabel('Last Name');
  private dobField = this.root.getByLabel('Date of Birth');
  private emailField = this.root.getByLabel('Email');
  private phoneField = this.root.getByLabel('Phone');
  private address1Field = this.root.getByLabel('Street Address 1');
  private address2Field = this.root.getByLabel('Street Address 2');
  private cityField = this.root.getByLabel('City');
  private stateField = this.root.getByLabel('State or Province');
  private zipField = this.root.getByLabel('Postal Code');
  private countryField = this.root.getByLabel('Country');
  private submitButton = this.root.getByRole('button', { name: 'Submit' });
  private cancelButton = this.root.getByRole('button', { name: 'Cancel' });

  // Add Contact Page actions
  async addContact(user: User) {
    await this.firstNameField.fill(user.firstName);
    await this.lastNameField.fill(user.lastName);
    await this.emailField.fill(user.email);
    await this.submitButton.click();
  }
}
