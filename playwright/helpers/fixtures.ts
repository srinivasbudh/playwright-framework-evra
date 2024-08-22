import { test as base } from '@playwright/test';
import { BasePage } from '../pages/basepage';
import { LoginPage } from '../pages/loginPage';
import { MapPage } from '../pages/mapPage';
import { PropertyMapPage } from '../pages/propertyMapPage';
import { SearchPage } from '../pages/searchPage';

// creating a type Pages object, to manage all page objects at one place 
type Pages = {
  basePage: BasePage;
  loginPage: LoginPage;
  searchPage: SearchPage;
  mapPage: MapPage;
  propertyMapPage: PropertyMapPage;
};

// Extend the base test to include the pages, injecting them into the test context and inialising at one place
export const test = base.extend<Pages>({
  
  basePage: async ({ page }, use) => {
    await use(new BasePage(page));
  },
  
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  searchPage: async ({ page }, use) => {
    await use(new SearchPage(page));
  },

  mapPage: async ({ page }, use) => {
    await use(new MapPage(page));
  },

  propertyMapPage: async ({ page }, use) => {
    await use(new PropertyMapPage(page));
  }

});
