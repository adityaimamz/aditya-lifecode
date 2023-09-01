/* eslint-disable comma-dangle */
/* eslint-disable no-undef */
import FavoriteButtonInitiator from "../src/scripts/utils/favorite-button-initiator";
import FavoriteRestaurantIdb from "../src/scripts/data/favoriterestaurant-idb";

describe("Liking A restaurant", () => {
  const addfavoriteButtonContainer = () => {
    document.body.innerHTML = '<div id="favoriteButtonContainer"></div>';
  };

  beforeEach(() => {
    addfavoriteButtonContainer();
  });

  it("should show the like button when the restaurant has not been liked before", async () => {
    await FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector("#favoriteButtonContainer"),
      restaurant: {
        id: 1,
      },
    });

    expect(
      document.querySelector('[aria-label="add to favorite"]')
    ).toBeTruthy();
  });

  it("should not show the unlike button when the restaurant has not been liked before", async () => {
    await FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector("#favoriteButtonContainer"),
      restaurant: {
        id: 1,
      },
    });

    expect(
      document.querySelector('[aria-label="remove from favorite"]')
    ).toBeFalsy();
  });

  it("should be able to like the restaurant", async () => {
    await FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector("#favoriteButtonContainer"),
      restaurant: {
        id: 1,
      },
    });

    document.querySelector("#favoriteButton").dispatchEvent(new Event("click"));
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(1);

    expect(restaurant).toEqual({ id: 1 });

    FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it("should not add a restaurant again when its already liked", async () => {
    await FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector("#favoriteButtonContainer"),
      restaurant: {
        id: 1,
      },
    });

    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
    document.querySelector("#favoriteButton").dispatchEvent(new Event("click"));
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([
      { id: 1 },
    ]);

    FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  xit("should not add a restaurant when it has no id", async () => {
    await FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector("#favoriteButtonContainer"),
      restaurant: {},
    });

    document.querySelector("#favoriteButton").dispatchEvent(new Event("click"));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
