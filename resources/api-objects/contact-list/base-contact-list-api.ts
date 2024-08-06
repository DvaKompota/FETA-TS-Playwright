import config from '@config';
import { trimTrailingSlash } from 'resources/test-data/utils';
import { ApiMethod, BaseApi } from '@baseApi';

export class BaseContactListApi extends BaseApi {
  private baseUrl: string = trimTrailingSlash(config.baseURL);
  private token: string = process.env.API_TOKEN || '';

  protected async makeRequest(apiMethod: ApiMethod, path: string, body?: Record<string, any>, token?: string) {
    const url = `${this.baseUrl}/${path}`;
    return await super.makeRequest(apiMethod, url, body, token || this.token);}
}
