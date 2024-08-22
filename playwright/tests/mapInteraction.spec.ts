import { test } from '../helpers/fixtures';
import { expect } from '@playwright/test';
import * as userDetails from '../helpers/test-data/user.json';

test.describe('Search Flow', () => {

  test.beforeEach(async ({ loginPage }) => {
    await loginPage.navigateToHomePage();
    await loginPage.navigateToLoginForm();
  });

  test.describe('Navigate to interactive map of an  address provided', () => {
    userDetails.users.validUsers.forEach((user: { email: string; password: string; type: string }) => {
      test(`verify interaction`, 
      { tag: ["@Search", "@Regression", "@Smoke"]},
      async ({ loginPage, searchPage , mapPage, basePage}) => {
        await loginPage.login(user.email, user.password);
        expect(await loginPage.verifyIsPageLoaded()).toBe(true);
        await searchPage.search("10600 Highland Springs Ave","10600 Highland Springs Ave, Beaumont, CA 92223, USA");
        await mapPage.performMapActions();
      });
    });
  });
});
