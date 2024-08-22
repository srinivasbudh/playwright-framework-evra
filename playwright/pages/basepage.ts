import { Page } from 'playwright';
import { Locator, expect } from '@playwright/test';
import colors from 'colors';

// BasePage class encapsulates common page interactions for Playwright
export class BasePage {
  protected page: Page;

  // Constructor to initialize the page instance
  constructor(page: Page) {
    this.page = page;
  }

  // Navigates to the home page by opening the local index.html file
  async navigateToHomePage() {
    await this.page.goto('/');
  }

  // Clicks on an element when its visible using locator function
  async clickElement(locatorFunction: () => Locator) {
    const element = locatorFunction();
    await element.waitFor({ state: 'visible' });
    await element.click();
  }

  // Enters text into an element when its visible using locator function
  async enterText(locatorFunction: () => Locator, text: any) {
    const element = locatorFunction();
    await element.waitFor({ state: 'visible' , timeout: 30000 });
    await element.fill(text);
  }

  // click on element only when it exist
  async clickElementIfPresent(locatorFunction: () => Locator) {
    const element = locatorFunction();

    if (await element.count() > 0) { 
      await element.click();
    }
  }

  // returning element visible in a safe way
  async isElementVisible(locatorFunction: () => Locator): Promise<boolean> {
    try{
      await locatorFunction().waitFor({ state: 'visible', timeout: 30000 });
      return true;
    }catch {
      return false;
    }
  }

  //method to select dropdown item from a list
  async selectDropdownItem(itemText: string) {
    await this.page.getByText(itemText).click();
  }
}
