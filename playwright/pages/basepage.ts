import { Page } from 'playwright';
import { Locator, expect } from '@playwright/test';

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

  // uncheck a checkbox when required
  async checkBoxUncheck(locatorFunction: () => Locator) {
    const element = locatorFunction();
    await element.waitFor({ state: 'visible', timeout: 30000 });
    // Small delay to ensure the element is ready
    await this.page.waitForTimeout(1000);
    await element.uncheck();
    await expect(element).not.toBeChecked();
  }

  //This mouse click is required to interact with the map
  async mouseClickOnAElement(locatorFunction: () => Locator){
    const element = locatorFunction();
    const box = await element.boundingBox();
  
    if (box) {
      const x = box.x + box.width +10;
      const y = box.y + box.height + 10;
      
      await this.page.mouse.click(x, y);
    } else {
      console.error('Element not found or not visible');
    }
  }
}
