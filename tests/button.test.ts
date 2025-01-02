import { test, expect } from "@/fixtures/fixtures";

test('Test button', async ({page}) => {
  await page.goto('https://dvakompota.github.io/FETA-TS-Playwright/');
  const clickButton = page.getByRole('button', {name: 'Click'});
  const pushButton = page.getByRole('button', {name: 'Push'});
  const disableButton = page.getByRole('button', {name: 'Disable'});

  await clickButton.waitFor({state: 'visible'});
  await clickButton.innerText().then(text => expect(text).toBe('Click'));
  await pushButton.waitFor({state: 'visible'});
  await pushButton.innerText().then(text => expect(text).toBe('Push'));
  await disableButton.waitFor({state: 'visible'});
  await disableButton.innerText().then(text => expect(text).toBe('Disable'));
  await expect(disableButton).not.toBeDisabled();
  
  await clickButton.click();
  await clickButton.innerText().then(text => expect(text).toBe('Click'));

  await pushButton.click();
  await pushButton.innerText().then(text => expect(text).toBe('Pushed'));
  await pushButton.click();
  await pushButton.innerText().then(text => expect(text).toBe('Push'));

  await disableButton.click();
  await disableButton.innerText().then(text => expect(text).toBe('Disabled'));
  await expect(disableButton).toBeDisabled();
});

