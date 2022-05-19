import CONFIG from '../../globals/config';
import extractStringFromList from '../../utils/string-from-list';

const createPoint = (array) => {
  let innerLi = '';
  array.forEach((element) => {
    innerLi += `<li>${element}</li>`;
  });
  return innerLi;
};

const create3Review = (array) => {
  let innerReview = '';
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    innerReview += `
            <div class="card-review">
                <p><u>${element.date} by <b>${element.name}</b></u></p>
                <p>${element.review}</p>
            </div>
        `;
    if (i === 2) {
      break;
    }
  }
  return innerReview;
};

const createAllReview = (array) => {
  let innerReview = '';
  array.forEach((element) => {
    innerReview += `
            <div class="card-review">
                <p><u>${element.date} by <b>${element.name}</b></u></p>
                <p>${element.review}</p>
            </div>
        `;
  });
  return innerReview;
};

const createRestaurantItemTemplate = (restaurant) => `
    <div class='restaurant-item'>
      <a href="/#/detail/${restaurant.id}">
        <div class="column">
            <div class="card">
                <img class="icon lazyload" alt="${restaurant.name}" data-src="${CONFIG.BASE_IMAGE_URL}medium/${restaurant.pictureId}">
                <div class="city">
                    <p class="text-city">${restaurant.city}</p>
                </div>
                <p class="rating">Rating: ${restaurant.rating}</p>
                <p class="title">${restaurant.name}</p>
                <p class="subtitle">${restaurant.description}.</p>
            </div>
        </div>
      </a>
    </div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
    <img class="image-detail" alt="${restaurant.name}" src="${CONFIG.BASE_IMAGE_URL}large/${restaurant.pictureId}">
    <h1 class="padding20">${restaurant.name}</h1>
    <p class="padding10"><b>Rating: </b>${restaurant.rating}</p>
    <p class="padding10"><b>Location: </b>${restaurant.address}, ${restaurant.city}</p>
    <p class="padding10"><b>Kategori Menu: </b>${extractStringFromList(restaurant.categories)}</p>
    <p class="padding10"><b>Menu Makanan: </b></p>
    <ul class="marginStart40">
        ${createPoint(extractStringFromList(restaurant.menus.foods))}
    </ul>
    <p class="padding10"><b>Menu Minuman: </b></p>
    <ul class="marginStart40">
        ${createPoint(extractStringFromList(restaurant.menus.drinks))}
    </ul>
    <p class="padding10"><b>Deskripsi</b></p>
    <p class="padding10 justify">${restaurant.description}</p>
    <p class="padding10"><b>Customer Review</b></p>
    <div id="review-container" class="padding10">${create3Review(restaurant.customerReviews)}</div>
    <button id="btn-show" class="btn-show">Show All</button>
`;

const createLikeRestaurantButtonTemplate = () => `
    <button aria-label="like this movie" id="likeButton" class="like">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
    `;

const createUnlikeRestaurantButtonTemplate = () => `
    <button aria-label="unlike this movie" id="likeButton" class="like">
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
    `;

export {
  createRestaurantItemTemplate, createRestaurantDetailTemplate,
  createAllReview, createLikeRestaurantButtonTemplate, createUnlikeRestaurantButtonTemplate,
};
