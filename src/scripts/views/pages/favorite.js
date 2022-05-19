import FavoriteRestaurantIdb from "../../data/favoriterestaurant-idb";
import { createRestaurantItemTemplate } from "../templates/template-creator";
import LoadingInitiator from "../../utils/loading-initiator";

const Favorite = {
  async render() {
    return `
            <h2 id="main" class="explore-text">Your Favorite Restaurant</h2>
            <div id="container-empty">No Data Found</picture>
            </div>
            <div class="row" id="container-list"></div>
        `;
  },

  async afterRender() {
    LoadingInitiator.init();

    LoadingInitiator.showLoading();
    try {
      const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
      const listContainer = document.querySelector("#container-list");
      const containerEmpty = document.querySelector("#container-empty");
      if (restaurants.length === 0) {
        containerEmpty.classList.remove("hide");
      } else {
        containerEmpty.classList.add("hide");
        restaurants.forEach((restaurant) => {
          listContainer.innerHTML += createRestaurantItemTemplate(restaurant);
        });
      }
    } catch (error) {
      alert(`${error}\nGagal memuat halaman, cobalah beberapa saat lagi`);
    }
    LoadingInitiator.hideLoading();
  },
};

export default Favorite;
