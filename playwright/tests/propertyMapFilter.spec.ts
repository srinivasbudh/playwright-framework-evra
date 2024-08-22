import { test } from '../helpers/fixtures';
import * as userDetails from '../helpers/test-data/user.json';

test.describe('Property map filter', () => {

  test.beforeEach(async ({ loginPage }) => {
    await loginPage.navigateToHomePage();
    await loginPage.navigateToLoginForm();
  });

  test.describe('Navigate to Property map flow', () => {
    userDetails.users.validUsers.forEach((user: { email: string; password: string; type: string }) => {
      test(`apply filters and verify changes in total list`, 
      { tag: ["@Filters", "@Regression", "@Smoke"]},
      async ({ loginPage, searchPage , propertyMapPage}) => {
        await loginPage.login(user.email, user.password);
        await searchPage.navigateToPropertyType();
        await propertyMapPage.verifyPageLoading();
        await propertyMapPage.uncheckAllTheCheckBoxes();
        await propertyMapPage.enterUnits('100','150');
        await propertyMapPage.enterYears('2006','2014');
        await propertyMapPage.enterSafetyScore('55','90');
      });
    });
  });
});
