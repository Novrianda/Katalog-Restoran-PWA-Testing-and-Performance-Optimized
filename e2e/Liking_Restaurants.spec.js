/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('liking one retaurant', async ({ I }) => {
  I.see('No Data Found', '#container-empty');
  I.amOnPage('/');
  I.seeElement('.restaurant-item');

  const firstRestaurant = locate('.restaurant-item a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  I.waitForClickable(firstRestaurant, 5);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  const likedRestaurant = locate('.restaurant-item a').first();
  const likedRestaurantTitle = await I.grabTextFrom(likedRestaurant);
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});
