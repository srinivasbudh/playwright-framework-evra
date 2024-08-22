import { BasePage } from './basePage';

export class SearchPage extends BasePage {

  // Locator functions specific to SearchPage
  searchBar = () => this.page.locator('#address_input');
  propertyMapMenu = () => this.page.locator('a[data-test="menu-propertyMap"]');
  overViewTab = () => this.page.locator('div[data-test="page-Overview"]');
  filterPanel = () => this.page.locator('div[data-test="panel-1"]');

  // perform search of a specific address
  async search(searchText: string, dropDownValue: string) {
    await this.enterText(this.searchBar,searchText); 
    await this.page.waitForTimeout(2000);
    await this.page.keyboard.press('Backspace');
    await this.page.waitForTimeout(2000);
    await this.selectDropdownItem(dropDownValue);
    await this.clickElement(this.overViewTab);
  }

  async navigateToPropertyType() {
    await this.clickElement(this.propertyMapMenu);
  }


}
