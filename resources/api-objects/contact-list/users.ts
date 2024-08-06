import { ApiMethod } from '@baseApi';
import { BaseContactListApi } from './base-contact-list-api';
import { AddUserResponse, User } from '@/test-data/users';

export class Users extends BaseContactListApi {
  private path: string = 'users';

  async addUser(user: User) {
    return await this.makeRequest(ApiMethod.POST, this.path, user);
  }

  async createUserAndSaveToken(user: User) {
    const response = await this.addUser(user);
    const responseBody: AddUserResponse = await response.json();
    user.token = responseBody.token;
  }

  async logIn(user: User) {
    const payload = {email: user.email, password: user.password};
    const response = await this.makeRequest(ApiMethod.POST, `${this.path}/login`, payload);
    const responseBody: AddUserResponse = await response.json();
    user.token = responseBody.token;
  };

  async logOut(user: User) {
    await this.makeRequest(ApiMethod.POST, `${this.path}/logout`, undefined, user.token);
    user.token = '';
  }
}
