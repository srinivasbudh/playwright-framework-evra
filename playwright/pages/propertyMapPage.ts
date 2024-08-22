import { BasePage } from './basepage';
import { expect } from '@playwright/test';

export class PropertyMapPage extends BasePage {

  filterPanel = () => this.page.locator('div[data-test="panel-1"]');
  geoPhyVerifiedCheckBox = () => this.page.locator('input[data-test="filter-geophy-verified"]');
  unitsCheckBox = () => this.page.locator('[data-test="Units-include-unknown"]');
  yearCheckBox = () => this.page.locator('[data-test="YearBuilt-include-unknown"]');
  safetyScoreCheckBox = () => this.page.locator('[data-test="SafetyScore-include-unknown"]');
  unitsMinimumInput = () => this.page.locator('[data-test="Units-minimum"]');
  unitsMaximumInput = () => this.page.locator('[data-test="Units-maximum"]');
  yearsMinimumInput = () => this.page.locator('[data-test="YearBuilt-minimum"]');
  yearsMaximumInput = () => this.page.locator('[data-test="YearBuilt-maximum"]');
  safetyScoreMinimumInput = () => this.page.locator('[data-test="SafetyScore-minimum"]');
  safetyScoreMaximumInput = () => this.page.locator('[data-test="SafetyScore-maximum"]');
  

  // verify page loading
  async verifyPageLoading() {
    const value = await this.isElementVisible(this.filterPanel)
    expect(value).toEqual(true);
  }
  
  // uncheck all the checboxes in filters page
  async uncheckAllTheCheckBoxes(){
    await this.checkBoxUncheck(this.unitsCheckBox);
    await this.checkBoxUncheck(this.yearCheckBox);
    await this.checkBoxUncheck(this.safetyScoreCheckBox);
  }

  async enterUnits(minimumInput:any , maximumInput:any){
    await this.enterText(this.unitsMinimumInput, minimumInput);
    await this.enterText(this.unitsMaximumInput, maximumInput);
  }

  
  async enterYears(minimumInput:any , maximumInput:any){
    await this.enterText(this.yearsMinimumInput, minimumInput);
    await this.enterText(this.yearsMaximumInput, maximumInput);
  }

  
  async enterSafetyScore(minimumInput:any , maximumInput:any){
    await this.enterText(this.safetyScoreMinimumInput, minimumInput);
    await this.enterText(this.safetyScoreMaximumInput, maximumInput);
  }


}
