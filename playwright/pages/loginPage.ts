import { BasePage } from './basepage';

export class LoginPage extends BasePage {

  // Locator functions specific to loginPage
  loginFormButton = () => this.page.locator('span[data-test="login-button"]');
  emailInput = () => this.page.locator('input[name="identifier"]');
  passwordInput = () => this.page.locator('input[name="credentials.passcode"]');
  loginButton = () => this.page.locator('input[type="submit"]');
  
  async enterEmail(email: string) {
    await this.enterText(this.emailInput, email);
    await this.clickElement(this.loginButton);
  }

  async enterPassword(password: string) {
    await this.enterText(this.passwordInput, password);
  }

  async clickLoginButton() {
    await this.clickElement(this.loginButton);
  }

 async navigateToLoginForm()  {
    await this.clickConsentManagerIfPresent();
    await this.clickElement(this.loginFormButton);
 }

  // Performs the login action
  async login(email: string, password: string) {
    await this.enterEmail(email);
    await this.enterPassword(password);
    await this.clickLoginButton();
  }

  // Verifies if the login page is loaded by checking the visibility of the login button
  async verifyIsPageLoaded(): Promise<boolean> {
    return this.loginButton().isVisible();
  }

  // Consent pop is not linked in dom so using keyboard actions to handle consent
  async clickConsentManagerIfPresent() {
    const consentManager = this.page.locator('#transcend-consent-manager');

    if (await consentManager.count() > 0) { // Check if the element exists
      await this.page.keyboard.press('Enter');
    }
  }
}
