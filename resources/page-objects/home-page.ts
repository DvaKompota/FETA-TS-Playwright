import { User } from '@/test-data/users';
import { BasePage } from '@basePage';

export class HomePage extends BasePage {
  // Home Page elements
  private emailField = this.page.getByPlaceholder('Email');
  private passwordField = this.page.getByPlaceholder('Password');
  private submitButton = this.page.getByRole('button', { name: 'Submit' });
  private signUpButton = this.page.getByRole('button', { name: 'Sign up' });

  // Home Page actions
  async logIn(user: User) {
    await this.emailField.fill(user.email);
    await this.passwordField.fill(user.password);
    await this.submitButton.click();
  }

  async signUp() {
    await this.signUpButton.click();
  }
}
