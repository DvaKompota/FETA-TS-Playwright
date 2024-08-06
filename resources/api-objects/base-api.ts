import { APIRequestContext } from '@/fixtures/fixtures';

export enum ApiMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH',
}

export class BaseApi {
  requestContext: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.requestContext = request;
  }

  protected async makeRequest(apiMethod: ApiMethod, url: string, body?: Record<string, any>, token?: string) {
    const response = await this.requestContext.fetch(url, {
      method: apiMethod,
      headers: {
        'Content-Type': 'application/json',
        Authorization: token ? `Bearer ${token}` : '',
      },
      data: body ? body : null,
    });
    return response;
  }
}
