/* eslint-disable comma-dangle */
/* eslint-disable no-undef */
import FavoriteButtonInitiator from "../src/scripts/utils/favorite-button-initiator";
import FavoriteRestaurantIdb from "../src/scripts/data/favoriterestaurant-idb";

const addfavoriteButtonContainer = () => {
  document.body.innerHTML = '<div id="favoriteButtonContainer"></div>';
};

describe("Unliking A Restaurant", () => {
  beforeEach(async () => {
    addfavoriteButtonContainer();
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it("should display unlike widget when the restaurant has been liked", async () => {
    await FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector("#favoriteButtonContainer"),
      restaurant: {
        id: 1,
      },
    });

    expect(
      document.querySelector('[aria-label="remove from favorite"]')
    ).toBeTruthy();
  });

  it("should not display like widget when the restaurant has been liked", async () => {
    await FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector("#favoriteButtonContainer"),
      restaurant: {
        id: 1,
      },
    });

    expect(
      document.querySelector('[aria-label="add to favorite"]')
    ).toBeFalsy();
  });

  it("should be able to remove liked restaurant from the list", async () => {
    await FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector("#favoriteButtonContainer"),
      restaurant: {
        id: 1,
      },
    });

    document
      .querySelector('[aria-label="remove from favorite"]')
      .dispatchEvent(new Event("click"));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });

  it("should not throw error if the unliked restaurant is not in the list", async () => {
    await FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector("#favoriteButtonContainer"),
      restaurant: {
        id: 1,
      },
    });

    await FavoriteRestaurantIdb.deleteRestaurant(1);
    document
      .querySelector('[aria-label="remove from favorite"]')
      .dispatchEvent(new Event("click"));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
