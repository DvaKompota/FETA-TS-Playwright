import { expect, test } from "@/fixtures/fixtures";
import { User } from "@/test-data/users";

test('Create a new contact', async ({ ui, api }) => {
  await ui.home.waitForLoad();
  await ui.home.waitForHeaderToBe('Contact List App');
  const user = User.createRandomUser();
  await api.users.addUser(user);
  await ui.home.logIn(user);
  await ui.contactList.waitForLoad();
  await ui.contactList.waitForHeaderToBe('Contact List');
  await ui.contactList.addContact();
  await ui.addContact.waitForLoad();
  await ui.addContact.waitForHeaderToBe('Add Contact');
  await ui.addContact.addContact(user);
  await ui.contactList.waitForLoad();
  await ui.contactList.waitForHeaderToBe('Contact List');
  const displayedName = await ui.contactList.getContactNameByEmail(user.email);
  expect(displayedName).toBe(`${user.firstName} ${user.lastName}`);
  const displayedEmail = await ui.contactList.getContactEmailByName(`${user.firstName} ${user.lastName}`);
  expect(displayedEmail).toBe(user.email);
  await ui.contactList.logOut();
  await ui.home.waitForLoad();
  await ui.home.waitForHeaderToBe('Contact List App');
});
