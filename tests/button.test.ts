import { test } from "@/fixtures/fixtures";

test('Test button', async ({page}) => {
  await page.goto('https://dvakompota.github.io/FETA-TS-Playwright/');
  await page.getByRole('button', {name: 'Test'}).waitFor({state: 'visible'});
  await page.getByRole('button', {name: 'OK'}).waitFor({state: 'hidden'});
  await page.getByRole('button', {name: 'Test'}).click();
  await page.getByRole('button', {name: 'OK'}).waitFor({state: 'visible'});
  await page.getByRole('button', {name: 'Test'}).waitFor({state: 'hidden'});
});

