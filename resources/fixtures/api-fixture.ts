import { APIRequestContext, Page } from '@/fixtures/fixtures';
import { Users } from '@/api-objects/users';
import { BaseApi } from '@baseApi';

export class APIFixture {
  private base: BaseApi;
  users: Users

  constructor(request: APIRequestContext) {
    this.base = new BaseApi(request);
    this.users = new Users(request);
  }
}
