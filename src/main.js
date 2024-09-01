// У файлі main.js напиши всю логіку роботи додатка.

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { getPictures } from './js/pixabay-api.js';
import { createMarkup } from './js/render-functions.js';

const formSearch = document.querySelector('.js-search');
const listImages = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

loader.style.display = 'none';

formSearch.addEventListener('submit', onSearch);

function onSearch(event) {
  event.preventDefault();
  listImages.innerHTML = '';
  loader.style.display = 'block';

  const inputValue = event.target.elements.search.value;

  if (!validateInput(inputValue)) {
    loader.style.display = 'none';
    return;
  }

  getPictures(inputValue)
    .then(data => {
      loader.style.display = 'none';

      if (!data.hits.length) {
        iziToast.error({
          title: 'Error',
          message: 'Sorry, there are no images matching your search query. Please try again!',
        });
      } else {
        listImages.innerHTML = createMarkup(data.hits);

        const refreshPage = new SimpleLightbox('.gallery a', {
          captions: true,
          captionsData: 'alt',
          captionDelay: 250,
        });
        refreshPage.refresh();
      }

      formSearch.reset();
    })
    .catch(err => {
      loader.style.display = 'none';
      console.log(err);
    });
}

function validateInput(valueInput) {
  const trimmedValue = valueInput.trim();

  if (trimmedValue === '') {
    alert("Кажется, вы забыли указать, какое фото вы хотите найти :)");
    return false;
  } else {
    console.log("Input корректный");
    return true;
  }
}
