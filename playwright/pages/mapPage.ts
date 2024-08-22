import { BasePage } from './basepage';

export class MapPage extends BasePage {

  // Locator functions specific to MapPage
  mapView = () => this.page.locator('.map-view');
  satelliteView = () => this.page.locator('.map-satellite-view');
  neighborhoodRating = () => this.page.locator('span[data-test="NeighborhoodRating"]');
  housing = () => this.page.locator('span[data-test="Housing"]');
  amenities = () => this.page.locator('span[data-test="Amenities"]');
  demographics = () => this.page.locator('span[data-test="Demographics"]');
  mapLayerCategory = () => this.page.locator('[data-test="map-layer-categories"] div').filter({ hasText: 'Neighborhood Rating' });
  mapClosePopup = () => this.page.locator('.mapboxgl-popup-close-button');
  map = () => this.page.getByLabel('Map', { exact: true });
  neighborhoodPopupRatings = () => this.page.locator('[data-test="neighborhood-popup-ratings"]');
  categoryCell = () => this.page.locator('[data-test="neighborhood-popup-ratings"] [role="cell"][name="Category"]');
  propertyDetails = () => this.page.locator('(//div[@data-test="additional-inputs-required-link"])[1]');
  modalCloseButton = () => this.page.locator('//button[@data-test="modal-close-button"]');
  
  // Actions
  async switchToMapView() {
    await this.clickElement(this.mapView);
  }

  async switchToSatelliteView() {
    await this.clickElement(this.satelliteView);
  }

  async clickNeighborhoodRating() {
    await this.clickElement(this.neighborhoodRating);
  }

  async clickHousing() {
    await this.clickElement(this.housing);
  }

  async clickAmenities() {
    await this.clickElement(this.amenities);
  }

  async clickDemographics() {
    await this.clickElement(this.demographics);
  }

  async clickMapAtPosition(x: number, y: number) {
    await this.map().click({ position: { x, y } });
  }

  async clickNeighborhoodPopupRatingByRole(role: string, name: string) {
    await this.neighborhoodPopupRatings().getByRole('cell', { name }).click();
  }

  async clickNeighborhoodPopupRatingByText(text: string) {
    await this.neighborhoodPopupRatings().getByText(text).click();
  }

  async closePopup() {
    await this.clickElement(this.mapClosePopup);
  }

  // Combine actions as needed to perform interactions on map
  async performMapActions() {
    await this.switchToSatelliteView();
    await this.switchToMapView();
    await this.clickHousing();
    await this.clickAmenities();
    await this.clickDemographics();
    await this.clickNeighborhoodRating();
    await this.page.waitForTimeout(2000);
    await this.page.mouse.click(500,400);
    await this.clickMapAtPosition(305, 304);
    await this.clickMapAtPosition(202, 326);
    
    await this.closePopup();
    await this.clickMapAtPosition(86, 355);
    await this.clickNeighborhoodPopupRatingByText('Population');
    await this.clickNeighborhoodPopupRatingByText('Population');
    await this.clickNeighborhoodPopupRatingByText('Rating');
    await this.clickNeighborhoodPopupRatingByRole('cell', 'Rank');
    await this.clickNeighborhoodPopupRatingByRole('cell', 'Value');
    await this.clickNeighborhoodPopupRatingByRole('cell', 'Category');
    await this.closePopup();
    
  }
}
