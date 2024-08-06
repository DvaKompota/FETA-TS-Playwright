import { test as base } from '@playwright/test';
import { UIFixture } from '@/fixtures/ui-fixture';
import { APIFixture } from '@/fixtures/api-fixture';

type Fixtures = {
  ui: UIFixture;
  api: APIFixture;
};

export const test = base.extend<Fixtures>({
  ui: async ({ page }, use) => {
    const ui = new UIFixture(page);
    await ui.open();
    await use(ui);
  },
  api: async ({ request }, use) => {
    const api = new APIFixture(request);
    await use(api);
  },
});

export { expect, APIRequest, APIResponse, APIRequestContext, Page, Locator } from '@playwright/test';
